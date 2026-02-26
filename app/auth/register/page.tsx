"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import RegisterForm from "@/components/RegisterForm";
import Link from "next/link";

export default function RegisterPage() {
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
            Create Account
          </h1>
          <p className="mt-2 text-text-muted dark:text-text-muted-dark">
            Get started for free
          </p>
        </div>

        <RegisterForm />

        <div className="mt-6 text-center text-xs text-text-muted dark:text-text-muted-dark">
          <p>
            By creating an account, you agree to our{" "}
            <Link href="/terms" className="text-primary hover:opacity-80 transition-opacity">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-primary hover:opacity-80 transition-opacity">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
