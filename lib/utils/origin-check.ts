import { NextRequest } from 'next/server';
import { runtime } from '../config';

/**
 * Same-origin guard for mutating API routes.
 *
 * Browsers always send an `Origin` header on fetch POSTs, so legitimate
 * same-origin requests pass. Direct API calls from other sites or scripts
 * (no/foreign Origin) are rejected — a cheap layer against third parties
 * reusing the deployed service.
 *
 * Disable with ENFORCE_SAME_ORIGIN=false; allow extra hosts via ALLOWED_ORIGINS.
 */
export function assertSameOrigin(request: NextRequest): boolean {
  if (!runtime.enforceSameOrigin) return true;

  const selfHost = request.nextUrl.host; // host:port of this deployment
  const allowed = new Set<string>([selfHost, ...runtime.allowedOrigins]);

  const source = request.headers.get('origin') || request.headers.get('referer');
  if (!source) return false;

  try {
    const host = new URL(source).host;
    return allowed.has(host);
  } catch {
    return false;
  }
}
