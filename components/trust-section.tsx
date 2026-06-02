import { Shield, CheckCircle, Award, ArrowLeft } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

export function TrustSection() {
  const t = useTranslations('trust')
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6">
              <Shield className="h-5 w-5" />
              <span className="text-sm font-medium">{t('badge')}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t('heading')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('subheading')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground mb-2">
                {t('card1Title')}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t('card1Desc')}
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground mb-2">
                {t('card2Title')}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t('card2Desc')}
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground mb-2">
                {t('card3Title')}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t('card3Desc')}
              </p>
            </div>
          </div>

          {/* Link to Trust Page */}
          <div className="text-center mt-8">
            <Link href="/trust">
              <Button variant="outline" className="gap-2">
                {t('ctaButton')}
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 bg-muted rounded-xl p-6 text-center">
            <p className="text-sm text-muted-foreground">
              <strong>{t('disclaimerLabel')}</strong> {t('disclaimerText')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
