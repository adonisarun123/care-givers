import { HomeJsonLd } from "@/components/JsonLd";
import { HomeHero } from "@/components/home/HomeHero";
import {
  CaregiverProfileSection,
  Commitments,
  ConditionsWeCareFor,
  NeedCareToday,
  HowBookingWorks,
  NotReadyYet,
  Plans,
  ServicesIndex,
} from "@/components/home/HomeSections";
import { FaqSection } from "@/components/FaqSection";
import { FinalCta } from "@/components/FinalCta";
import { PromiseSection, WhatIfSection } from "@/components/CarePromise";

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />
      <HomeHero />
      <Commitments />
      <ServicesIndex />
      <NeedCareToday />
      <ConditionsWeCareFor />
      <HowBookingWorks />
      <CaregiverProfileSection />
      <PromiseSection />
      <WhatIfSection />
      <Plans />
      <NotReadyYet />
      <FaqSection />
      <FinalCta />
    </>
  );
}
