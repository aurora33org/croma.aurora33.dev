// Utility for tracking anonymous user sessions (batches) using cookies and localStorage

const SESSION_COUNT_COOKIE = '_aurora_session_count';
const SESSION_RESET_KEY = '_aurora_session_reset';
const IMAGE_COUNT_KEY = '_aurora_image_count';

export interface SessionLimits {
  batchesUsed: number;
  batchesLimit: number;
  imagesInBatch: number;
  imagesPerBatchLimit: number;
  maxFileSize: number;
  nextResetTime: Date;
}

// FREE TIER LIMITS
const FREE_BATCHES_LIMIT = 6;
const FREE_IMAGES_LIMIT = 5;
const FREE_MAX_FILE_SIZE = parseInt(process.env.NEXT_PUBLIC_MAX_FILE_MB_FREE || '7', 10) * 1024 * 1024;
const RESET_INTERVAL_HOURS = 23;

export function getSessionLimits(): SessionLimits {
  // Get reset timestamp from localStorage
  const resetTimestamp = localStorage.getItem(SESSION_RESET_KEY);
  const now = Date.now();

  let batchesUsed = 0;
  let nextResetTime = new Date(now + RESET_INTERVAL_HOURS * 60 * 60 * 1000);

  if (resetTimestamp) {
    const resetTime = parseInt(resetTimestamp, 10);
    if (now > resetTime) {
      // Reset period passed, clear counters
      localStorage.removeItem(SESSION_RESET_KEY);
      localStorage.removeItem(SESSION_COUNT_COOKIE);
    } else {
      // Still within reset period
      const batchCountStr = localStorage.getItem(SESSION_COUNT_COOKIE);
      batchesUsed = batchCountStr ? parseInt(batchCountStr, 10) : 0;
      nextResetTime = new Date(resetTime);
    }
  }

  const imagesInBatch = localStorage.getItem(IMAGE_COUNT_KEY)
    ? parseInt(localStorage.getItem(IMAGE_COUNT_KEY)!, 10)
    : 0;

  return {
    batchesUsed,
    batchesLimit: FREE_BATCHES_LIMIT,
    imagesInBatch,
    imagesPerBatchLimit: FREE_IMAGES_LIMIT,
    maxFileSize: FREE_MAX_FILE_SIZE,
    nextResetTime
  };
}

export function incrementSessionCount(): void {
  const limits = getSessionLimits();
  const newCount = limits.batchesUsed + 1;

  localStorage.setItem(SESSION_COUNT_COOKIE, newCount.toString());

  // Set reset time if not set
  if (!localStorage.getItem(SESSION_RESET_KEY)) {
    const resetTime = Date.now() + RESET_INTERVAL_HOURS * 60 * 60 * 1000;
    localStorage.setItem(SESSION_RESET_KEY, resetTime.toString());
  }

  // Clear image count for new batch
  localStorage.removeItem(IMAGE_COUNT_KEY);
}

export function incrementImageCount(): void {
  const current = localStorage.getItem(IMAGE_COUNT_KEY) || '0';
  const newCount = parseInt(current, 10) + 1;
  localStorage.setItem(IMAGE_COUNT_KEY, newCount.toString());
}

export function clearSessionData(): void {
  localStorage.removeItem(SESSION_COUNT_COOKIE);
  localStorage.removeItem(SESSION_RESET_KEY);
  localStorage.removeItem(IMAGE_COUNT_KEY);
}
