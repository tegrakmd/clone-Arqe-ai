import type { Metadata } from "next"
import { Cta } from "@/components/ctaVideo"
import { CuratedSection } from "@/components/curated"
import { PersonnalBoard } from "@/components/personnal"
import { FaqSection } from "@/components/FaqSection"
import { HeroSection } from "@/components/hero"
import CreativeWork from "@/components/projet"
import { AdvancedSearch } from "@/components/advanced"
import { generateMetadata } from "@/lib/metadata"

export const metadata: Metadata = generateMetadata({
  title: "ARQE - Art Directed Stock Library",
  description:
    "Browse & download curated AI visuals — royalty free, 4K, created with intent.",
  keywords: [
    "stock library",
    "AI visuals",
    "royalty free",
    "4K images",
    "art direction",
    "creative assets",
  ],
  ogType: "website",
})

export default function Page() {
  return (
    <div className="item flex min-h-svh flex-col p-2 md:p-4">
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
