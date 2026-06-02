import { CheckCircle, ExternalLink, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CAR_IMG, type ResolvedProvider } from '@/lib/providers'
import { useTranslations } from 'next-intl'

// Reusable informational provider-card grid + mandatory disclaimer.
// NO cross-provider price/coverage matrix, NO rankings, NO recommendations
// (governance S4 / S8 / S26). Each card lists what a provider offers, then
// links out to its official site with affiliate rel attributes (S23).
export function ProviderCards({ providers }: { providers: ResolvedProvider[] }) {
  const t = useTranslations('providerCards')
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-6">
        {providers.map((p) => (
          <a
            key={p.nameEn}
            href={p.url}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="group bg-gradient-to-l from-card to-muted/30 border border-border rounded-2xl overflow-hidden flex flex-col sm:flex-row transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/40"
          >
            {/* Content */}
            <div className="flex-1 p-6 flex flex-col">
              <div className="mb-4 pb-4 border-b border-border">
                <div className="flex flex-col items-center justify-center gap-1 bg-primary/10 border border-primary/20 rounded-xl px-4 py-4 mb-2 w-full text-center">
                  <span className="block text-3xl font-bold text-primary leading-tight tracking-wide">{p.nameAr}</span>
                  <span className="block text-xl font-bold text-primary/80 tracking-widest" dir="ltr">{p.nameEn}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.tagline}</p>
              </div>

              {/* Offered coverage highlights (informational, single provider) */}
              <ul className="space-y-2.5 mb-6 flex-1">
                {p.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-medium text-card-foreground">{h}</span>
                  </li>
                ))}
              </ul>

              {/* CTA — visual only; the whole card is already the link */}
              <div className="block mt-auto">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground pointer-events-none">
                  {t('visitButton')}
                  <ExternalLink className="mr-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Placeholder image (until logos are permitted post-contract) */}
            <div
              className="hidden sm:block sm:w-44 lg:w-40 flex-shrink-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${CAR_IMG}')` }}
              aria-hidden="true"
            />
          </a>
        ))}
      </div>

      {/* Mandatory disclaimer (governance S25) */}
      <div className="mt-10 bg-card border border-border rounded-xl p-4 flex items-start gap-3">
        <Info className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
        <p className="text-xs text-muted-foreground leading-relaxed">
          <strong>{t('disclaimerLabel')}</strong> {t('disclaimerText')}
        </p>
      </div>
    </>
  )
}
