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
      router.push("/dashboard");
    }
  }, [session, router]);

  if (session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-bold text-orange-500 hover:text-orange-600 transition-colors">
            Croma
          </Link>
          <h1 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
            Create Account
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Get started with Croma Image Compressor for free
          </p>
        </div>

        <RegisterForm />

        <div className="mt-8 text-center text-xs text-gray-500 dark:text-gray-400">
          <p>
            By creating an account, you agree to our{" "}
            <Link href="/terms" className="text-orange-500 hover:text-orange-600">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-orange-500 hover:text-orange-600">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
