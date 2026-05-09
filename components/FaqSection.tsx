"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How quickly can a caregiver start?",
    a: "For most cases in Bangalore, we place a caregiver within 6 hours of confirming a booking. For complex care (dementia, bedridden, post-surgery) we may take 12–24 hours so we can match the right specialist.",
  },
  {
    q: "How are caregivers verified?",
    a: "Every caregiver goes through Aadhaar verification, address verification, police background check, in-person interview, and a 60+ hour training program before placement. We hold their profile, training records and references on file.",
  },
  {
    q: "What if my family doesn’t feel comfortable with the caregiver?",
    a: "We replace the caregiver within 24 hours, no questions asked. Continuity matters — but only when the fit is right. The replacement is fully covered.",
  },
  {
    q: "Is pricing really fixed, or are there hidden costs?",
    a: "Pricing is shown upfront based on care type, hours and locality. The only added costs are if you upgrade care complexity (e.g., adding RT-feed support) or extend hours — and those are confirmed with you in writing before the change.",
  },
  {
    q: "Do you cover all of Bangalore?",
    a: "Yes — Indiranagar, Whitefield, HSR, Koramangala, Jayanagar, Electronic City, Hebbal, Yelahanka, Malleshwaram, Rajajinagar and surrounding zones. Travel time varies by zone but most caregivers reach within 35 minutes.",
  },
  {
    q: "Can I get a female caregiver / Kannada-speaking caregiver?",
    a: "Yes. We match by gender, language and care experience. Common pairings include Kannada, Tamil, Telugu, Malayalam, Hindi, Bengali and English speakers.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">
          <div className="lg:sticky lg:top-28 self-start">
            <span className="section-eyebrow">
              <span className="h-px w-6 bg-teal-500" /> Common questions
            </span>
            <h2 className="mt-3 section-title">
              The things families usually want to ask first.
            </h2>
            <p className="mt-4 lead">
              If you don’t see your question here, message us on WhatsApp — we usually
              reply within a few minutes.
            </p>
          </div>

          <ul className="divide-y divide-ink-100">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-[18px] sm:text-[20px] text-ink-900">
                      {f.q}
                    </span>
                    <span
                      className={[
                        "shrink-0 mt-1 grid h-7 w-7 place-items-center rounded-full transition",
                        isOpen ? "bg-teal-700 text-white rotate-45" : "bg-ink-100 text-ink-700",
                      ].join(" ")}
                      aria-hidden
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" /><path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={[
                      "grid transition-[grid-template-rows] duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]",
                    ].join(" ")}
                  >
                    <div className="overflow-hidden text-[15px] text-ink-600 leading-relaxed">
                      {f.a}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
