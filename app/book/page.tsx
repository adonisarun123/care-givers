import type { Metadata } from "next";
import { BookingFlow, type BookingPrefill } from "@/components/BookingFlow";
import { services } from "@/lib/services";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Book Home Care in Bangalore",
  description:
    "Request a verified caregiver, home nurse or physiotherapist in Bangalore in a few minutes. Prices shown upfront; nothing charged until you confirm.",
  path: "/book",
});

// Links like /book?service=dementia-care or /book?plan=12h (from the homepage
// care finder and price cards) arrive with that choice already selected.
export default async function BookPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string; plan?: string }>;
}) {
  const { service, plan } = await searchParams;
  const prefill: BookingPrefill = {};
  if (service && services.some((s) => s.slug === service)) prefill.serviceSlug = service;
  if (plan === "hourly" || plan === "12h" || plan === "live-in") {
    prefill.plan = plan;
    // Plan cards on the homepage are priced for elder care
    prefill.serviceSlug ??= "elder-care";
  }
  return <BookingFlow prefill={prefill} />;
}
