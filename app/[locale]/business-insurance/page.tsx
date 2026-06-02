import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HowItWorks } from '@/components/how-it-works'
import { FAQSection } from '@/components/faq-section'
import { CTASection } from '@/components/cta-section'
import { CheckCircle, Building2, Users, Shield, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/navigation'
import { ProviderCards } from '@/components/provider-cards'
import { getProvidersByCategory } from '@/lib/providers'
import { useTranslations, useLocale } from 'next-intl'
import { buildAlternates, ogLocale } from '@/lib/metadata'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.business' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates(locale, '/business-insurance'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      locale: ogLocale(locale),
      type: 'website',
      siteName: 'CompareAE',
    },
  }
}

const typeIcons = [Building2, Users, Shield] as const

export default function BusinessInsurancePage() {
  const locale = useLocale()
  const providers = getProvidersByCategory('business', locale)
  const t = useTranslations('businessInsurance')
  const features = t.raw('features') as string[]
  const businessTypes = [1, 2, 3].map((n, i) => ({
    icon: typeIcons[i],
    title: t(`type${n}Title`),
    description: t(`type${n}Desc`),
    features: t.raw(`type${n}Features`) as string[],
  }))

  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative min-h-[500px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.1), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')`,
            }}
          />
          <div className="container relative mx-auto px-4 py-20 text-white">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Building2 className="h-5 w-5 text-primary" />
                <span className="text-sm">{t('badge')}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                {t('heroTitle')}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                {t('heroSubtitle')}
              </p>
              <Button asChild size="lg" className="h-14 px-10 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contact">{t('contactButton')}</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Providers offering business insurance */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-muted/40 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                {t('providersHeading')}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('providersSub')}
              </p>
            </div>
            <ProviderCards providers={providers} />
          </div>
        </section>

        {/* Business Types */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {t('typesHeading')}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('typesSub')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {businessTypes.map((type) => (
                <div
                  key={type.title}
                  className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <type.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {type.description}
                  </p>
                  <ul className="space-y-2">
                    {type.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
                {t('coverageHeading')}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 bg-card border border-border rounded-xl p-4"
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-card-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA for Business */}
        <section className="py-16 md:py-24 bg-primary">
          <div className="container mx-auto px-4 text-center text-primary-foreground">
            <FileText className="h-12 w-12 mx-auto mb-6 opacity-90" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {t('ctaHeading')}
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              {t('ctaSub')}
            </p>
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link href="/providers">{t('ctaButton')}</Link>
            </Button>
          </div>
        </section>

        <HowItWorks />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
