import NextAuth, { type NextAuthOptions, type DefaultSession } from "next-auth";
import { type JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyUserCredentials } from "@/lib/auth";

// Extend next-auth types
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      tier: string;
      emailConsent?: boolean;
      isAdmin?: boolean;
    } & DefaultSession["user"];
  }
  interface User {
    id: string;
    email?: string;
    tier?: string;
    emailConsent?: boolean;
    isAdmin?: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    tier?: string;
    isAdmin?: boolean;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        const result = await verifyUserCredentials(credentials.email, credentials.password);

        if (!result.success || !result.user) {
          throw new Error(result.error || "Invalid credentials");
        }

        return {
          id: result.user.id,
          email: result.user.email,
          tier: result.user.tier,
          isAdmin: result.user.isAdmin,
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user }: { user: { id: string; email?: string; emailConsent?: boolean; tier?: string } }) {
      // Validate email consent is true
      if (!user.email || !user.emailConsent) {
        return false;
      }
      return true;
    },
    async jwt({ token, user }: { token: JWT; user?: { id: string; email?: string; tier?: string; isAdmin?: boolean } }) {
      // Add user info to JWT token
      if (user) {
        token.id = user.id;
        token.tier = user.tier || "FREE";
        token.isAdmin = user.isAdmin || false;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: JWT }) {
      // Add user info to session
      if (session.user) {
        session.user.id = (token.id as string) || "";
        session.user.tier = (token.tier as string) || "FREE";
        session.user.isAdmin = (token.isAdmin as boolean) || false;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
    error: "/auth/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
