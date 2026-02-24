import NextAuth, { type NextAuthOptions, type DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyUserCredentials } from "@/lib/auth";

// Extend next-auth types
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      tier: string;
    } & DefaultSession["user"];
  }
  interface User {
    tier?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    tier?: string;
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
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      // Validate email consent is true
      if (!user.email || !(user as any).emailConsent) {
        return false;
      }
      return true;
    },
    async jwt({ token, user }) {
      // Add user info to JWT token
      if (user) {
        token.id = user.id;
        token.tier = (user as any).tier || "FREE";
      }
      return token;
    },
    async session({ session, token }) {
      // Add user info to session
      if (session.user) {
        session.user.id = (token.id as string) || "";
        session.user.tier = (token.tier as string) || "FREE";
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
