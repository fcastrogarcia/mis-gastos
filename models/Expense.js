import mongoose from "mongoose";

const { Schema } = mongoose;

const ExpenseSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  name: { type: String, required: true },
  amount: Number,
  comment: String,
  period: { month: Number, year: Number },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

// middlewares

ExpenseSchema.pre("save", function (next) {
  const createdAt = this.created_at;
  const dueDate = this.due_date;
  const nextDate = dueDate ? dueDate : createdAt;

  this.period = {
    month: nextDate.getUTCMonth(),
    year: nextDate.getUTCFullYear(),
  };

  next();
});

export default mongoose.models.Payment || mongoose.model("Payment", ExpenseSchema);
