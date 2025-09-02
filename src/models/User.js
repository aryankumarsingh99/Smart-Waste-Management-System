import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    phone: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    state: { type: String, required: true, trim: true },
    pincode: { type: String, required: true, trim: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["citizen", "admin"], default: "citizen" },
  },
  { timestamps: true }
);

// Prevent model overwrite upon hot-reload in development
export default mongoose.models.User || mongoose.model("User", UserSchema);