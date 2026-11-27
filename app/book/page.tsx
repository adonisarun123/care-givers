import type { Metadata } from "next";
import { BookingFlow, type BookingPrefill } from "@/components/BookingFlow";
import { services } from "@/lib/services";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Book a Caregiver in Bangalore — Care Givers",
  description:
    "Book a verified caregiver or patient attendant in Bangalore in under 3 minutes. Transparent pricing, no callbacks.",
  path: "/book",
});

const durationByPlan: Record<string, BookingPrefill["duration"]> = {
  hourly: "hourly",
  "12h": "12h-day",
  "live-in": "live-in",
};

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
  if (plan && durationByPlan[plan]) prefill.duration = durationByPlan[plan];
  return <BookingFlow prefill={prefill} />;
}
