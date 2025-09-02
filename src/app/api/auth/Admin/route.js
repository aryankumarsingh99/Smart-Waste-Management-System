import { NextResponse } from "next/server";

// Dummy admin data for demonstration
const admins = [
  {
    gov_id: "GOV123456",
    full_name: "Amit Kumar",
    department: "Municipal Corp.",
    email: "amit.kumar@gov.in",
    phone: "9876543210",
    designation: "Supervisor",
    password: "admin@123", // In production, use hashed passwords!
  },
];

// POST /api/auth/Admin
export async function POST(request) {
  const body = await request.json();
  const { gov_id, password } = body;

  // Find admin by gov_id
  const admin = admins.find(
    (a) => a.gov_id === gov_id && a.password === password
  );

  if (admin) {
    // Return admin info (never return password)
    const { password, ...adminInfo } = admin;
    return NextResponse.json({
      success: true,
      admin: adminInfo,
      message: "Login successful",
    });
  } else {
    return NextResponse.json({
      success: false,
      message: "Invalid Government ID or password",
    }, { status: 401 });
  }
}