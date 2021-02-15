import mongoose from "mongoose";

const { Schema } = mongoose;

const ExpenseSchema = new Schema({});

export default mongoose.models.Payment || mongoose.model("Payment", ExpenseSchema);
