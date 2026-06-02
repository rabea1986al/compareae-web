import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Eye, FileText, Lock, Scale, AlertTriangle } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { buildAlternates, ogLocale } from '@/lib/metadata'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.trust' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates(locale, '/trust'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      locale: ogLocale(locale),
      type: 'website',
      siteName: 'CompareAE',
    },
  }
}

export default function TrustPage() {
  const t = useTranslations('trustPage')
  const p1Bullets = t.raw('p1Bullets') as string[]
  const p2Bullets = t.raw('p2Bullets') as string[]
  const p4Bullets = t.raw('p4Bullets') as string[]

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

        {/* Main Disclaimer */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-8 w-8 text-amber-600 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl font-bold text-amber-800 mb-3">
                      {t('mainDisclaimerTitle')}
                    </h2>
                    <p className="text-amber-700 leading-relaxed text-lg">
                      {t('mainDisclaimerText')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Pillars */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
                {t('pillarsHeading')}
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* How info is presented */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Scale className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">{t('p1Title')}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{t('p1Text')}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {p1Bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2"><span className="text-primary">•</span>{b}</li>
                    ))}
                  </ul>
                </div>

                {/* Editorial independence */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <FileText className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">{t('p2Title')}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{t('p2Text')}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {p2Bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2"><span className="text-primary">•</span>{b}</li>
                    ))}
                  </ul>
                </div>

                {/* Affiliate disclosure */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Eye className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">{t('p3Title')}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{t('p3Text')}</p>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>{t('p3NoteLabel')}</strong> {t('p3NoteText')}
                    </p>
                  </div>
                </div>

                {/* No data collection */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Lock className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">{t('p4Title')}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{t('p4Text')}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {p4Bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2"><span className="text-primary">•</span>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Are NOT */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
                {t('notHeading')}
              </h2>
              <p className="text-muted-foreground text-center mb-12">
                {t('notIntro')}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[t('not1'), t('not2'), t('not3'), t('not4')].map((item) => (
                  <div key={item} className="bg-destructive/5 border border-destructive/20 rounded-xl p-4">
                    <p className="text-foreground font-medium">❌ {item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
                <p className="text-foreground">
                  <strong>{t('notConclusionPre')}</strong> {t('notConclusionPost')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Links */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xl font-bold text-foreground mb-6">
                {t('moreInfo')}
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/disclaimer" className="bg-card border border-border rounded-lg px-6 py-3 text-foreground hover:border-primary transition-colors">
                  {t('linkDisclaimer')}
                </Link>
                <Link href="/privacy" className="bg-card border border-border rounded-lg px-6 py-3 text-foreground hover:border-primary transition-colors">
                  {t('linkPrivacy')}
                </Link>
                <Link href="/terms" className="bg-card border border-border rounded-lg px-6 py-3 text-foreground hover:border-primary transition-colors">
                  {t('linkTerms')}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
