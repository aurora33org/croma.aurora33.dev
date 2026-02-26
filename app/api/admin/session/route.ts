import { getServerSession } from 'next-auth';

/**
 * GET /api/admin/session
 * Debug endpoint: Shows current session data
 * No authentication required (for debugging 403 issues)
 */
export async function GET() {
  try {
    const session = await getServerSession();

    const debugInfo = {
      hasSession: !!session,
      hasUser: !!session?.user,
      userEmail: session?.user?.email || null,
      userTier: (session?.user as any)?.tier || null,
      userIsAdmin: (session?.user as any)?.isAdmin || null,
      sessionKeys: session ? Object.keys(session) : [],
      userKeys: session?.user ? Object.keys(session.user) : [],
      fullSession: session ? JSON.parse(JSON.stringify(session)) : null,
    };

    return new Response(JSON.stringify(debugInfo, null, 2), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to get session', details: String(error) }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
