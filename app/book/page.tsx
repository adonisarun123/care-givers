import type { Metadata } from "next";
import { BookingFlow } from "@/components/BookingFlow";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Book a Caregiver in Bangalore — Care Givers",
  description:
    "Book a verified caregiver or patient attendant in Bangalore in under 3 minutes. Transparent pricing, no callbacks.",
  path: "/book",
});

export default function BookPage() {
  return <BookingFlow />;
}
