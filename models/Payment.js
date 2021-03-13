import mongoose from "mongoose";
import { getStatus } from "utils/time";
import startOfMonth from "date-fns/startOfMonth";

const { Schema } = mongoose;

const opts = { toJSON: { virtuals: true } };

const PaymentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    type: { type: String, required: true },
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    due_date: Date,
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

PaymentSchema.virtual("current_status").get(function () {
  const isPaid = this.status.is_paid;
  let dueDate = this.due_date;
  dueDate = new Date(dueDate).getTime();

  if (isPaid) return "paid";
  else return getStatus(dueDate);
});

PaymentSchema.pre("save", function (next) {
  const createdAt = this.created_at;
  const dueDate = this.due_date;
  const nextDate = dueDate ? dueDate : createdAt;
  const date = startOfMonth(new Date(nextDate).getTime());

  this.period = date;

  next();
});

export default mongoose.models.Payment || mongoose.model("Payment", PaymentSchema);
