import mongoose from "mongoose";
import startOfMonth from "date-fns/startOfMonth";

const { Schema } = mongoose;

const ExpenseSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  type: { type: String, required: true },
  name: { type: String, required: true },
  amount: Number,
  comment: String,
  date: Date,
  provider: String,
  period: { type: Date },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

ExpenseSchema.pre("save", function (next) {
  const createdAt = this.created_at;
  const dueDate = this.due_date;
  const nextDate = dueDate ? dueDate : createdAt;
  const date = startOfMonth(new Date(nextDate).getTime());

  this.period = date;

  next();
});

export default mongoose.models.Expense || mongoose.model("Expense", ExpenseSchema);
