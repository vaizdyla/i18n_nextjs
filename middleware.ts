import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['lt', 'en', 'ru'],

  // Used when no locale matches
  defaultLocale: 'lt',
  localeDetection: false,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(lt|en|ru)/:path*'],
};
