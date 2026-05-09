import type { Metadata } from "next";
import { BookingFlow } from "@/components/BookingFlow";

export const metadata: Metadata = {
  title: "Book a caregiver in Bangalore",
  description:
    "Book a verified caregiver or patient attendant in Bangalore in under 3 minutes. Transparent pricing, no callbacks.",
};

export default function BookPage() {
  return <BookingFlow />;
}
