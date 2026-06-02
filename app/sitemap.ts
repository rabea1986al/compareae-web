import type { MetadataRoute } from 'next'

const BASE_URL = 'https://compareae.com'
const locales = ['ar', 'en'] as const

const pages = [
  { path: '', changeFrequency: 'weekly' as const, priority: 1.0 },
  { path: '/car-insurance', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/health-insurance', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/travel-insurance', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/business-insurance', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/providers', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/guides', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/faq', changeFrequency: 'monthly' as const, priority: 0.6 },
  { path: '/about', changeFrequency: 'yearly' as const, priority: 0.6 },
  { path: '/contact', changeFrequency: 'yearly' as const, priority: 0.5 },
  { path: '/trust', changeFrequency: 'yearly' as const, priority: 0.5 },
  { path: '/terms', changeFrequency: 'yearly' as const, priority: 0.3 },
  { path: '/privacy', changeFrequency: 'yearly' as const, priority: 0.3 },
  { path: '/disclaimer', changeFrequency: 'yearly' as const, priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const page of pages) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}${page.path}`,
        lastModified: new Date('2026-05-31'),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: {
            ar: `${BASE_URL}/ar${page.path}`,
            en: `${BASE_URL}/en${page.path}`,
          },
        },
      })
    }
  }

  return entries
}
