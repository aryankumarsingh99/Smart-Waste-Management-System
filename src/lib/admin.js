import Admin from "@/models/Admin";
import bcrypt from "bcryptjs";
import dbConnect from "./dbConnect"; // You need to implement dbConnect

export async function findAdminByGovId(gov_id) {
  await dbConnect();
  return await Admin.findOne({ gov_id });
}

export async function createAdmin(data) {
  await dbConnect();
  const hashed = await bcrypt.hash(data.password, 10);
  const admin = await Admin.create({ ...data, password: hashed });
  return admin;
}

export async function verifyAdmin(gov_id, password) {
  await dbConnect();
  const admin = await Admin.findOne({ gov_id });
  if (!admin) return null;
  const match = await bcrypt.compare(password, admin.password);
  if (!match) return null;
  return admin;
}