import { FileText, Clock, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

const guides = [
  { n: 1, href: '/guides/car-insurance-guide', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&q=80' },
  { n: 2, href: '/guides/health-insurance-guide', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80' },
  { n: 3, href: '/guides/travel-insurance-guide', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80' },
] as const

export function EditorialGuides() {
  const t = useTranslations('guides')
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
          {guides.map((guide) => (
            <article
              key={guide.n}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={guide.image}
                  alt={t(`item${guide.n}Title`)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  {t(`item${guide.n}Category`)}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-card-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {t(`item${guide.n}Title`)}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {t(`item${guide.n}Desc`)}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{t(`item${guide.n}ReadTime`)}</span>
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
        <p className="text-center text-xs text-muted-foreground mt-8">
          {t('disclaimer')}
        </p>
      </div>
    </section>
  )
}
