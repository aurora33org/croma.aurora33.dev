export const config = {
  server: {
    port: parseInt(process.env.PORT || '3000', 10),
    nodeEnv: process.env.NODE_ENV || 'development'
  },

  // Upload limits
  upload: {
    maxFileSize: parseInt(process.env.MAX_FILE_SIZE || '10485760', 10), // 10MB
    maxFiles: parseInt(process.env.MAX_FILES || '20', 10),
    allowedMimeTypes: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
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

  // Supported formats
  supportedFormats: ['jpeg', 'jpg', 'png', 'webp', 'gif'],
  outputFormats: ['webp', 'jpeg', 'png']
};
