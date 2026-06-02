import type { MetadataRoute } from 'next'

const BASE_URL = 'https://compareae.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/drafts/', '/admin/', '/api/', '/temp/', '/*?'],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
