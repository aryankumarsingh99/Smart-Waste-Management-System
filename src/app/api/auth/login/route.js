import { NextResponse } from "next/server";
import { verifyUser } from "@/lib/user";
import { generateToken } from "@/lib/jwt";

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Basic validation
    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email and password are required." },
        { status: 400 }
      );
    }

    // Authenticate user using lib/user.js
    const user = await verifyUser(email, password);
    if (!user) {
      return NextResponse.json(
        { success: false, message: "Invalid email or password." },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = generateToken({
      email: user.email,
      name: user.name,
      role: user.role || "citizen",
    });

    // Set token as HttpOnly cookie (optional, for security)
    const response = NextResponse.json({
      success: true,
      message: "Login successful.",
      user: {
        name: user.name,
        email: user.email,
        role: user.role || "citizen",
      },
      token,
    });
    response.cookies.set("token", token, {
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error." },
      { status: 500 }
    );
  }
}