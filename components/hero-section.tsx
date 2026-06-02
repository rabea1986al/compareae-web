import { Car, HeartPulse, Plane, Building2, Shield, CheckCircle, ArrowLeft } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

// Discovery panel: navigate to the educational insurance-type pages.
// No matching form, no data collection (governance S4 / S5).
const insuranceTypes = [
  { href: '/car-insurance', labelKey: 'typeCar', icon: Car },
  { href: '/health-insurance', labelKey: 'typeHealth', icon: HeartPulse },
  { href: '/travel-insurance', labelKey: 'typeTravel', icon: Plane },
  { href: '/business-insurance', labelKey: 'typeBusiness', icon: Building2 },
] as const

export function HeroSection() {
  const t = useTranslations('hero')
  return (
    <section className="relative min-h-[700px] lg:min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80')`,
        }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/30" />

      <div className="container relative mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-balance">
              {t('titleLine1')}
              <br />
              {t('titleLine2')}
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-lg">
              {t('subtitle')}
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm">{t('badgeIndependent')}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm">{t('badgeLicensed')}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm">{t('badgeFree')}</span>
              </div>
            </div>

            {/* Platform Info */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm">{t('platformInfo')}</span>
              </div>
            </div>
          </div>

          {/* Right: Discovery panel (no matching form) */}
          <div className="order-1 lg:order-2">
            <div className="bg-card rounded-2xl shadow-2xl p-6 md:p-8 max-w-md mx-auto lg:mx-0 lg:mr-auto">
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold text-card-foreground mb-2">
                  {t('panelTitle')}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {t('panelSubtitle')}
                </p>
              </div>

              <div className="space-y-3">
                {insuranceTypes.map((type) => (
                  <Link
                    key={type.href}
                    href={type.href}
                    className="group flex items-center justify-between gap-3 bg-input/40 hover:bg-primary/10 border border-border hover:border-primary/40 rounded-xl px-4 py-4 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <type.icon className="h-5 w-5 text-primary" />
                      </span>
                      <span className="font-semibold text-card-foreground">{t(type.labelKey)}</span>
                    </span>
                    <ArrowLeft className="h-5 w-5 text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-x-1" />
                  </Link>
                ))}
              </div>

              {/* Privacy Notice */}
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-6">
                <Shield className="h-4 w-4" />
                <span>{t('privacyNote')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
