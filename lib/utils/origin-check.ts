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
 * Behind a proxy/custom domain (Railway, Cloudflare), the public host the
 * browser uses can differ from what Next sees as nextUrl.host, so the public
 * host is also taken from x-forwarded-host / host headers.
 *
 * Disable with ENFORCE_SAME_ORIGIN=false; allow extra hosts via ALLOWED_ORIGINS.
 */
export function assertSameOrigin(request: NextRequest): boolean {
  if (!runtime.enforceSameOrigin) return true;

  // Allowlist is config-pinned: the host Next sees plus explicit ALLOWED_ORIGINS.
  const allowed = new Set<string>(
    [request.nextUrl.host, ...runtime.allowedOrigins]
      .filter((h): h is string => !!h)
      .map((h) => h.toLowerCase())
  );

  // Only when explicitly told we sit behind a trusted proxy do we honor the
  // public host from x-forwarded-host (otherwise it is client-spoofable).
  if (runtime.trustForwardedHost) {
    const fwd = request.headers.get('x-forwarded-host')?.split(',')[0].trim().toLowerCase();
    if (fwd) allowed.add(fwd);
  }

  const source = request.headers.get('origin') || request.headers.get('referer');
  if (!source) return false;

  try {
    return allowed.has(new URL(source).host.toLowerCase());
  } catch {
    return false;
  }
}
