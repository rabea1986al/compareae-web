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
  const t = await getTranslations({ locale, namespace: 'meta.privacy' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates(locale, '/privacy'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      locale: ogLocale(locale),
      type: 'website',
      siteName: 'CompareAE',
    },
  }
}

export default function PrivacyPage() {
  const t = useTranslations('privacy')
  const s2Bullets = t.raw('s2Bullets') as string[]
  const s3Bullets = t.raw('s3Bullets') as string[]
  const s6Bullets = t.raw('s6Bullets') as string[]

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
            <div className="max-w-3xl mx-auto prose prose-lg">
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-8">
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">{t('s1Title')}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t('s1Text')}</p>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">{t('s2Title')}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{t('s2Intro')}</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    {s2Bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">{t('s3Title')}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{t('s3Intro')}</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    {s3Bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">{t('s4Title')}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t('s4Text')}</p>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">{t('s5Title')}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t('s5Text')}</p>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">{t('s6Title')}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{t('s6Intro')}</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    {s6Bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">{t('s7Title')}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('s7Text')}{' '}
                    <a href="mailto:privacy@compareae.com" className="text-primary hover:underline">
                      privacy@compareae.com
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
