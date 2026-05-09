import type { Metadata } from "next";
import { CaregiverCheckup } from "@/components/CaregiverCheckup";
import { buildMetadata } from "@/lib/site";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Family Caregiver Self-Check — Are You Holding Up Well?",
  description:
    "A 60-second wellbeing check-in for family caregivers in India. 10 gentle questions, calm scoring, and respite suggestions if you’re carrying too much.",
  path: "/caregiver-checkup",
});

export default function CaregiverCheckupPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Tools", href: "/tools" },
          { name: "Caregiver Self-Check", href: "/caregiver-checkup" },
        ]}
      />
      <CaregiverCheckup />
    </>
  );
}
