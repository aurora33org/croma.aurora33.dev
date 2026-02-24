import { Metadata } from "next";
import LoginForm from "@/components/LoginForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign In - Croma",
  description: "Sign in to your Croma account",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-bold text-orange-500 hover:text-orange-600 transition-colors">
            Croma
          </Link>
          <h1 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
            Sign In
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Welcome back to Croma Image Compressor
          </p>
        </div>

        <LoginForm />

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            New to Croma?{" "}
            <Link href="/auth/register" className="text-orange-500 hover:text-orange-600 font-medium">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
