/**
 * Utility for checking admin permissions in API routes
 */

import { Session } from 'next-auth';

export function isUserAdmin(session: Session | null): boolean {
  return !!(session?.user && 'isAdmin' in session.user && session.user.isAdmin);
}

export function createAdminErrorResponse(message: string, status: number) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
