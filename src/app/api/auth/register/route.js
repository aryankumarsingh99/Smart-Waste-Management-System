import { NextResponse } from "next/server";
import { createUser, findUserByEmail } from "@/lib/user";

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      address,
      city,
      state,
      pincode,
      password,
      confirm,
    } = body;

    // Basic validation
    if (
      !name ||
      !email ||
      !phone ||
      !address ||
      !city ||
      !state ||
      !pincode ||
      !password ||
      !confirm
    ) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    if (password !== confirm) {
      return NextResponse.json(
        { success: false, message: "Passwords do not match." },
        { status: 400 }
      );
    }

    // Check if user already exists using lib
    const exists = await findUserByEmail(email);
    if (exists) {
      return NextResponse.json(
        { success: false, message: "User already registered." },
        { status: 409 }
      );
    }

    // Save user using lib (should hash password inside lib)
    const user = await createUser({
      name,
      email,
      phone,
      address,
      city,
      state,
      pincode,
      password,
    });

    return NextResponse.json({
      success: true,
      message: "Registration successful.",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        city: user.city,
        state: user.state,
        pincode: user.pincode,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error." },
      { status: 500 }
    );
  }
}