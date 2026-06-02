import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/cta-section'
import { Clock, ArrowLeft, Car, HeartPulse, Plane, Building2 } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { buildAlternates, ogLocale } from '@/lib/metadata'

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

const guideMeta = [
  { icon: Car, href: '/guides/car-insurance-guide', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80' },
  { icon: HeartPulse, href: '/guides/health-insurance-guide', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80' },
  { icon: Plane, href: '/guides/travel-insurance-guide', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80' },
  { icon: Building2, href: '/guides/business-insurance-guide', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80' },
  { icon: Car, href: '/guides/save-car-insurance', image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=600&q=80' },
  { icon: HeartPulse, href: '/guides/health-policy-terms', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80' },
]

type GuideItem = { title: string; description: string; category: string; readTime: string }

export default function GuidesPage() {
  const t = useTranslations('guidesPage')
  const items = t.raw('items') as GuideItem[]
  const guides = items.map((it, i) => ({ ...it, ...guideMeta[i] }))

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
              {guides.map((guide) => (
                <article
                  key={guide.title}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={guide.image}
                      alt={guide.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                      <guide.icon className="h-3 w-3" />
                      {guide.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-lg font-bold text-card-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {guide.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {guide.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{guide.readTime}</span>
                      </div>
                      <Link
                        href={guide.href}
                        className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                      >
                        {t('readMore')}
                        <ArrowLeft className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
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
