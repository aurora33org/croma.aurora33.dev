import { prisma } from '@/lib/prisma';
import { hashPassword } from '@/lib/auth';
import { config } from '@/lib/config';
import { logger } from '@/lib/utils/logger';

/**
 * Initialize admin user on application startup
 * Creates the admin user if it doesn't exist using credentials from .env
 */
export async function initializeAdmin(): Promise<void> {
  try {
    const adminEmail = config.admin.email;
    const adminPassword = process.env.ADMIN_PASSWORD;

    // If no password is configured, skip initialization
    if (!adminPassword) {
      logger.warn('ADMIN_PASSWORD not set in environment - skipping admin initialization');
      return;
    }

    // Check if admin already exists
    const existingAdmin = await prisma.user.findUnique({
      where: { email: adminEmail },
    });

    if (existingAdmin) {
      logger.info(`Admin user already exists: ${adminEmail}`);
      return;
    }

    // Create admin user
    const passwordHash = await hashPassword(adminPassword);
    const admin = await prisma.user.create({
      data: {
        email: adminEmail,
        passwordHash,
        emailConsent: true,
        tier: 'PRO',
        isAdmin: true,
      },
      select: {
        id: true,
        email: true,
        isAdmin: true,
      },
    });

    logger.success(`Admin user created successfully: ${admin.email}`);
  } catch (error) {
    logger.error('Failed to initialize admin user', { error });
    // Don't throw - allow app to start even if admin initialization fails
  }
}
