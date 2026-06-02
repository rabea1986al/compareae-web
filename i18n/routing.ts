import { defineRouting } from 'next-intl/routing'

// Supported locales for CompareAE. Arabic is the default (Arabic-first project).
// localePrefix: 'always' → every page lives under /ar/... or /en/...
export const routing = defineRouting({
  locales: ['ar', 'en'],
  defaultLocale: 'ar',
  localePrefix: 'always',
})

export type Locale = (typeof routing.locales)[number]
