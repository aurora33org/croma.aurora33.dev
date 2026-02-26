"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailConsent, setEmailConsent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  // Validate password in real-time
  const handlePasswordChange = (value: string) => {
    setPassword(value);
    if (value.length > 0 && value.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError(null);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    // Validate email consent
    if (!emailConsent) {
      setError("You must consent to emails to register");
      return;
    }

    // Validate password match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Validate password length
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          marketingConsent: true,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Failed to register");
        return;
      }

      // Redirect to login page on success
      router.push("/auth/login?registered=true");
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-container dark:bg-container-dark rounded-xl border border-primary/20">
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="p-3 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 rounded text-red-700 dark:text-red-200 text-sm">
            {error}
          </div>
        )}

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text dark:text-text-dark mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-primary/20 rounded-lg bg-background dark:bg-bg-dark text-text dark:text-text-dark placeholder-text-muted dark:placeholder-text-muted-dark focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-text dark:text-text-dark mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
            required
            className={`w-full px-4 py-2 border rounded-lg bg-background dark:bg-bg-dark text-text dark:text-text-dark placeholder-text-muted dark:placeholder-text-muted-dark focus:outline-none focus:ring-2 ${
              passwordError
                ? "border-red-400 dark:border-red-600 focus:ring-red-500"
                : "border-primary/20 focus:ring-primary/50"
            }`}
            placeholder="••••••••"
          />
          {passwordError && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{passwordError}</p>
          )}
          <p className="mt-1 text-xs text-text-muted dark:text-text-muted-dark">
            Minimum 8 characters
          </p>
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-text dark:text-text-dark mb-1">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-primary/20 rounded-lg bg-background dark:bg-bg-dark text-text dark:text-text-dark placeholder-text-muted dark:placeholder-text-muted-dark focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="••••••••"
          />
        </div>

        <div className="flex items-center">
          <input
            id="emailConsent"
            type="checkbox"
            checked={emailConsent}
            onChange={(e) => setEmailConsent(e.target.checked)}
            className="h-4 w-4 rounded border-primary/20 text-primary focus:ring-primary/50 cursor-pointer"
          />
          <label htmlFor="emailConsent" className="ml-2 text-sm text-text dark:text-text-dark cursor-pointer">
            I agree to receive emails about product updates and news
          </label>
        </div>

        <button
          type="submit"
          disabled={isLoading || !emailConsent}
          className="w-full py-2 px-4 bg-primary hover:opacity-90 disabled:opacity-50 text-white font-medium rounded-lg transition-opacity duration-200"
        >
          {isLoading ? "Creating account..." : "Create Account"}
        </button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-text-muted dark:text-text-muted-dark text-sm">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-primary hover:opacity-80 font-medium transition-opacity">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}
