import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";

const tiers = [
  {
    name: "Hourly visit",
    price: "₹220",
    suffix: "/ hour",
    note: "Min 4 hours · Great for short-term needs",
    features: [
      "Personal care & companionship",
      "Light medication reminders",
      "Same caregiver across visits",
    ],
    cta: "Book hourly",
  },
  {
    name: "12-hour shift",
    price: "₹950",
    suffix: "/ day",
    note: "Day or night · Most flexible option",
    features: [
      "Day, evening or 12-hour night shift",
      "Full personal & wellness care",
      "Daily updates to family",
    ],
    cta: "Book a shift",
    highlight: true,
  },
  {
    name: "Live-in 24×7",
    price: "₹28,000",
    suffix: "/ month",
    note: "Round-the-clock · Weekly off included",
    features: [
      "Continuous day & night supervision",
      "Bi-weekly supervisor home visit",
      "Replacement caregiver guaranteed",
    ],
    cta: "Book live-in",
  },
];

export function PricingPreview() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-cream-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="section-eyebrow justify-center">
            <span className="h-px w-6 bg-teal-500" /> Transparent pricing
          </span>
          <h2 className="mt-3 section-title">
            No callbacks. No surprises. Just clear care.
          </h2>
          <p className="mt-4 lead">
            Pricing starts here. Final quote depends on care complexity and locality —
            shown clearly before you confirm.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {tiers.map((t) => (
            <article
              key={t.name}
              className={[
                "relative rounded-[28px] p-7 sm:p-8 ring-1 transition",
                t.highlight
                  ? "bg-ink-900 text-white ring-ink-900 shadow-glow lg:scale-[1.02]"
                  : "bg-white text-ink-900 ring-ink-100 shadow-soft",
              ].join(" ")}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-sage-400 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-900">
                  Most booked
                </span>
              )}
              <div className={t.highlight ? "text-sage-200" : "text-teal-700"}>
                <span className="text-xs font-semibold uppercase tracking-[0.16em]">
                  {t.name}
                </span>
              </div>
              <div className="mt-3 flex items-baseline gap-1.5">
                <span className="font-display text-5xl tracking-tight">{t.price}</span>
                <span className={t.highlight ? "text-ink-300" : "text-ink-500"}>
                  {t.suffix}
                </span>
              </div>
              <p className={`mt-2 text-sm ${t.highlight ? "text-ink-300" : "text-ink-600"}`}>
                {t.note}
              </p>

              <ul className="mt-7 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14.5px]">
                    <span
                      className={[
                        "mt-0.5 grid h-5 w-5 place-items-center rounded-full shrink-0",
                        t.highlight ? "bg-sage-400 text-ink-900" : "bg-sage-100 text-sage-700",
                      ].join(" ")}
                    >
                      <CheckIcon size={12} />
                    </span>
                    <span className={t.highlight ? "text-cream-100" : "text-ink-700"}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/book"
                className={[
                  "mt-7 w-full justify-center",
                  t.highlight ? "btn-md bg-sage-400 text-ink-900 hover:bg-sage-300" : "btn-md btn-secondary",
                ].join(" ")}
              >
                {t.cta} <ArrowRightIcon size={16} />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/pricing" className="link-quiet text-sm text-ink-600">
            See full pricing across all services →
          </Link>
        </div>
      </div>
    </section>
  );
}
