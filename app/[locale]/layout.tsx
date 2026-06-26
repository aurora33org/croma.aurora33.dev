import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { InlineScript } from "@/components/InlineScript";
import { Providers } from "@/app/providers";
import { Navigation } from "@/components/Navigation";
import "../globals.css";

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

const baseUrl = "https://croma.aurora33.org";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const url = `${baseUrl}/${locale}`;
  const title = locale === "en"
    ? "Croma — Free Bulk Image Compressor by Aurora33"
    : "Croma — Compresor de Imágenes Gratis por Aurora33";
  const description = locale === "en"
    ? "Compress, resize and convert images to WebP, JPEG, PNG or AVIF. Free, no sign-up, your images are never stored. Built by Aurora33."
    : "Comprime, redimensiona y convierte imágenes a WebP, JPEG, PNG o AVIF. Gratis, sin registro y sin almacenar tus imágenes. Hecho por Aurora33.";

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Croma by Aurora33",
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: url,
      languages: {
        es: `${baseUrl}/es`,
        en: `${baseUrl}/en`,
        "x-default": `${baseUrl}/es`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const messages = (await import(`@/i18n/locales/${locale}`)).default as any;

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {/* Apply dark mode before hydration — prevents flash of wrong theme */}
        <InlineScript html={`(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(t===null&&d)){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})();`} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Providers locale={locale as Locale} messages={messages}>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}
