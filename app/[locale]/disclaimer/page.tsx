import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AlertTriangle } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { buildAlternates, ogLocale } from '@/lib/metadata'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.disclaimer' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates(locale, '/disclaimer'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      locale: ogLocale(locale),
      type: 'website',
      siteName: 'CompareAE',
    },
  }
}

export default function DisclaimerPage() {
  const t = useTranslations('disclaimer')
  const sections = [1, 2, 3, 4, 5, 6, 7].map((n) => ({
    title: t(`s${n}Title`),
    text: t(`s${n}Text`),
  }))

  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-primary py-16 md:py-24">
          <div className="container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('heroTitle')}</h1>
            <p className="text-lg opacity-90">
              {t('heroSubtitle')}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* Main Disclaimer Box */}
              <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 md:p-8 mb-8">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-8 w-8 text-amber-600 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl font-bold text-amber-800 mb-3">
                      {t('mainTitle')}
                    </h2>
                    <p className="text-amber-700 leading-relaxed text-lg">
                      {t('mainText')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-8">
                {sections.map((s) => (
                  <div key={s.title}>
                    <h2 className="text-xl font-bold text-foreground mb-4">{s.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{s.text}</p>
                  </div>
                ))}
              </div>

              {/* Contact */}
              <div className="mt-8 bg-muted rounded-xl p-6 text-center">
                <p className="text-muted-foreground">
                  {t('contactPrefix')}{' '}
                  <a href="mailto:legal@compareae.com" className="text-primary hover:underline">
                    legal@compareae.com
                  </a>
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
