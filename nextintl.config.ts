import { Pathnames, LocalePrefix } from 'next-intl/routing';

export const defaultLocale = 'lt' as const;
export const locales = ['lt', 'en', 'ru'] as const;

export const pathnames: Pathnames<typeof locales> = {
  '/': '/',
  '/pathnames': {
    lt: '/kontaktai',
    en: '/contacts',
    ru: '/kontakty',
  },
};

export const localePrefix: LocalePrefix<typeof locales> = 'always';
