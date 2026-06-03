import { Clock, ArrowLeft, Car, HeartPulse, Plane, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { getAllGuides, type IconKey } from '@/lib/guides'

const iconMap: Record<IconKey, typeof Car> = {
  car: Car,
  health: HeartPulse,
  travel: Plane,
  business: Building2,
}

export function EditorialGuides() {
  const t = useTranslations('guides')
  const locale = useLocale()
  const guides = getAllGuides(locale).slice(0, 3)

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              {t('heading')}
            </h2>
            <p className="text-muted-foreground">
              {t('subheading')}
            </p>
          </div>
          <Link href="/guides">
            <Button variant="outline" className="gap-2">
              {t('allButton')}
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
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
                  <h3 className="text-lg font-bold text-card-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    <Link href={`/guides/${guide.slug}`}>{guide.title}</Link>
                  </h3>
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
        <p className="text-center text-xs text-muted-foreground mt-8">
          {t('disclaimer')}
        </p>
      </div>
    </section>
  )
}
