export const config = {
  server: {
    port: parseInt(process.env.PORT || '3000', 10),
    nodeEnv: process.env.NODE_ENV || 'development'
  },

  // Upload limits — ceiling is the highest tier so middleware never blocks before tier validation
  upload: {
    maxFileSize: Math.max(
      parseInt(process.env.NEXT_PUBLIC_MAX_FILE_MB_FREE || '7', 10),
      parseInt(process.env.NEXT_PUBLIC_MAX_FILE_MB_PRO || '12', 10)
    ) * 1024 * 1024,
    maxFiles: parseInt(process.env.NEXT_PUBLIC_MAX_FILES_PRO || '20', 10),
    allowedMimeTypes: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/avif']
  },

  // Cleanup configuration
  cleanup: {
    interval: parseInt(process.env.CLEANUP_INTERVAL || '15', 10), // minutes
    fileTTL: parseInt(process.env.FILE_TTL || '3600', 10) // seconds (1 hour)
  },

  // Listmonk (optional)
  listmonk: {
    enabled: process.env.LISTMONK_ENABLED === 'true',
    url: process.env.LISTMONK_URL || '',
    apiKey: process.env.LISTMONK_API_KEY || '',
    listId: process.env.LISTMONK_LIST_ID || ''
  },

  // Storage
  storage: {
    baseDir: '/tmp/jobs'
  },

  // Admin configuration (password must be set in .env for auto-initialization)
  admin: {
    email: process.env.ADMIN_EMAIL || 'admin@example.com',
    // Password is read directly from ADMIN_PASSWORD env var in admin-init.ts
  },

  // Supported formats
  supportedFormats: ['jpeg', 'jpg', 'png', 'webp', 'gif'],
  outputFormats: ['webp', 'jpeg', 'png', 'avif']
};

/**
 * Tier-based limits for image compression
 */
export const TIER_LIMITS = {
  FREE: {
    MAX_FILES: parseInt(process.env.NEXT_PUBLIC_MAX_FILES_FREE || '5', 10),
    MAX_FILE_SIZE: parseInt(process.env.NEXT_PUBLIC_MAX_FILE_MB_FREE || '7', 10) * 1024 * 1024,
    MAX_DAILY_USAGE: 6,
  },
  PRO: {
    MAX_FILES: parseInt(process.env.NEXT_PUBLIC_MAX_FILES_PRO || '15', 10),
    MAX_FILE_SIZE: parseInt(process.env.NEXT_PUBLIC_MAX_FILE_MB_PRO || '12', 10) * 1024 * 1024,
    MAX_DAILY_USAGE: 20,
  },
};

/**
 * Available tier names
 */
export const TIER_NAMES = ['FREE', 'PRO'] as const;
export type Tier = typeof TIER_NAMES[number];
