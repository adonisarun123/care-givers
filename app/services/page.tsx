import type { Metadata } from "next";
import { ServicesGrid } from "@/components/ServicesGrid";
import { FinalCta } from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Home Care Services in Bangalore",
  description:
    "Explore all home caregiving services in Bangalore — elder care, patient care, live-in, post-surgery, dementia, bedridden, night and female caregivers.",
};

export default function ServicesIndex() {
  return (
    <>
      <section className="relative pt-16 pb-6 sm:pt-24">
        <div className="container max-w-3xl text-center">
          <span className="chip">Home care services · Bangalore</span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-[-0.02em] text-ink-900">
            Care, sized to fit your family.
          </h1>
          <p className="mt-5 lead">
            From a few hours a week to round-the-clock support — every service is built
            on the same foundation: kindness, training, and the right match for your home.
          </p>
        </div>
      </section>
      <ServicesGrid heading={false} />
      <FinalCta />
    </>
  );
}
