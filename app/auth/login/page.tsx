"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LoginForm from "@/components/LoginForm";
import Link from "next/link";

export default function LoginPage() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/tool");
    }
  }, [session, router]);

  if (session) {
    return null;
  }

  return (
    <div className="min-h-[60vh] bg-background dark:bg-bg-dark flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/tool">
            <h2 className="font-bold hover:opacity-80 transition-opacity inline-block" style={{ fontFamily: '"Kangge", sans-serif', fontSize: 'calc(2.25rem * 0.8)' }}>
              <span className="text-primary">croma.</span><span className="text-text dark:text-text-dark">aurora<sup>33</sup></span>
            </h2>
          </Link>
          <h1 className="mt-6 text-2xl font-bold text-text dark:text-text-dark">
            Sign In
          </h1>
          <p className="mt-2 text-text-muted dark:text-text-muted-dark">
            Welcome back
          </p>
        </div>

        <LoginForm />

        <div className="mt-6 text-center">
          <p className="text-sm text-text-muted dark:text-text-muted-dark">
            New to croma?{" "}
            <Link href="/auth/register" className="text-primary hover:opacity-80 font-medium transition-opacity">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
