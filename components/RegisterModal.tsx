'use client';

import { FormEvent, useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useTranslations } from '@/lib/i18n-context';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  context?: 'pricing' | 'image_limit' | 'session_limit';
}

export default function RegisterModal({
  isOpen,
  onClose,
  context,
}: RegisterModalProps) {
  const router = useRouter();
  const t = useTranslations();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  if (!isOpen) {
    return null;
  }

  // Validate password in real-time
  const handlePasswordChange = (value: string) => {
    setPassword(value);
    if (value.length > 0 && value.length < 8) {
      setPasswordError(t('common.password_min_length'));
    } else {
      setPasswordError(null);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    // Validate email
    if (!email || !email.includes('@')) {
      setError(t('common.invalid_email'));
      return;
    }

    // Validate password match
    if (password !== confirmPassword) {
      setError(t('common.passwords_dont_match'));
      return;
    }

    // Validate password length
    if (password.length < 8) {
      setError(t('common.password_min_length'));
      return;
    }

    // Validate checkbox
    if (!marketingConsent) {
      setError(t('common.must_accept_terms'));
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          marketingConsent: true,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || t('common.registration_failed'));
        return;
      }

      // Sign in with credentials
      const signInResult = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (!signInResult?.ok) {
        setError(signInResult?.error || t('common.signin_failed'));
        return;
      }

      // Redirect to tool page on success
      router.push('/tool');
    } catch {
      setError(t('common.error_occurred'));
    } finally {
      setIsLoading(false);
    }
  };

  // Get context message based on context prop
  const getContextMessage = () => {
    switch (context) {
      case 'image_limit':
        return t('pricing.limit_reached.images_message');
      case 'session_limit':
        return t('pricing.limit_reached.sessions_message');
      default:
        return null;
    }
  };

  const contextMessage = getContextMessage();

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black bg-opacity-50 cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md rounded-lg shadow-xl bg-white dark:bg-container-dark border border-gray-200 dark:border-gray-700 p-8">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Title */}
          <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-2">
            {t('common.create_account')}
          </h2>

          {/* Context message */}
          {contextMessage && (
            <p className="text-sm text-text-muted dark:text-text-muted-dark mb-6">
              {contextMessage}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Error message */}
            {error && (
              <div className="p-3 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 rounded text-red-700 dark:text-red-400 text-sm">
                {error}
              </div>
            )}

            {/* Email field */}
            <div>
              <label
                htmlFor="register-email"
                className="block text-sm font-medium text-text dark:text-text-dark mb-2"
              >
                {t('common.email')}
              </label>
              <input
                id="register-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-bg-dark text-text dark:text-text-dark placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="you@example.com"
              />
            </div>

            {/* Password field */}
            <div>
              <label
                htmlFor="register-password"
                className="block text-sm font-medium text-text dark:text-text-dark mb-2"
              >
                {t('common.password')}
              </label>
              <input
                id="register-password"
                type="password"
                value={password}
                onChange={(e) => handlePasswordChange(e.target.value)}
                required
                disabled={isLoading}
                className={`w-full px-4 py-2 border rounded-lg bg-white dark:bg-bg-dark text-text dark:text-text-dark placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                  passwordError
                    ? 'border-red-400 dark:border-red-600 focus:ring-red-500'
                    : 'border-gray-300 dark:border-gray-600 focus:ring-primary dark:focus:ring-primary'
                }`}
                placeholder="••••••••"
              />
              {passwordError && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{passwordError}</p>
              )}
              <p className="mt-1 text-xs text-text-muted dark:text-text-muted-dark">
                {t('common.password_requirements')}
              </p>
            </div>

            {/* Confirm Password field */}
            <div>
              <label
                htmlFor="register-confirm-password"
                className="block text-sm font-medium text-text dark:text-text-dark mb-2"
              >
                {t('common.confirm_password')}
              </label>
              <input
                id="register-confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                disabled={isLoading}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-bg-dark text-text dark:text-text-dark placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="••••••••"
              />
            </div>

            {/* Marketing consent checkbox */}
            <div className="flex items-start">
              <input
                id="register-marketing-consent"
                type="checkbox"
                checked={marketingConsent}
                onChange={(e) => setMarketingConsent(e.target.checked)}
                disabled={isLoading}
                className="mt-1 h-4 w-4 rounded border-gray-300 dark:border-gray-600 text-primary focus:ring-primary dark:focus:ring-primary cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <label
                htmlFor="register-marketing-consent"
                className="ml-3 text-sm text-text dark:text-text-dark cursor-pointer"
              >
                {t('common.accept_terms_and_marketing')}
              </label>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                disabled={isLoading || !marketingConsent}
                className="flex-1 py-2 px-4 bg-primary hover:bg-orange-600 disabled:bg-gray-400 dark:disabled:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-200 disabled:cursor-not-allowed"
              >
                {isLoading ? t('common.registering') : t('common.register')}
              </button>
              <button
                type="button"
                onClick={onClose}
                disabled={isLoading}
                className="flex-1 py-2 px-4 border-2 border-primary text-primary hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white font-medium rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {t('common.cancel')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
