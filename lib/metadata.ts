const BASE_URL = 'https://compareae.com'

export function buildAlternates(locale: string, path: string) {
  const url = (loc: string) => `${BASE_URL}/${loc}${path}`
  return {
    canonical: url(locale),
    languages: {
      ar: url('ar'),
      en: url('en'),
      'x-default': url('ar'),
    } as Record<string, string>,
  }
}

export function ogLocale(locale: string) {
  return locale === 'ar' ? 'ar_AE' : 'en_AE'
}
