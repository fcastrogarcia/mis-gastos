import mongoose from "mongoose";

const { Schema } = mongoose;

const PaymentSchema = new Schema({});

export default mongoose.models.Payment || mongoose.model("Payment", PaymentSchema);
