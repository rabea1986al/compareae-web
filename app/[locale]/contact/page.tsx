import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Mail } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { buildAlternates, ogLocale } from '@/lib/metadata'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.contact' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates(locale, '/contact'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      locale: ogLocale(locale),
      type: 'website',
      siteName: 'CompareAE',
    },
  }
}

export default function ContactPage() {
  const t = useTranslations('contact')
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-primary py-16 md:py-24">
          <div className="container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('heroTitle')}</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              {t('heroSubtitle')}
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto">
              <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  {t('infoHeading')}
                </h2>
                <p className="text-sm text-muted-foreground mb-6">{t('emailLabel')}</p>
                <a
                  href="mailto:info@compareae.com"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg px-8 py-4 transition-colors"
                  dir="ltr"
                >
                  <Mail className="h-5 w-5" aria-hidden="true" />
                  info@compareae.com
                </a>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-12 max-w-xl mx-auto">
              <div className="bg-muted rounded-xl p-6 text-center">
                <p className="text-sm text-muted-foreground">
                  <strong>{t('disclaimerLabel')}</strong> {t('disclaimerText')}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
