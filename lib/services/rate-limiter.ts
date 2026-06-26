import { NextRequest } from 'next/server';
import { runtime } from '../config';

interface Bucket {
  count: number;
  resetAt: number;
}

/**
 * In-memory fixed-window rate limiter, keyed by client IP.
 *
 * Single-instance only (resets on restart) — enough to stop casual
 * automation/abuse on a free tool. For multi-replica use a shared store.
 */
class RateLimiter {
  private buckets = new Map<string, Bucket>();

  private get windowMs() {
    return runtime.rateLimitWindowMin * 60 * 1000;
  }

  check(ip: string): { ok: boolean; retryAfterSec: number } {
    const now = Date.now();
    const bucket = this.buckets.get(ip);

    if (!bucket || now >= bucket.resetAt) {
      this.buckets.set(ip, { count: 1, resetAt: now + this.windowMs });
      return { ok: true, retryAfterSec: 0 };
    }

    if (bucket.count >= runtime.rateLimitMax) {
      return { ok: false, retryAfterSec: Math.ceil((bucket.resetAt - now) / 1000) };
    }

    bucket.count++;
    return { ok: true, retryAfterSec: 0 };
  }
}

declare global {
  var rateLimiterInstance: RateLimiter | undefined;
}

export const rateLimiter = global.rateLimiterInstance || new RateLimiter();
if (process.env.NODE_ENV === 'development') {
  global.rateLimiterInstance = rateLimiter;
}

/** Extract the client IP from proxy headers (Railway/Cloudflare set these). */
export function getClientIp(request: NextRequest): string {
  const xff = request.headers.get('x-forwarded-for');
  if (xff) return xff.split(',')[0].trim();
  return request.headers.get('x-real-ip') || 'unknown';
}
