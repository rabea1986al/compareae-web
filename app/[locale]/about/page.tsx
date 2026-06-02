import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Shield, Users, Target, Award } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { buildAlternates, ogLocale } from '@/lib/metadata'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.about' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates(locale, '/about'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      locale: ogLocale(locale),
      type: 'website',
      siteName: 'CompareAE',
    },
  }
}

const valueIcons = [Shield, Users, Target, Award] as const

export default function AboutPage() {
  const t = useTranslations('about')
  const values = [t('value1'), t('value2'), t('value3'), t('value4')]

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

        {/* Mission */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    {t('missionHeading')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t('missionP1')}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('missionP2')}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {values.map((value, i) => {
                    const Icon = valueIcons[i]
                    return (
                      <div key={value} className="bg-card border border-border rounded-xl p-6 text-center">
                        <Icon className="h-10 w-10 text-primary mx-auto mb-3" />
                        <h3 className="font-bold text-card-foreground">{value}</h3>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12">
                {t('valuesHeading')}
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{t('editorialTitle')}</h3>
                  <p className="text-muted-foreground">{t('editorialDesc')}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{t('noDataTitle')}</h3>
                  <p className="text-muted-foreground">{t('noDataDesc')}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{t('supportTitle')}</h3>
                  <p className="text-muted-foreground">{t('supportDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-muted rounded-xl p-6 text-center">
              <p className="text-sm text-muted-foreground">
                <strong>{t('disclaimerLabel')}</strong> {t('disclaimerText')}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
