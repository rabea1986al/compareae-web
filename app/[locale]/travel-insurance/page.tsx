import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HowItWorks } from '@/components/how-it-works'
import { FAQSection } from '@/components/faq-section'
import { CTASection } from '@/components/cta-section'
import { CheckCircle, Plane, Briefcase, Palmtree, Heart } from 'lucide-react'
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
  const t = await getTranslations({ locale, namespace: 'meta.travel' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates(locale, '/travel-insurance'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      locale: ogLocale(locale),
      type: 'website',
      siteName: 'CompareAE',
    },
  }
}

const tripIcons = [Briefcase, Palmtree, Heart] as const

export default function TravelInsurancePage() {
  const locale = useLocale()
  const providers = getProvidersByCategory('travel', locale)
  const t = useTranslations('travelInsurance')
  const features = t.raw('features') as string[]
  const tripTypes = [1, 2, 3].map((n, i) => ({
    icon: tripIcons[i],
    title: t(`trip${n}Title`),
    description: t(`trip${n}Desc`),
  }))
  const educSections = [
    { heading: t('educational.introHeading'), text: t('educational.introText') },
    { heading: t('educational.mandatoryHeading'), text: t('educational.mandatoryText') },
    { heading: t('educational.coverageHeading'), text: t('educational.coverageText') },
    { heading: t('educational.exclusionsHeading'), text: t('educational.exclusionsText') },
    { heading: t('educational.whoNeedsHeading'), text: t('educational.whoNeedsText') },
    { heading: t('educational.termsHeading'), text: t('educational.termsText') },
    { heading: t('educational.reviewHeading'), text: t('educational.reviewText') },
  ]
  const pageFAQ = t.raw('pageFAQ') as { heading: string; items: { question: string; answer: string }[] }

  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative min-h-[500px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.1), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80')`,
            }}
          />
          <div className="container relative mx-auto px-4 py-20 text-white">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Plane className="h-5 w-5 text-primary" />
                <span className="text-sm">{t('badge')}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                {t('heroTitle')}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                {t('heroSubtitle')}
              </p>
              <Button asChild size="lg" className="h-14 px-10 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/providers">{t('exploreButton')}</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Providers offering travel insurance */}
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

        {/* Trip Types */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {t('tripTypesHeading')}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('tripTypesSub')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {tripTypes.map((type) => (
                <div
                  key={type.title}
                  className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <type.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {type.description}
                  </p>
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

        {/* Educational content — unique per page, improves indexability */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-10">
              {educSections.map((sec) => (
                <div key={sec.heading}>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">{sec.heading}</h2>
                  <p className="text-muted-foreground leading-relaxed">{sec.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Page-specific FAQ — all answers server-rendered for full indexing */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
                {pageFAQ.heading}
              </h2>
              <div className="space-y-6">
                {pageFAQ.items.map((item) => (
                  <div key={item.question} className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-semibold text-card-foreground mb-3">{item.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: pageFAQ.items.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: { '@type': 'Answer', text: item.answer },
              })),
            }),
          }}
        />

        <HowItWorks />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
