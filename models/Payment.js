import mongoose from "mongoose";
import { getStatus } from "utils/time";

const { Schema } = mongoose;

const opts = { toJSON: { virtuals: true } };

const PaymentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    due_date: Date,
    provider: String,
    comment: String,
    period: { month: Number, year: Number },
    status: { is_paid: { type: Boolean, default: false }, date: Date },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
  },
  opts
);

// virtuals

PaymentSchema.virtual("current_status").get(function () {
  const isPaid = this.status.is_paid;
  let dueDate = this.due_date;
  dueDate = new Date(dueDate).getTime();

  if (isPaid) return "paid";
  else return getStatus(dueDate);
});

// middlewares

PaymentSchema.pre("save", function (next) {
  const createdAt = this.created_at;
  const dueDate = this.due_date;
  const nextDate = dueDate ? dueDate : createdAt;

  this.period = {
    month: nextDate.getUTCMonth(),
    year: nextDate.getUTCFullYear(),
  };

  next();
});

export default mongoose.models.Payment || mongoose.model("Payment", PaymentSchema);
