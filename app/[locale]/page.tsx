import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { InsuranceCategories } from '@/components/insurance-categories'
import { HowItWorks } from '@/components/how-it-works'
import { WhyCompareAE } from '@/components/why-compareae'
import { TrustSection } from '@/components/trust-section'
import { EditorialGuides } from '@/components/editorial-guides'
import { FAQSection } from '@/components/faq-section'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <HeroSection />
        <InsuranceCategories />
        <HowItWorks />
        <WhyCompareAE />
        <TrustSection />
        <EditorialGuides />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
