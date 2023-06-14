import { Schema, model } from "mongoose";
import { IBuyer } from "./buyer.interface";

const buyerSchema = new Schema<IBuyer>(
  {
    displayName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    photoURL: { type: String, default: "" },
    phone: { type: String, default: "" },
    address: {
      houseNo: { type: String, default: "" },
      roadNo: { type: String, default: "" },
      location: { type: String, default: "" },
      district: { type: String, default: "" },
      emergencyContactNo: { type: String, default: "" },
    },
  },
  {
    timestamps: true,
  }
);

export const Buyer = model<IBuyer>("Buyer", buyerSchema);
