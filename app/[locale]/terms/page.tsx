import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useTranslations } from 'next-intl'
import { buildAlternates, ogLocale } from '@/lib/metadata'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.terms' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates(locale, '/terms'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      locale: ogLocale(locale),
      type: 'website',
      siteName: 'CompareAE',
    },
  }
}

export default function TermsPage() {
  const t = useTranslations('terms')
  const s4Bullets = t.raw('s4Bullets') as string[]

  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-primary py-16 md:py-24">
          <div className="container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('heroTitle')}</h1>
            <p className="text-lg opacity-90">
              {t('lastUpdated')}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-8">
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">{t('s1Title')}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t('s1Text')}</p>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">{t('s2Title')}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t('s2Text')}</p>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">{t('s3Title')}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t('s3Text')}</p>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">{t('s4Title')}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{t('s4Intro')}</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    {s4Bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">{t('s5Title')}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t('s5Text')}</p>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">{t('s6Title')}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t('s6Text')}</p>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">{t('s7Title')}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t('s7Text')}</p>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">{t('s8Title')}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t('s8Text')}</p>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">{t('s9Title')}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('s9Text')}{' '}
                    <a href="mailto:legal@compareae.com" className="text-primary hover:underline">
                      legal@compareae.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
