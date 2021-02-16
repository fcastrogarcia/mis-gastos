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
    amount: { type: Number, required: true },
    due_date: Date,
    provider: String,
    comment: String,
    period: { type: String, required: true },
    status: { is_paid: Boolean, date: Date },
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

export default mongoose.models.Payment || mongoose.model("Payment", PaymentSchema);
