import { Cta } from "@/components/ctaVideo"
import { CuratedSection } from "@/components/curated"
import { PersonnalBoard } from "@/components/personnal"
import { FaqSection } from "@/components/FaqSection"
import { HeroSection } from "@/components/hero"
import CreativeWork from "@/components/projet"
import { AdvancedSearch } from "@/components/advanced"

export default function Page() {
  return (
    <div className="item flex min-h-svh flex-col p-6">
      <HeroSection />
      <CuratedSection />
      <PersonnalBoard />
      <AdvancedSearch />
      <CreativeWork />
      <FaqSection />
      <Cta />
    </div>
  )
}
