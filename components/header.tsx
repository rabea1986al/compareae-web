'use client'

import { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navItems = [
  { labelKey: 'car', href: '/car-insurance' },
  { labelKey: 'health', href: '/health-insurance' },
  { labelKey: 'travel', href: '/travel-insurance' },
  { labelKey: 'business', href: '/business-insurance' },
  {
    labelKey: 'resources',
    href: '#',
    children: [
      { labelKey: 'guidesLink', href: '/guides' },
      { labelKey: 'faq', href: '/faq' },
      { labelKey: 'blog', href: '/blog' },
    ],
  },
  {
    labelKey: 'company',
    href: '#',
    children: [
      { labelKey: 'about', href: '/about' },
      { labelKey: 'trust', href: '/trust' },
      { labelKey: 'contact', href: '/contact' },
    ],
  },
] as const

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const locale = useLocale()
  const t = useTranslations('header')
  const otherLocale = locale === 'ar' ? 'en' : 'ar'
  const otherLocaleLabel = locale === 'ar' ? 'English' : 'العربية'

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" dir="ltr" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">Compare</span>
          <span className="text-2xl font-bold text-foreground">AE</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div key={item.labelKey} className="relative">
              {item.children ? (
                <button
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onMouseEnter={() => setOpenDropdown(item.labelKey)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {t(`nav.${item.labelKey}`)}
                  <ChevronDown className="h-4 w-4" />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t(`nav.${item.labelKey}`)}
                </Link>
              )}

              {item.children && openDropdown === item.labelKey && (
                <div
                  className="absolute top-full right-0 w-48 bg-card border border-border rounded-lg shadow-lg py-2"
                  onMouseEnter={() => setOpenDropdown(item.labelKey)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.labelKey}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                      {t(`nav.${child.labelKey}`)}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <Link
            href={pathname}
            locale={otherLocale}
            className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            aria-label={`التبديل إلى ${otherLocaleLabel}`}
          >
            <Globe className="h-4 w-4" />
            <span>{otherLocaleLabel}</span>
          </Link>

          {/* CTA Button */}
          <Button asChild className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/providers">{t('cta')}</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? t('closeMenu') : t('openMenu')}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-card" role="navigation" aria-label={t('mobileNavLabel')}>
          <nav className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <div key={item.labelKey} className="border-b border-border/50 last:border-0">
                {item.children ? (
                  <div className="py-3">
                    <span className="font-medium text-foreground">{t(`nav.${item.labelKey}`)}</span>
                    <div className="mt-2 mr-4 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.labelKey}
                          href={child.href}
                          className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {t(`nav.${child.labelKey}`)}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-3 font-medium text-foreground hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t(`nav.${item.labelKey}`)}
                  </Link>
                )}
              </div>
            ))}
            {/* Language switcher — mobile (the desktop one is hidden below lg) */}
            <Link
              href={pathname}
              locale={otherLocale}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 py-3 border-b border-border/50 font-medium text-foreground hover:text-primary"
              aria-label={`التبديل إلى ${otherLocaleLabel}`}
            >
              <Globe className="h-4 w-4" />
              <span>{otherLocaleLabel}</span>
            </Link>
            <Button asChild className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/providers" onClick={() => setMobileMenuOpen(false)}>
                {t('cta')}
              </Link>
            </Button>
          </nav>
        </div>
      )}

      {/* Top Bar - shown above header on larger screens */}
      <div className="hidden md:block absolute -top-8 left-0 right-0 bg-muted py-1.5 text-center text-xs text-muted-foreground">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true"></span>
              {t('topbar')}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>{t('country')}</span>
          </div>
        </div>
      </div>
    </header>
  )
}
