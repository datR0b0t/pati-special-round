import { AmbassadorTestimonials } from "@/components/sections/AmbassadorTestimonials";
import { BodyDecades } from "@/components/sections/BodyDecades";
import { ClinicallyProven } from "@/components/sections/ClinicallyProven";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { DailyEssentials } from "@/components/sections/DailyEssentials";
import { ExpertTestimonials } from "@/components/sections/ExpertTestimonials";
import { FAQSection } from "@/components/sections/FAQSection";
import { Footer } from "@/components/sections/Footer";
import { GetStarted } from "@/components/sections/GetStarted";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { IncredibleValue } from "@/components/sections/IncredibleValue";
import { LongevityScience } from "@/components/sections/LongevityScience";
import { OrganSystems } from "@/components/sections/OrganSystems";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { SavingsComparison } from "@/components/sections/SavingsComparison";
import { StickyFooter } from "@/components/sections/StickyFooter";
import { VideoTestimonials } from "@/components/sections/VideoTestimonials";
import { WhatsInside } from "@/components/sections/WhatsInside";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Header />
      <Hero />
      <BodyDecades />
      <LongevityScience />
      <OrganSystems />
      <DailyEssentials />
      <ClinicallyProven />
      <SavingsComparison />
      <ComparisonTable />
      <DailyEssentials />
      <ExpertTestimonials />
      <IncredibleValue />
      <ProductShowcase />
      <VideoTestimonials />
      <WhatsInside />
      <AmbassadorTestimonials />
      <GetStarted />
      <FAQSection />
      <Footer />

      <StickyFooter />
    </main>
  );
}
