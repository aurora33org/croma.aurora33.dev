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

// Show the Terms/Privacy pages + footer links. OFF by default so self-hosters
// don't expose Aurora33's legal docs as their own. Opt in with
// NEXT_PUBLIC_LEGAL=on (the official hosted instance sets this). Build-time.
export const showLegal = process.env.NEXT_PUBLIC_LEGAL === 'on';

// Runtime resilience / abuse-protection knobs. Server-side only (plain env,
// applied at runtime — change on the host without a rebuild). Defaults follow
// the same local/server preset: "server" is conservative to fit small hosts.
const isServerMode = process.env.NEXT_PUBLIC_HOST === 'server';
const runtimePreset = isServerMode
  ? { maxConcurrent: 1, maxQueue: 8, rateMax: 5, sharp: 1 }
  : { maxConcurrent: 2, maxQueue: 30, rateMax: 30, sharp: 2 };

const intEnv = (name: string, fallback: number) =>
  parseInt(process.env[name] || String(fallback), 10);

export const runtime = {
  maxConcurrentJobs: intEnv('MAX_CONCURRENT_JOBS', runtimePreset.maxConcurrent),
  maxQueue: intEnv('MAX_QUEUE', runtimePreset.maxQueue),
  rateLimitMax: intEnv('RATE_LIMIT_MAX', runtimePreset.rateMax),
  rateLimitWindowMin: intEnv('RATE_LIMIT_WINDOW_MIN', 5),
  sharpConcurrency: intEnv('SHARP_CONCURRENCY', runtimePreset.sharp),
  // Same-origin guard for mutating API routes. Self-hosters who want to call
  // the API directly can disable it with ENFORCE_SAME_ORIGIN=false.
  enforceSameOrigin: process.env.ENFORCE_SAME_ORIGIN !== 'false',
  // Optional extra allowed origins (comma-separated hostnames).
  allowedOrigins: (process.env.ALLOWED_ORIGINS || '')
    .split(',')
    .map((o) => o.trim())
    .filter(Boolean),
  // Behind a trusted proxy/custom domain (Railway, Cloudflare) the public host
  // arrives in x-forwarded-host. Only honor it when the operator opts in — the
  // header is client-spoofable when the app is directly exposed.
  trustForwardedHost: process.env.TRUST_FORWARDED_HOST === 'true',
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
