import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale, type Locale } from '@/i18n/config';

function detectLocale(req: NextRequest): Locale {
  // 1. cookie preference
  const cookie = req.cookies.get('NEXT_LOCALE')?.value;
  if (cookie && locales.includes(cookie as Locale)) return cookie as Locale;

  // 2. Accept-Language header
  const al = req.headers.get('accept-language');
  if (al) {
    const preferred = al
      .split(',')
      .map((p) => p.split(';')[0].trim().slice(0, 2).toLowerCase());
    const match = preferred.find((l) => locales.includes(l as Locale));
    if (match) return match as Locale;
  }

  // 3. default
  return defaultLocale;
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return NextResponse.next();

  const locale = detectLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  const res = NextResponse.redirect(url);
  res.cookies.set('NEXT_LOCALE', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
  });
  return res;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)',
  ],
};
