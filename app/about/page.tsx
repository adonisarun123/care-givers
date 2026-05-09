import type { Metadata } from "next";
import { CaregiverProfiles } from "@/components/CaregiverProfiles";
import { Stats } from "@/components/Stats";
import { WhyUs } from "@/components/WhyUs";
import { FinalCta } from "@/components/FinalCta";
import { ShieldCheckIcon, HeartHandIcon, SparklesIcon } from "@/components/icons";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "About Care Givers — Bangalore Home Caregiving",
  description:
    "Care Givers is a Bangalore-based home caregiving service built on training, empathy and verification — so families never feel alone.",
  path: "/about",
});

const values = [
  {
    icon: HeartHandIcon,
    title: "We hire for empathy first.",
    body:
      "Skills can be taught. Kindness, patience and the instinct to read a quiet room — those come first in every interview.",
  },
  {
    icon: ShieldCheckIcon,
    title: "We verify everything.",
    body:
      "Aadhaar, address, references, police record. No exceptions, no shortcuts — even when families need us urgently.",
  },
  {
    icon: SparklesIcon,
    title: "We stay close after placement.",
    body:
      "Caregiving doesn’t end with the match. Supervisors visit, families WhatsApp, and we adjust care as life changes.",
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />
      <section className="pt-16 sm:pt-24 pb-10">
        <div className="container max-w-3xl text-center">
          <span className="chip">Our story</span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-[-0.02em] text-ink-900">
            Built by families, for families.
          </h1>
          <p className="mt-6 lead">
            Care Givers started with one simple frustration: when a parent in Bangalore
            falls ill, finding good help feels impossible. Agencies were rude, callbacks
            never came, and the people who arrived were strangers, not caregivers.
          </p>
          <p className="mt-4 lead">
            So we built what we wished existed — a calm, transparent, trust-first home
            care service. The kind we’d want for our own parents.
          </p>
        </div>
      </section>

      <Stats />

      <section className="py-16 sm:py-24 bg-white">
        <div className="container max-w-5xl">
          <div className="text-center">
            <span className="section-eyebrow justify-center">
              <span className="h-px w-6 bg-teal-500" /> What we believe
            </span>
            <h2 className="mt-3 section-title">Three things we will not compromise on.</h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="rounded-3xl bg-cream-50 ring-1 ring-cream-200 p-7"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sage-100 text-sage-700">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 font-display text-xl text-ink-900">{title}</h3>
                <p className="mt-2 text-[15px] text-ink-600 leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CaregiverProfiles />
      <WhyUs />
      <FinalCta />
    </>
  );
}
