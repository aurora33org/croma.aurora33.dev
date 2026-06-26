/**
 * Single set of upload limits for everyone (no tiers, no auth).
 */
// Preset defaults by deployment mode (NEXT_PUBLIC_HOST).
// Unset/empty → "local": generous defaults for plug-and-play on your own machine.
// "server" → conservative defaults for a deployed (potentially paid) host.
// Explicit NEXT_PUBLIC_MAX_FILES / NEXT_PUBLIC_MAX_FILE_MB always override the preset.
const HOST_PRESETS = {
  server: { files: 10, fileMb: 20 },
} as const;

const preset =
  HOST_PRESETS[process.env.NEXT_PUBLIC_HOST as keyof typeof HOST_PRESETS] ??
  { files: 30, fileMb: 50 }; // default (local / plug-and-play)

export const DEFAULT_LIMITS = {
  MAX_FILES: parseInt(process.env.NEXT_PUBLIC_MAX_FILES || String(preset.files), 10),
  MAX_FILE_SIZE: parseInt(process.env.NEXT_PUBLIC_MAX_FILE_MB || String(preset.fileMb), 10) * 1024 * 1024,
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
