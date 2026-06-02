import type { Metadata, Viewport } from 'next'
import { Cairo } from 'next/font/google'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Analytics } from '@vercel/analytics/next'
import { routing } from '@/i18n/routing'
import { buildAlternates, ogLocale } from '@/lib/metadata'
import '../globals.css'

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
})

const BASE_URL = 'https://compareae.com'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.home' })
  return {
    title: t('title'),
    description: t('description'),
    keywords:
      locale === 'ar'
        ? 'تأمين, مزوّدي التأمين, تأمين سيارات, تأمين صحي, تأمين سفر, الإمارات, دبي, أبوظبي'
        : 'insurance, UAE insurance, car insurance, health insurance, travel insurance, Dubai, Abu Dhabi',
    authors: [{ name: 'CompareAE' }],
    robots: { index: true, follow: true },
    alternates: buildAlternates(locale, ''),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      locale: ogLocale(locale),
      type: 'website',
      siteName: 'CompareAE',
      url: `${BASE_URL}/${locale}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: t('ogTitle'),
      description: t('ogDescription'),
    },
    icons: {
      icon: [
        { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
        { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
        { url: '/icon.svg', type: 'image/svg+xml' },
      ],
      apple: '/apple-icon.png',
    },
  }
}

// Site-wide structured data — mirrors the Organization + WebSite graph from server.js
const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'CompareAE',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/apple-icon.png`,
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'CompareAE',
      publisher: { '@id': `${BASE_URL}/#organization` },
    },
  ],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

// Pre-render both locales at build time.
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  // Enable static rendering for this locale.
  setRequestLocale(locale)

  const dir = locale === 'ar' ? 'rtl' : 'ltr'
  const skipLabel = locale === 'ar' ? 'انتقل إلى المحتوى الرئيسي' : 'Skip to main content'

  return (
    <html lang={locale} dir={dir} className={`${cairo.variable} bg-background`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <NextIntlClientProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-lg"
          >
            {skipLabel}
          </a>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
