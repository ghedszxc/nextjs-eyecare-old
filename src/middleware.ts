import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { DEFAULT_LOCALE, LOCALES } from "./lib/constants/LOCALIZATIONS";

export const locales = LOCALES;
export const defaultLocale = DEFAULT_LOCALE;

function getLocale(request: NextRequest) {
  const locale = request.nextUrl.pathname
    .split("/")
    .filter((route: string) => !!route)?.[0];
  const currentLocale = locales.find((item: string) => item === locale);

  return currentLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  /**
   * Rewrite locales
   */

  switch (getLocale(request)) {
    case defaultLocale:
      if (getLocale(request) === defaultLocale) {
        const url = `${request.nextUrl.origin}/404`;
        return NextResponse.rewrite(new URL(url), request.url as any);
      }
  }

  /**
   * If there is no locale
   * use master as default locale
   * without adding it to the url path
   */
  if (!pathnameHasLocale) {
    const url = `${request.nextUrl.origin}/${defaultLocale}${pathname}`;
    return NextResponse.rewrite(new URL(url), request.url as any);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|images|gaScript.js|sitemap.xml|en/sitemap.xml|robots.txt|not-found).*)",
  ],
};
