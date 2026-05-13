import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { ServicesGrid } from "@/components/ServicesGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { CaregiverProfiles } from "@/components/CaregiverProfiles";
import { Stats } from "@/components/Stats";
import { PricingPreview } from "@/components/PricingPreview";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { LocationsPreview } from "@/components/LocationsPreview";
import { FaqSection } from "@/components/FaqSection";
import { FinalCta } from "@/components/FinalCta";
import { JournalPreview } from "@/components/JournalPreview";
import { ToolsPreview } from "@/components/ToolsPreview";
import { HomeJsonLd } from "@/components/JsonLd";

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />
      <Hero />
      <TrustStrip />
      <ServicesGrid />
      <HowItWorks />
      <CaregiverProfiles />
      <Stats />
      <PricingPreview />
      <WhyUs />
      <Testimonials />
      <ToolsPreview />
      <LocationsPreview />
      <JournalPreview />
      <FaqSection />
      <FinalCta />
    </>
  );
}
