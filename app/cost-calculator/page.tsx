import type { Metadata } from "next";
import { CostCalculator } from "@/components/CostCalculator";
import { FinalCta } from "@/components/FinalCta";
import { buildMetadata } from "@/lib/site";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Caregiver Cost Calculator — Bangalore Home Care Pricing",
  description:
    "Calculate the monthly cost of a home caregiver in Bangalore. Adjust hours, days, locality and care complexity. Transparent, instant estimates.",
  path: "/cost-calculator",
});

export default function CostCalculatorPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Tools", href: "/tools" },
          { name: "Cost Calculator", href: "/cost-calculator" },
        ]}
      />
      <CostCalculator />
      <FinalCta />
    </>
  );
}
