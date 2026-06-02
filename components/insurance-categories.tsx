import { Car, HeartPulse, Plane, Building2, ArrowLeft } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

const categories = [
  { key: 'car', icon: Car, href: '/car-insurance', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&q=80', color: 'bg-emerald-500' },
  { key: 'health', icon: HeartPulse, href: '/health-insurance', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80', color: 'bg-blue-500' },
  { key: 'travel', icon: Plane, href: '/travel-insurance', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80', color: 'bg-amber-500' },
  { key: 'business', icon: Building2, href: '/business-insurance', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80', color: 'bg-slate-600' },
] as const

export function InsuranceCategories() {
  const t = useTranslations('categories')
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {t('heading')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('subheading')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.key}
              href={category.href}
              className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={category.image}
                  alt={t(`items.${category.key}.title`)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className={`absolute top-4 right-4 ${category.color} p-2 rounded-lg`}>
                  <category.icon className="h-5 w-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-card-foreground mb-2">
                  {t(`items.${category.key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                  {t(`items.${category.key}.description`)}
                </p>
                {/* Visual CTA — the whole card is the link */}
                <span className="inline-flex items-center justify-center gap-2 w-full h-10 rounded-md bg-primary text-primary-foreground text-sm font-medium group-hover:bg-primary/90 transition-colors">
                  {t('cta')}
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
