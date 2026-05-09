import type { Metadata } from "next";
import { FaqSection } from "@/components/FaqSection";
import { FinalCta } from "@/components/FinalCta";
import { BreadcrumbJsonLd, FaqJsonLd, SpeakableJsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Frequently Asked Questions — Care Givers Bangalore",
  description:
    "Answers to common questions about Care Givers — verification, pricing, replacement, language matching and Bangalore coverage.",
  path: "/faq",
});

const groups = [
  {
    title: "Booking & matching",
    items: [
      {
        q: "How long does booking take?",
        a: "Most families finish the booking flow in under 3 minutes. We follow up via WhatsApp within an hour with a shortlisted caregiver.",
      },
      {
        q: "Do I need to pay to confirm a match?",
        a: "No. Booking is free. Payment is collected only after you’ve approved the caregiver match and the caregiver is placed.",
      },
      {
        q: "Can I change my booking after submitting?",
        a: "Yes — you can edit duration, address or care type any time before placement. After placement, changes are confirmed with you in writing.",
      },
    ],
  },
  {
    title: "Caregivers & training",
    items: [
      {
        q: "Are caregivers trained for medical care?",
        a: "Our patient care attendants complete a 60+ hour training in basic clinical care, supervised by qualified nurses. For complex medical needs, we recommend our home nursing tier.",
      },
      {
        q: "Can I meet the caregiver before they start?",
        a: "Yes. We share the caregiver’s profile (photo, age, experience, languages) over WhatsApp. For long-term placements, we can arrange a brief in-person introduction.",
      },
      {
        q: "What languages do caregivers speak?",
        a: "Most commonly: Kannada, English, Hindi, Tamil, Telugu, Malayalam and Bengali.",
      },
    ],
  },
  {
    title: "Safety & verification",
    items: [
      {
        q: "How are caregivers verified?",
        a: "Aadhaar verification, address verification, police background check, in-person interview, references, and a 60-hour training programme.",
      },
      {
        q: "Are caregivers insured?",
        a: "Caregivers are covered under our group accident insurance during shifts. For the family’s peace of mind, we recommend any in-home care setup includes basic home insurance.",
      },
      {
        q: "What if there’s an emergency?",
        a: "Caregivers are trained to call your designated family contact and our 24×7 care manager simultaneously, then follow your pre-decided hospital plan.",
      },
    ],
  },
];

export default function FaqPage() {
  const allFaqs = groups.flatMap((g) => g.items);
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "FAQ", href: "/faq" },
        ]}
      />
      <FaqJsonLd faqs={allFaqs} />
      <SpeakableJsonLd
        url="/faq"
        cssSelectors={["[data-faq-q]", "[data-faq-a]"]}
      />
      <section className="pt-16 sm:pt-24 pb-10">
        <div className="container max-w-3xl text-center">
          <span className="chip">Honest answers</span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-[-0.02em] text-ink-900">
            Everything families ask, in one place.
          </h1>
          <p className="mt-5 lead">
            If your question isn’t answered here, message us on WhatsApp — we usually
            respond within a few minutes.
          </p>
        </div>
      </section>

      <FaqSection />

      <section className="py-14 sm:py-20 bg-white">
        <div className="container max-w-4xl">
          {groups.map((g) => (
            <div key={g.title} className="mb-14 last:mb-0">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
                {g.title}
              </h2>
              <div className="mt-5 divide-y divide-ink-100">
                {g.items.map((it) => (
                  <details
                    key={it.q}
                    className="group py-5 [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex cursor-pointer items-start justify-between gap-6">
                      <span data-faq-q className="font-display text-lg text-ink-900">{it.q}</span>
                      <span className="mt-1 grid h-7 w-7 place-items-center rounded-full bg-ink-100 text-ink-700 transition group-open:rotate-45 group-open:bg-teal-700 group-open:text-white">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <path d="M12 5v14" /><path d="M5 12h14" />
                        </svg>
                      </span>
                    </summary>
                    <p data-faq-a className="mt-3 text-[15px] text-ink-600 leading-relaxed">{it.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
