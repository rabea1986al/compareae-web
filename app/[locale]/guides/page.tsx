import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/cta-section'
import { Clock, ArrowLeft, Car, HeartPulse, Plane, Building2 } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { buildAlternates, ogLocale } from '@/lib/metadata'
import { getAllGuides, type IconKey } from '@/lib/guides'

const iconMap: Record<IconKey, typeof Car> = {
  car: Car,
  health: HeartPulse,
  travel: Plane,
  business: Building2,
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.guides' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates(locale, '/guides'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      locale: ogLocale(locale),
      type: 'website',
      siteName: 'CompareAE',
    },
  }
}

export default async function GuidesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations({ locale, namespace: 'guidesPage' })
  const guides = getAllGuides(locale)

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

        {/* Guides Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.map((guide) => {
                const Icon = iconMap[guide.iconKey]
                return (
                  <article
                    key={guide.slug}
                    className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
                  >
                    {/* Image */}
                    <Link href={`/guides/${guide.slug}`} className="block relative h-48 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={guide.image}
                        alt={guide.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                        <Icon className="h-3 w-3" />
                        {guide.category}
                      </div>
                    </Link>

                    {/* Content */}
                    <div className="p-6">
                      <h2 className="text-lg font-bold text-card-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        <Link href={`/guides/${guide.slug}`}>{guide.title}</Link>
                      </h2>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {guide.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{guide.readTime}</span>
                        </div>
                        <Link
                          href={`/guides/${guide.slug}`}
                          className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                        >
                          {t('readMore')}
                          <ArrowLeft className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            {/* Editorial Disclaimer */}
            <div className="mt-12 bg-muted rounded-xl p-6 text-center max-w-3xl mx-auto">
              <p className="text-sm text-muted-foreground">
                <strong>{t('disclaimerLabel')}</strong> {t('disclaimerText')}
              </p>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
