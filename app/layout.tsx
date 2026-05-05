import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { ReactNode } from "react";
import { cookies } from "next/headers";
import { locales, defaultLocale, type Locale } from "@/i18n/config";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Providers } from "@/app/providers";
import { Navigation } from "@/components/Navigation";
import { initializeAdmin } from "@/lib/admin-init";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value;
  return locales.includes(locale as Locale) ? (locale as Locale) : defaultLocale;
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const baseUrl = "https://croma.aurora33.org";

  return {
    title: locale === "en"
      ? "Croma - Image Compression Tool"
      : "Croma - Compresor de Imágenes",
    description: locale === "en"
      ? "Optimize your images for any project. Compress, resize, and convert to WebP, JPEG, or PNG"
      : "Optimiza tus imágenes para cualquier proyecto. Comprime, redimensiona y convierte a WebP, JPEG o PNG",
    openGraph: {
      title: locale === "en"
        ? "Croma - Image Compression Tool"
        : "Croma - Compresor de Imágenes",
      description: locale === "en"
        ? "Optimize your images for any project"
        : "Optimiza tus imágenes para cualquier proyecto",
      url: baseUrl,
      locale: locale,
      type: "website",
    },
    alternates: {
      canonical: baseUrl,
      languages: Object.fromEntries(
        locales.map((l) => [l, `${baseUrl}?lang=${l}`])
      ),
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  // Initialize admin user on startup
  await initializeAdmin();

  const locale = await getLocale();
  const messages = (await import(`@/i18n/locales/${locale}`)).default as any;
  const session = await getServerSession(authOptions);

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {locales.map((l) => (
          <link
            key={l}
            rel="alternate"
            hrefLang={l}
            href={`https://croma.aurora33.org?lang=${l}`}
          />
        ))}
        {/* Inline script to apply dark mode before hydration — prevents flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(t===null&&d)){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Providers
          session={session}
          locale={locale}
          messages={messages}
        >
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}
