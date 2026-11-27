import { HomeJsonLd } from "@/components/JsonLd";
import { HomeHero } from "@/components/home/HomeHero";
import {
  CaregiverProfileSection,
  Commitments,
  HowBookingWorks,
  NotReadyYet,
  Plans,
  ServicesIndex,
} from "@/components/home/HomeSections";
import { FaqSection } from "@/components/FaqSection";
import { FinalCta } from "@/components/FinalCta";

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />
      <HomeHero />
      <Commitments />
      <ServicesIndex />
      <HowBookingWorks />
      <CaregiverProfileSection />
      <Plans />
      <NotReadyYet />
      <FaqSection />
      <FinalCta />
    </>
  );
}
