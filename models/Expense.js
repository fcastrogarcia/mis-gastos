import mongoose from "mongoose";

const { Schema } = mongoose;

const ExpenseSchema = new Schema({
  amount: Number,
  created_at: Date,
});

export default mongoose.models.Payment || mongoose.model("Payment", ExpenseSchema);
