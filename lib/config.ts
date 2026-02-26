export const config = {
  server: {
    port: parseInt(process.env.PORT || '3000', 10),
    nodeEnv: process.env.NODE_ENV || 'development'
  },

  // Upload limits
  upload: {
    maxFileSize: parseInt(process.env.MAX_FILE_SIZE || '10485760', 10), // 10MB
    maxFiles: parseInt(process.env.MAX_FILES || '20', 10),
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
    MAX_FILES: 5,                          // Max files per request
    MAX_FILE_SIZE: 7 * 1024 * 1024,       // 7MB per file
    MAX_DAILY_USAGE: 6,                   // Max compressions per day
  },
  PRO: {
    MAX_FILES: 15,                         // Max files per request
    MAX_FILE_SIZE: 12 * 1024 * 1024,      // 12MB per file
    MAX_DAILY_USAGE: 20,                  // Max compressions per day
  },
} as const;

/**
 * Available tier names
 */
export const TIER_NAMES = ['FREE', 'PRO'] as const;
export type Tier = typeof TIER_NAMES[number];
