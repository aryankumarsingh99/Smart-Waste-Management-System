// filepath: src/lib/user.js
import User from "@/models/User";
import bcrypt from "bcryptjs";
import dbConnect from "./dbConnect"; // You need to implement dbConnect

export async function findUserByEmail(email) {
  await dbConnect();
  return await User.findOne({ email });
}

export async function createUser(data) {
  await dbConnect();
  const hashed = await bcrypt.hash(data.password, 10);
  const user = await User.create({ ...data, password: hashed });
  return user;
}

export async function verifyUser(email, password) {
  await dbConnect();
  const user = await User.findOne({ email });
  if (!user) return null;
  const match = await bcrypt.compare(password, user.password);
  if (!match) return null;
  return user;
}