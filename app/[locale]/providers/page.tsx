import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProviderCards } from '@/components/provider-cards'
import { getAllProviders } from '@/lib/providers'
import { Building2 } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import { buildAlternates, ogLocale } from '@/lib/metadata'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.providers' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates(locale, '/providers'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      locale: ogLocale(locale),
      type: 'website',
      siteName: 'CompareAE',
    },
  }
}

export default function ProvidersPage() {
  const locale = useLocale()
  const providers = getAllProviders(locale)
  const t = useTranslations('providersPage')

  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" className="bg-gradient-to-b from-muted/40 to-background">
        <div className="container mx-auto px-4 py-10 md:py-14">
          {/* Heading */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center">
              <Building2 className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">{t('badge')}</p>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            {t('heading')}
          </h1>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            {t('intro')}
          </p>

          <ProviderCards providers={providers} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
