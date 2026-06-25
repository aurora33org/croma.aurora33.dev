"use client";

import { ReactNode } from "react";
import { LocaleProvider } from "@/lib/i18n-context";
import { type Locale } from "@/i18n/config";

interface ProvidersProps {
  children: ReactNode;
  locale: Locale;
  messages: Record<string, any>;
}

export function Providers({
  children,
  locale,
  messages,
}: ProvidersProps) {
  return (
    <LocaleProvider locale={locale} messages={messages}>
      {children}
    </LocaleProvider>
  );
}
