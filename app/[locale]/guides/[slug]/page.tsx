import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/cta-section'
import { Clock, ArrowLeft, CheckCircle, Car, HeartPulse, Plane, Building2 } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { getGuide, guideSlugs, type IconKey } from '@/lib/guides'
import { buildAlternates, ogLocale } from '@/lib/metadata'

const BASE_URL = 'https://compareae.com'

const iconMap: Record<IconKey, typeof Car> = {
  car: Car,
  health: HeartPulse,
  travel: Plane,
  business: Building2,
}

// Pre-render every guide slug (combined with the [locale] params from the layout).
export function generateStaticParams() {
  return guideSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const guide = getGuide(slug, locale)
  if (!guide) return {}
  return {
    title: guide.title,
    description: guide.excerpt,
    alternates: buildAlternates(locale, `/guides/${slug}`),
    openGraph: {
      title: guide.title,
      description: guide.excerpt,
      locale: ogLocale(locale),
      type: 'article',
      siteName: 'CompareAE',
      images: [guide.image],
      url: `${BASE_URL}/${locale}/guides/${slug}`,
    },
  }
}

export default async function GuideArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  setRequestLocale(locale)

  const guide = getGuide(slug, locale)
  if (!guide) notFound()

  const t = await getTranslations({ locale, namespace: 'guidesPage' })
  const Icon = iconMap[guide.iconKey]

  const backLabel = locale === 'ar' ? 'العودة إلى الأدلة' : 'Back to guides'
  const takeawaysLabel = locale === 'ar' ? 'أبرز النقاط' : 'Key takeaways'

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.excerpt,
    image: guide.image,
    inLanguage: locale,
    isAccessibleForFree: true,
    author: { '@type': 'Organization', name: 'CompareAE' },
    publisher: { '@type': 'Organization', name: 'CompareAE', url: BASE_URL },
    mainEntityOfPage: `${BASE_URL}/${locale}/guides/${slug}`,
  }

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-primary py-14 md:py-20">
          <div className="container mx-auto px-4 text-primary-foreground">
            <div className="max-w-3xl mx-auto">
              <Link
                href="/guides"
                className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                {backLabel}
              </Link>
              <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-3 py-1 text-xs font-medium mb-4">
                <Icon className="h-4 w-4" />
                {guide.category}
              </div>
              <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">{guide.title}</h1>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Clock className="h-4 w-4" />
                <span>{guide.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article body */}
        <article className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* Cover image */}
              <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden mb-8 border border-border">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={guide.image} alt={guide.title} className="w-full h-full object-cover" />
              </div>

              {/* Intro */}
              <p className="text-lg text-foreground/90 leading-relaxed mb-10">{guide.intro}</p>

              {/* Sections */}
              {guide.sections.map((section) => (
                <section key={section.heading} className="mb-10">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                    {section.heading}
                  </h2>
                  {section.body.map((para, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                      {para}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="space-y-3 mt-4">
                      {section.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              {/* Key takeaways */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mb-10">
                <h2 className="text-lg font-bold text-foreground mb-4">{takeawaysLabel}</h2>
                <ul className="space-y-3">
                  {guide.takeaways.map((tk) => (
                    <li key={tk} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/90">{tk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Editorial disclaimer */}
              <div className="bg-muted rounded-xl p-6 text-center">
                <p className="text-sm text-muted-foreground">
                  <strong>{t('disclaimerLabel')}</strong> {t('disclaimerText')}
                </p>
              </div>

              {/* Back link */}
              <div className="mt-10 text-center">
                <Link
                  href="/guides"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  <ArrowLeft className="h-4 w-4" />
                  {backLabel}
                </Link>
              </div>
            </div>
          </div>
        </article>

        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
