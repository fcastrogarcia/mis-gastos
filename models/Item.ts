import mongoose, { Schema } from "mongoose";
import { getStatus } from "utils/time";
import startOfMonth from "date-fns/startOfMonth";
import { ItemModel } from "types/items";

const opts = { toJSON: { virtuals: true } };

const ItemSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    type: { type: String, required: true },
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    due_date: Date,
    date: { type: Date, default: Date.now },
    provider: String,
    comment: String,
    period: { type: Date },
    status: { is_paid: { type: Boolean, default: false }, date: Date },
    save_as_template: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
  },
  opts
);

ItemSchema.virtual("current_status").get(function () {
  const isPaid = this.status.is_paid;
  const isExpense = this.type === "expense";
  let dueDate = this.due_date;
  dueDate = new Date(dueDate).getTime();

  if (isExpense) return "expense";
  if (isPaid) return "paid";
  else return getStatus(dueDate);
});

ItemSchema.pre<ItemModel>("save", function (next) {
  const date = this.due_date || this.date || this.created_at;
  const period = startOfMonth(new Date(date).getTime());

  this.period = period;

  next();
});

export default mongoose.models.Item || mongoose.model<ItemModel>("Item", ItemSchema);
