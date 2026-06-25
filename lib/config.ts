/**
 * Single set of upload limits for everyone (no tiers, no auth).
 */
export const DEFAULT_LIMITS = {
  MAX_FILES: parseInt(process.env.NEXT_PUBLIC_MAX_FILES || '100', 10),
  MAX_FILE_SIZE: parseInt(process.env.NEXT_PUBLIC_MAX_FILE_MB || '100', 10) * 1024 * 1024,
};

export const config = {
  server: {
    port: parseInt(process.env.PORT || '3000', 10),
    nodeEnv: process.env.NODE_ENV || 'development'
  },

  // Upload limits
  upload: {
    maxFileSize: DEFAULT_LIMITS.MAX_FILE_SIZE,
    maxFiles: DEFAULT_LIMITS.MAX_FILES,
    allowedMimeTypes: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/avif']
  },

  // Cleanup configuration
  cleanup: {
    interval: parseInt(process.env.CLEANUP_INTERVAL || '15', 10), // minutes
    fileTTL: parseInt(process.env.FILE_TTL || '3600', 10) // seconds (1 hour)
  },

  // Storage
  storage: {
    baseDir: '/tmp/jobs'
  },

  // Supported formats
  supportedFormats: ['jpeg', 'jpg', 'png', 'webp', 'gif'],
  outputFormats: ['webp', 'jpeg', 'png', 'avif']
};
