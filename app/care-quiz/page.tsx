import type { Metadata } from "next";
import { CareQuiz } from "@/components/CareQuiz";
import { buildMetadata } from "@/lib/site";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Care Quiz — Find the Right Caregiver for Your Family",
  description:
    "A 2-minute quiz that recommends the right home caregiver in Bangalore for your situation, with a transparent monthly cost estimate.",
  path: "/care-quiz",
});

export default function CareQuizPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Tools", href: "/tools" },
          { name: "Care Quiz", href: "/care-quiz" },
        ]}
      />
      <CareQuiz />
    </>
  );
}
