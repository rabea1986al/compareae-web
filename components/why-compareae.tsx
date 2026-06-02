import { Building2, Shield, Percent, CheckCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'

const stats = [
  { icon: Building2, valueKey: 'stat1Value', labelKey: 'stat1Label', subKey: 'stat1Sub' },
  { icon: Shield, valueKey: 'stat2Value', labelKey: 'stat2Label', subKey: 'stat2Sub' },
  { icon: CheckCircle, valueKey: 'stat3Value', labelKey: 'stat3Label', subKey: 'stat3Sub' },
  { icon: Percent, valueKey: 'stat4Value', labelKey: 'stat4Label', subKey: 'stat4Sub' },
] as const

export function WhyCompareAE() {
  const t = useTranslations('why')
  const benefits = t.raw('benefits') as string[]
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              {t('heading')}
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 leading-relaxed">
              {t('intro')}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary-foreground flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.labelKey}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-primary-foreground/20 transition-colors"
              >
                <stat.icon className="h-8 w-8 mx-auto mb-3 opacity-90" />
                <div className="text-3xl md:text-4xl font-bold mb-1">{t(stat.valueKey)}</div>
                <div className="text-sm font-medium">{t(stat.labelKey)}</div>
                <div className="text-xs opacity-75">{t(stat.subKey)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
