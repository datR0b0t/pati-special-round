import { BodyDecades } from "@/components/sections/BodyDecades";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { ExpertProfile } from "@/components/sections/ExpertProfile";
import { FAQ } from "@/components/sections/FAQ";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { IngredientGrid } from "@/components/sections/IngredientGrid";
import { StatsSection } from "@/components/sections/StatsSection";
import { StickyFooter } from "@/components/sections/StickyFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Header />
      <Hero />
      <BodyDecades />
      <StatsSection />
      <IngredientGrid />
      <ComparisonTable />
      <ExpertProfile />
      <FAQ />
      <StickyFooter />
    </main>
  );
}
