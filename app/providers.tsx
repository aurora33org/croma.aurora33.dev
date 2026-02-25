"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { LocaleProvider } from "@/lib/i18n-context";
import { type Locale } from "@/i18n/config";
import type { Session } from "next-auth";

interface ProvidersProps {
  children: ReactNode;
  session: Session | null;
  locale: Locale;
  messages: Record<string, any>;
}

export function Providers({
  children,
  session,
  locale,
  messages,
}: ProvidersProps) {
  return (
    <SessionProvider session={session}>
      <LocaleProvider locale={locale} messages={messages}>
        {children}
      </LocaleProvider>
    </SessionProvider>
  );
}
