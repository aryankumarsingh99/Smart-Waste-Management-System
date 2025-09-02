import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
  gov_id: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Other details are optional and can be added/updated by admin after login
  full_name: String,
  department: String,
  email: String,
  phone: String,
  designation: String,
}, {
  timestamps: true,
});

export default mongoose.models.Admin || mongoose.model("Admin", AdminSchema);