import { NextRequest, NextResponse } from "next/server";
import { createUser, validateEmail, validatePassword } from "@/lib/auth";
import { logger } from "@/lib/utils/logger";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, emailConsent } = body;

    // Validate required fields
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate password
    const passwordValidation = validatePassword(password);
    if (!passwordValidation.valid) {
      return NextResponse.json(
        { error: passwordValidation.error },
        { status: 400 }
      );
    }

    // Validate email consent
    if (!emailConsent) {
      return NextResponse.json(
        { error: "Email consent is required" },
        { status: 400 }
      );
    }

    // Create user
    const result = await createUser(email, password, emailConsent);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || "Failed to create user" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: "User registered successfully",
        user: result.user,
      },
      { status: 201 }
    );
  } catch (error) {
    logger.error("Registration error", { error });
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
