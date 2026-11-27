import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, site } from "@/lib/site";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { IncludedList, PromiseSeal, PromiseSection, WhatIfSection } from "@/components/CarePromise";
import { FinalCta } from "@/components/FinalCta";

export const metadata: Metadata = buildMetadata({
  title: "Our Care Promise — Verification, Replacement & Pricing Guarantees",
  description:
    "What every Care Givers family can count on: verified and trained staff, free replacement within 24 hours, backup cover, and no price changes without your agreement.",
  path: "/our-promise",
});

const vetting = [
  {
    title: "Application and in-person interview",
    body: "We meet every caregiver, nurse and physiotherapist face to face, and look for patience and kindness as much as skill.",
  },
  {
    title: "Identity, address and police verification",
    body: "Aadhaar verification, address verification and a police background check, before any placement.",
  },
  {
    title: "References and qualifications",
    body: "We speak to previous employers. For nurses and physiotherapists, we check their nursing or physiotherapy qualifications.",
  },
  {
    title: "Training",
    body: "Caregivers complete 60+ hours of training before their first placement. We keep their training records on file.",
  },
  {
    title: "Matching and profile",
    body: "We match by care needs, language and gender preference, and share the profile with your family before anyone arrives.",
  },
  {
    title: "Ongoing supervision",
    body: "Supervisors visit families at home, and the care team is reachable 24 hours a day if anything needs attention.",
  },
];

const faqs = [
  {
    q: "Is the 24-hour replacement really free?",
    a: "Yes. If your family isn’t comfortable with the caregiver for any reason, we send someone else within 24 hours and don’t charge for the change.",
  },
  {
    q: "What if the caregiver doesn’t turn up?",
    a: "Call the care team. We send a backup, usually someone your family has already met, so your parent isn’t left without care.",
  },
  {
    q: "Can the price go up after we start?",
    a: "Only if the care changes, for example more hours or more complex needs, and only after we’ve confirmed the new price with you in writing.",
  },
  {
    q: "How do I raise a concern?",
    a: `Call ${site.phone} at any hour or message us on WhatsApp. A supervisor follows up with you directly.`,
  },
];

export default function OurPromisePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Our promise", href: "/our-promise" },
        ]}
      />

      <section className="pb-4 pt-10 sm:pt-16">
        <div className="container max-w-4xl">
          <PromiseSeal size={64} />
          <h1 className="mt-8 font-display text-[44px] font-semibold leading-[1.03] tracking-[-0.035em] text-ink-900 sm:text-[64px]">
            What you can count on when you choose us
          </h1>
          <p className="mt-6 max-w-2xl text-[19px] leading-[1.6] text-ink-600">
            Letting someone into your parent’s home takes trust. These are the commitments we make
            to every family, how we check every person we send, and exactly what we do if
            something goes wrong.
          </p>
        </div>
      </section>

      <PromiseSection showLink={false} />

      <section aria-labelledby="vetting-title" className="bg-white py-20 sm:py-28">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 id="vetting-title" className="section-title">
              How we check every person we send
            </h2>
            <p className="mt-5 lead max-w-md">
              Six steps, completed before anyone is placed with a family.
            </p>
          </div>
          <ol className="grid gap-0 border-t border-ink-100">
            {vetting.map((v, i) => (
              <li key={v.title} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-ink-100 py-6">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-teal-700 text-[16px] font-semibold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-[19px] font-semibold text-ink-900">{v.title}</h3>
                  <p className="mt-1.5 text-[16px] leading-relaxed text-ink-600">{v.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <WhatIfSection />

      <section className="py-20 sm:py-28">
        <div className="container grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="rounded-3xl bg-white p-7 ring-1 ring-ink-100 sm:p-10">
            <IncludedList />
            <p className="mt-6 border-t border-ink-100 pt-6 text-[16px] text-ink-600">
              The price you’re quoted covers all of this. See{" "}
              <Link href="/pricing" className="link-quiet">
                prices for every service
              </Link>
              .
            </p>
          </div>
          <div>
            <h2 className="text-[24px] font-semibold tracking-[-0.01em] text-ink-900">Questions about the promise</h2>
            <dl className="mt-6 divide-y divide-ink-100 border-y border-ink-100">
              {faqs.map((f) => (
                <div key={f.q} className="py-5">
                  <dt className="text-[17px] font-semibold text-ink-900">{f.q}</dt>
                  <dd className="mt-2 text-[16px] leading-relaxed text-ink-600">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
