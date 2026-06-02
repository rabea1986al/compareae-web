// Shared provider data. Informational only — NO prices, NO cross-provider
// comparison matrix, NO rankings/recommendations (governance S4 / S8 / S26).
// Logos are not used until affiliate contracts grant rights (S22) → placeholder image.

export const CAR_IMG =
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80'

export type InsuranceCategory = 'car' | 'health' | 'travel' | 'business'

export type Provider = {
  nameEn: string
  nameAr: string
  taglineAr: string
  taglineEn: string
  highlightsAr: string[]
  highlightsEn: string[]
  categories: InsuranceCategory[]
  // Per-category official deep links; `default` is the fallback.
  urls: { default: string } & Partial<Record<InsuranceCategory, string>>
}

export const PROVIDERS: Provider[] = [
  {
    nameEn: 'Shory',
    nameAr: 'شوري',
    taglineAr: 'تأمين رقمي سريع بتجربة عربية كاملة',
    taglineEn: 'Fast digital insurance with a full Arabic experience',
    highlightsAr: [
      'تأمين سيارات شامل وضد الغير',
      'إصدار رقمي فوري',
      'مساعدة على الطريق',
      'موقع عربي كامل',
    ],
    highlightsEn: [
      'Comprehensive & third-party car insurance',
      'Instant digital policy issuance',
      'Roadside assistance',
      'Full Arabic website',
    ],
    categories: ['car'],
    urls: {
      default: 'https://www.shory.com/ar',
      car: 'https://www.shory.com/ar/car-insurance',
    },
  },
  {
    nameEn: 'YallaCompare',
    nameAr: 'يلا كومبير',
    taglineAr: 'منصة عربية واسعة الخيارات',
    taglineEn: 'Wide-choice Arabic insurance platform',
    highlightsAr: [
      'تأمين سيارات وصحي وسفر',
      'خيارات من شركات مرخّصة متعددة',
      'واجهة عربية كاملة',
      'تجربة متجاوبة على الموبايل',
    ],
    highlightsEn: [
      'Car, health & travel insurance',
      'Options from multiple licensed companies',
      'Full Arabic interface',
      'Mobile-responsive experience',
    ],
    categories: ['car', 'health', 'travel'],
    urls: {
      default: 'https://yallacompare.com/ae/ar-ae',
      car: 'https://yallacompare.com/ae/ar-ae/products/motor',
      health: 'https://yallacompare.com/ae/ar-ae/products/health',
      travel: 'https://yallacompare.com/ae/ar-ae/products/travel',
    },
  },
  {
    nameEn: 'Policybazaar',
    nameAr: 'بوليسي بازار',
    taglineAr: 'منصة تأمين رقمية كبيرة في الإمارات',
    taglineEn: 'Major digital insurance platform in the UAE',
    highlightsAr: [
      'تأمين سيارات شامل وضد الغير',
      'مزوّد مرخّص معتمد',
      'تغطيات إضافية اختيارية',
      'دعم عربي على صفحات المنتجات',
    ],
    highlightsEn: [
      'Comprehensive & third-party car insurance',
      'Licensed & accredited provider',
      'Optional additional coverages',
      'Arabic support on product pages',
    ],
    categories: ['car', 'health', 'travel'],
    urls: {
      default: 'https://www.policybazaar.ae',
      car: 'https://www.policybazaar.ae/car-insurance/',
      health: 'https://www.policybazaar.ae/health-insurance/',
      travel: 'https://www.policybazaar.ae/travel-insurance/',
    },
  },
  {
    nameEn: 'InsuranceMarket',
    nameAr: 'إنشورنس ماركت',
    taglineAr: 'وسيط تأمين معتمد بخيارات متعددة',
    taglineEn: 'Accredited insurance broker with multiple options',
    highlightsAr: [
      'تأمين سيارات وصحي',
      'باقات متعددة من شركات مرخّصة',
      'وسيط معتمد في الإمارات',
      'الموقع باللغة الإنجليزية',
    ],
    highlightsEn: [
      'Car and health insurance',
      'Multiple packages from licensed companies',
      'UAE-accredited broker',
      'English-language website',
    ],
    categories: ['car', 'health', 'business'],
    urls: {
      default: 'https://insurancemarket.ae',
      car: 'https://insurancemarket.ae/car-insurance/',
      health: 'https://insurancemarket.ae/health-insurance/',
      business: 'https://insurancemarket.ae/business-insurance/',
    },
  },
]

// Resolved provider shape consumed by the card component.
export type ResolvedProvider = {
  nameEn: string
  nameAr: string
  tagline: string
  highlights: string[]
  url: string
}

function resolveProvider(p: Provider, category: InsuranceCategory | null, locale: string): ResolvedProvider {
  const isAr = locale === 'ar'
  return {
    nameEn: p.nameEn,
    nameAr: p.nameAr,
    tagline: isAr ? p.taglineAr : p.taglineEn,
    highlights: isAr ? p.highlightsAr : p.highlightsEn,
    url: category ? (p.urls[category] ?? p.urls.default) : p.urls.default,
  }
}

// All providers, using their default (general) link.
export function getAllProviders(locale = 'ar'): ResolvedProvider[] {
  return PROVIDERS.map((p) => resolveProvider(p, null, locale))
}

// Providers serving a category, linked to the provider's homepage.
export function getProvidersByCategory(category: InsuranceCategory, locale = 'ar'): ResolvedProvider[] {
  return PROVIDERS.filter((p) => p.categories.includes(category)).map((p) =>
    resolveProvider(p, null, locale)
  )
}
