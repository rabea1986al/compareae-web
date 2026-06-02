import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

export function CTASection() {
  const t = useTranslations('cta')
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            {t('heading')}
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            {t('subheading')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="h-12 bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base font-semibold px-8"
            >
              <Link href="/providers">
                {t('exploreButton')}
                <span aria-hidden="true"><ArrowLeft className="h-5 w-5" /></span>
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="h-12 bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base font-semibold px-8"
            >
              <Link href="/contact">{t('talkButton')}</Link>
            </Button>
          </div>

          <p className="mt-8 text-sm opacity-75">
            {t('tagline')}
          </p>
        </div>
      </div>
    </section>
  )
}
