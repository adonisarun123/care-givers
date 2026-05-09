import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { FinalCta } from "@/components/FinalCta";
import { FaqSection } from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Caregiver Pricing in Bangalore",
  description:
    "Transparent pricing for home caregivers, patient attendants, live-in and night care across Bangalore. No hidden fees, no callbacks.",
};

export default function PricingPage() {
  return (
    <>
      <section className="pt-16 sm:pt-24 pb-10">
        <div className="container max-w-3xl text-center">
          <span className="chip">No callbacks. No surprises.</span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-[-0.02em] text-ink-900">
            Honest pricing, on the first read.
          </h1>
          <p className="mt-5 lead">
            We show our starting prices upfront. Final quote depends on care complexity,
            shift timing and locality — confirmed in writing before placement.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-12">
        <div className="container">
          <ul className="space-y-4">
            {services.map((s) => (
              <li
                key={s.slug}
                className="rounded-3xl bg-white ring-1 ring-ink-100 shadow-soft p-6 sm:p-8"
              >
                <div className="grid gap-6 lg:grid-cols-[1fr_2fr_auto] items-start lg:items-center">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
                      {s.duration}
                    </div>
                    <h2 className="mt-1.5 font-display text-2xl text-ink-900">{s.name}</h2>
                    <p className="mt-1.5 text-sm text-ink-600">{s.short}</p>
                  </div>

                  <ul className="grid sm:grid-cols-3 gap-3">
                    {s.pricing.map((p) => (
                      <li
                        key={p.label}
                        className="rounded-2xl bg-cream-50 ring-1 ring-cream-200 p-4"
                      >
                        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-500">
                          {p.label}
                        </div>
                        <div className="mt-1 font-display text-xl text-ink-900">{p.price}</div>
                        {p.note && <div className="text-[11px] text-ink-500 mt-0.5">{p.note}</div>}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/services/${s.slug}`}
                    className="btn-md btn-secondary"
                  >
                    Details <ArrowRightIcon size={14} />
                  </Link>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-3xl bg-sage-50 ring-1 ring-sage-200 p-7 sm:p-9 grid lg:grid-cols-[1.4fr_1fr] items-center gap-8">
            <div>
              <h3 className="font-display text-2xl text-ink-900">
                What’s always included in your booking
              </h3>
              <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-[14.5px] text-ink-700">
                {[
                  "Verified, trained caregiver",
                  "ID badge & uniform",
                  "Daily updates to family",
                  "On-call care manager",
                  "Bi-weekly supervisor visit",
                  "Replacement guarantee",
                ].map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-sage-200 text-sage-800">
                      <CheckIcon size={12} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:text-right">
              <Link href="/book" className="btn-lg btn-primary">
                Get my exact quote <ArrowRightIcon size={16} />
              </Link>
              <p className="mt-3 text-xs text-ink-500">
                No payment required to start the booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FaqSection />
      <FinalCta />
    </>
  );
}
