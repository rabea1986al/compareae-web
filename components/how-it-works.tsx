import { ClipboardList, Search, Shield, ArrowLeft } from 'lucide-react'
import { useTranslations } from 'next-intl'

const steps = [
  { number: '١', icon: ClipboardList, titleKey: 'step1Title', descKey: 'step1Desc', color: 'bg-primary' },
  { number: '٢', icon: Search, titleKey: 'step2Title', descKey: 'step2Desc', color: 'bg-primary' },
  { number: '٣', icon: Shield, titleKey: 'step3Title', descKey: 'step3Desc', color: 'bg-primary' },
] as const

export function HowItWorks() {
  const t = useTranslations('howItWorks')
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {t('heading')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('subheading')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.titleKey} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -left-4 w-8">
                  <ArrowLeft className="h-6 w-6 text-primary" />
                </div>
              )}

              <div className="text-center">
                {/* Step Number */}
                <div className="relative inline-flex mb-6">
                  <div className={`${step.color} w-24 h-24 rounded-full flex items-center justify-center`}>
                    <step.icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-card border-2 border-primary rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {t(step.titleKey)}
                </h3>
                <p className="text-muted-foreground">
                  {t(step.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
