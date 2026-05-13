import type { Metadata } from "next";
import Link from "next/link";
import { ServicesGrid } from "@/components/ServicesGrid";
import { FinalCta } from "@/components/FinalCta";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/site";
import { ArrowRightIcon, SparklesIcon } from "@/components/icons";

export const metadata: Metadata = buildMetadata({
  title: "Home Care Services in Bangalore",
  description:
    "Explore all home caregiving services in Bangalore — elder care, patient care, live-in, post-surgery, dementia, bedridden, night and female caregivers.",
  path: "/services",
});

export default function ServicesIndex() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />
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

      {/* Cross-link to the care quiz for indecisive readers */}
      <section className="py-10">
        <div className="container max-w-3xl">
          <Link
            href="/care-quiz"
            className="group flex items-center gap-5 rounded-[28px] bg-gradient-to-br from-sage-50 via-cream-50 to-teal-50 ring-1 ring-sage-200 p-6 sm:p-8 hover:shadow-soft transition"
          >
            <span className="shrink-0 grid h-14 w-14 place-items-center rounded-2xl bg-white text-teal-700 shadow-soft">
              <SparklesIcon size={24} />
            </span>
            <div className="flex-1">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
                Not sure which service fits?
              </div>
              <div className="mt-1 font-display text-xl sm:text-2xl text-ink-900">
                Take the 2-minute care quiz.
              </div>
              <div className="mt-1 text-[13.5px] text-ink-600">
                Six questions. A clear recommendation. No email required.
              </div>
            </div>
            <ArrowRightIcon size={18} />
          </Link>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
