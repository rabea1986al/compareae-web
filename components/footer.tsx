import { Link } from '@/i18n/navigation'
import { Facebook, Instagram, Linkedin, Youtube, Mail } from 'lucide-react'
import { useTranslations } from 'next-intl'

const footerLinks = {
  insuranceTypes: [
    { labelKey: 'car', href: '/car-insurance' },
    { labelKey: 'health', href: '/health-insurance' },
    { labelKey: 'travel', href: '/travel-insurance' },
    { labelKey: 'business', href: '/business-insurance' },
  ],
  importantLinks: [
    { labelKey: 'about', href: '/about' },
    { labelKey: 'trust', href: '/trust' },
    { labelKey: 'faq', href: '/faq' },
    { labelKey: 'resources', href: '/guides' },
    { labelKey: 'contact', href: '/contact' },
  ],
  legal: [
    { labelKey: 'privacy', href: '/privacy' },
    { labelKey: 'terms', href: '/terms' },
    { labelKey: 'disclaimer', href: '/disclaimer' },
  ],
} as const

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export function Footer() {
  const t = useTranslations('footer')
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                <span className="text-primary">Compare</span>
                <span>AE</span>
              </span>
            </Link>
            <p className="text-sm text-background/70 mb-4 leading-relaxed">
              {t('tagline')}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Insurance Types */}
          <div>
            <h3 className="font-bold mb-4">{t('insuranceTypesTitle')}</h3>
            <ul className="space-y-3">
              {footerLinks.insuranceTypes.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="font-bold mb-4">{t('importantLinksTitle')}</h3>
            <ul className="space-y-3">
              {footerLinks.importantLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">{t('contactTitle')}</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@compareae.com"
                  className="flex items-center gap-2 text-sm text-background/70 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>info@compareae.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="bg-background/5 rounded-xl p-4 mb-8">
            <p className="text-xs text-background/60 text-center leading-relaxed">
              <strong>{t('disclaimerLabel')}</strong> {t('disclaimerText')}
            </p>
          </div>


        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
            <p>{t('rights')}</p>
            <div className="flex gap-4">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-primary transition-colors"
                >
                  {t(link.labelKey)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
