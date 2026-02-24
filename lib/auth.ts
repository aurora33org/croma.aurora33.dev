import { hash, compare } from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { logger } from "@/lib/utils/logger";

/**
 * Type definitions for authentication
 */
export interface AuthUser {
  id: string;
  email: string;
  tier: string;
  emailConsent: boolean;
}

export interface CreateUserResponse {
  success: boolean;
  user?: AuthUser;
  error?: string;
}

/**
 * Validate email format using basic regex
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

/**
 * Validate password requirements:
 * - Minimum 8 characters
 */
export function validatePassword(password: string): { valid: boolean; error?: string } {
  if (password.length < 8) {
    return { valid: false, error: "Password must be at least 8 characters" };
  }
  return { valid: true };
}

/**
 * Hash password using bcryptjs
 */
export async function hashPassword(password: string): Promise<string> {
  return hash(password, 12);
}

/**
 * Verify password against hash
 */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return compare(password, hash);
}

/**
 * Create a new user with email and password
 * Validates:
 * - Email format
 * - Password requirements
 * - Email uniqueness
 * - Email consent (required)
 */
export async function createUser(
  email: string,
  password: string,
  emailConsent: boolean
): Promise<CreateUserResponse> {
  // Validate email consent
  if (!emailConsent) {
    return { success: false, error: "Email consent is required" };
  }

  // Validate email format
  if (!validateEmail(email)) {
    return { success: false, error: "Invalid email format" };
  }

  // Validate password
  const passwordValidation = validatePassword(password);
  if (!passwordValidation.valid) {
    return { success: false, error: passwordValidation.error };
  }

  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { success: false, error: "Email already registered" };
    }

    // Hash password
    const passwordHash = await hashPassword(password);

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        passwordHash,
        emailConsent: true,
        tier: "FREE", // All new users start as FREE tier
      },
      select: {
        id: true,
        email: true,
        tier: true,
        emailConsent: true,
        createdAt: true,
      },
    });

    return { success: true, user };
  } catch (error) {
    logger.error("Error creating user", { error });
    return { success: false, error: "Failed to create user" };
  }
}

/**
 * Find user by email (internal use - includes passwordHash)
 */
export async function findUserByEmail(
  email: string
): Promise<(AuthUser & { passwordHash: string; createdAt: Date; updatedAt: Date }) | null> {
  try {
    return await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        passwordHash: true,
        tier: true,
        emailConsent: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  } catch (error) {
    logger.error("Error finding user", { error });
    return null;
  }
}

/**
 * Verify user credentials
 */
export async function verifyUserCredentials(
  email: string,
  password: string
): Promise<{ success: boolean; user?: Omit<AuthUser, 'emailConsent'>; error?: string }> {
  const user = await findUserByEmail(email);

  if (!user) {
    return { success: false, error: "Invalid credentials" };
  }

  const isValid = await verifyPassword(password, user.passwordHash);

  if (!isValid) {
    return { success: false, error: "Invalid credentials" };
  }

  if (!user.emailConsent) {
    return { success: false, error: "Email consent is required" };
  }

  return {
    success: true,
    user: {
      id: user.id,
      email: user.email,
      tier: user.tier,
    },
  };
}
