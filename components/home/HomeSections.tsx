import Link from "next/link";
import { services } from "@/lib/services";
import { careOptions } from "@/components/home/careOptions";
import { CheckIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { site } from "@/lib/site";
import { CallbackForm } from "@/components/CallbackForm";

/* ── Commitments ─────────────────────────────────────────────────────── */

const commitments = [
  {
    title: "Checked before they reach your door",
    body: "Aadhaar, address and police verification, references and an in-person interview.",
  },
  {
    title: "Trained for 60+ hours",
    body: "Every caregiver is interviewed and trained before their first placement.",
  },
  {
    title: "Often with you within 6 hours",
    body: "For urgent cases. Specialised care like dementia can take 12 to 24 hours to match well.",
  },
  {
    title: "Replaced within 24 hours",
    body: "If your family isn’t comfortable, we send someone else. The replacement costs nothing.",
  },
];

export function Commitments() {
  return (
    <section aria-labelledby="commitments-title" className="border-y border-ink-100 bg-white">
      <h2 id="commitments-title" className="sr-only">
        Our commitments
      </h2>
      <div className="container grid divide-y divide-ink-100 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
        {commitments.map((c, i) => (
          <div
            key={c.title}
            className={[
              "py-7 sm:px-6 sm:py-10",
              i % 2 === 1 ? "sm:border-l sm:border-ink-100" : "",
              i >= 2 ? "sm:border-t sm:border-ink-100 lg:border-t-0" : "",
              i === 2 ? "lg:border-l" : "",
              i === 0 ? "sm:pl-0" : "",
            ].join(" ")}
          >
            <h3 className="text-[18px] font-semibold leading-snug text-ink-900">{c.title}</h3>
            <p className="mt-2 text-[16px] leading-relaxed text-ink-600">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Services index ──────────────────────────────────────────────────── */

function startingPrice(prices: { price: string }[]) {
  // Lowest monthly or daily figure is less useful than the first-listed option,
  // which each service orders as its most common entry point.
  return prices[0]?.price ?? "";
}

function PriceHint({ price }: { price: string }) {
  if (/assessment/i.test(price)) return <>Price after a free call</>;
  return (
    <>
      from <span className="font-semibold text-ink-900">{price}</span>
    </>
  );
}

export function ServicesIndex() {
  return (
    <section aria-labelledby="services-title" className="py-20 sm:py-28">
      <div className="container grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 id="services-title" className="section-title">
            Care for the situation you’re in
          </h2>
          <p className="mt-5 lead max-w-md">
            Attendants for everyday help, and registered nurses and physiotherapists
            when the care is medical. Every one of them is verified before they reach you.
          </p>
          <Link href="/services" className="mt-6 inline-block text-[16px] font-semibold text-teal-700 underline decoration-teal-200 underline-offset-4 hover:decoration-teal-700">
            Compare all services
          </Link>
        </div>

        <div className="grid gap-12">
          {(
            [
              ["daily", "Daily care and support"],
              ["medical", "Medical care at home"],
            ] as const
          ).map(([group, title]) => (
            <div key={group}>
              <h3
                className={[
                  "flex items-center gap-2 text-[15px] font-semibold",
                  group === "medical" ? "text-clinic-700" : "text-teal-700",
                ].join(" ")}
              >
                <span aria-hidden className={["h-2.5 w-2.5 rounded-full", group === "medical" ? "bg-clinic-500" : "bg-teal-500"].join(" ")} />
                {title}
                {group === "medical" && (
                  <span className="font-normal text-ink-500">by registered nurses and physiotherapists</span>
                )}
              </h3>
              <ul className="mt-3 border-t border-ink-200">
                {careOptions
                  .filter((o) => o.group === group)
                  .map((o) => {
                    const s = services.find((x) => x.slug === o.slug);
                    if (!s) return null;
                    return (
                      <li key={s.slug} className="border-b border-ink-200">
                        <Link
                          href={`/services/${s.slug}`}
                          className="group grid gap-1 py-5 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-8"
                        >
                          <span>
                            <span
                              className={[
                                "block text-[20px] font-semibold tracking-[-0.01em] text-ink-900",
                                group === "medical" ? "group-hover:text-clinic-700" : "group-hover:text-teal-700",
                              ].join(" ")}
                            >
                              {s.name}
                            </span>
                            <span className="mt-1 block text-[16px] text-ink-600">{o.summary}</span>
                          </span>
                          <span className="text-[15px] text-ink-500 sm:text-right">
                            <PriceHint price={startingPrice(s.pricing)} />
                          </span>
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── How booking works (a real sequence, so it's numbered) ───────────── */

const steps = [
  {
    title: "Tell us what’s needed",
    body: "Book online in a few minutes, or call and talk it through with a coordinator.",
  },
  {
    title: "We match a caregiver",
    body: "Chosen for the care needed, the languages spoken at home and any gender preference.",
  },
  {
    title: "You see their profile first",
    body: "Training, experience and verification, shared with you before anyone arrives.",
  },
  {
    title: "We stay involved",
    body: "Daily updates, supervisor visits every two weeks and a replacement if needed.",
  },
];

export function HowBookingWorks() {
  return (
    <section aria-labelledby="how-title" id="how-it-works" className="bg-white py-20 sm:py-28">
      <div className="container">
        <h2 id="how-title" className="section-title max-w-2xl">
          From first call to a caregiver at home
        </h2>
        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <div className="flex items-center gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-teal-700 text-[16px] font-semibold text-white">
                  {i + 1}
                </span>
                {i < steps.length - 1 && (
                  <span aria-hidden className="hidden h-px flex-1 bg-ink-200 lg:block" />
                )}
              </div>
              <h3 className="mt-5 text-[19px] font-semibold text-ink-900">{s.title}</h3>
              <p className="mt-2 text-[16px] leading-relaxed text-ink-600">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ── Caregiver profile (an honest sample, not a stock photo) ─────────── */

const profileRows: [string, string][] = [
  ["Experience", "6 years, including 2 in dementia care"],
  ["Languages", "Kannada, Tamil, Hindi"],
  ["Training", "60-hour programme, completed"],
  ["Shift", "12-hour day, Monday to Saturday"],
];

export function CaregiverProfileSection() {
  return (
    <section aria-labelledby="profile-title" className="bg-stone-100 py-20 sm:py-28">
      <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 id="profile-title" className="section-title">
            Know who’s coming before they arrive
          </h2>
          <p className="mt-5 lead max-w-lg">
            Before anyone steps into your home, you receive the caregiver’s profile: their
            experience, the languages they speak, their training and the checks they’ve
            passed. If something doesn’t feel right, ask us for someone else.
          </p>
          <ul className="mt-8 grid gap-3 text-[16px] text-ink-700">
            {[
              "Same caregiver on every visit wherever possible",
              "A supervisor visits your home every two weeks",
              "Daily updates for the family",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <CheckIcon size={20} strokeWidth={2.2} className="mt-0.5 shrink-0 text-teal-700" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <figure className="mx-auto w-full max-w-md">
          <div className="rounded-3xl bg-white p-6 shadow-lift ring-1 ring-ink-100 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <span
                  aria-hidden
                  className="grid h-14 w-14 place-items-center rounded-full bg-teal-50 text-[18px] font-semibold text-teal-700"
                >
                  LK
                </span>
                <div>
                  <p className="text-[19px] font-semibold text-ink-900">Lakshmi K.</p>
                  <p className="text-[15px] text-ink-600">Elder care attendant</p>
                </div>
              </div>
              <span className="rounded-full bg-marigold-100 px-2.5 py-1 text-[13px] font-semibold text-marigold-700">
                Sample
              </span>
            </div>

            <dl className="mt-6 divide-y divide-ink-100 border-y border-ink-100">
              {profileRows.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[7.5rem_1fr] gap-3 py-3 text-[15px]">
                  <dt className="text-ink-500">{k}</dt>
                  <dd className="text-ink-900">{v}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-5 text-[15px] font-semibold text-ink-900">Checks passed</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {["Aadhaar", "Police", "Address", "References"].map((c) => (
                <li key={c} className="chip">
                  <CheckIcon size={14} strokeWidth={2.4} /> {c}
                </li>
              ))}
            </ul>
          </div>
          <figcaption className="mt-4 text-center text-[14px] text-ink-500">
            An example of the profile families receive. Details change for each caregiver.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ── Plans ───────────────────────────────────────────────────────────── */

const plans = [
  {
    name: "Hourly visits",
    price: "₹220",
    unit: "per hour",
    note: "Minimum 4 hours",
    fit: "For a few hours of help, company or a break for the family.",
    features: ["Personal care and company", "Medicine reminders", "Same caregiver each visit"],
    href: "/book?plan=hourly",
    cta: "Book hourly visits",
  },
  {
    name: "12-hour shift",
    price: "₹950",
    unit: "per day or night",
    note: "Most families start here",
    fit: "For daytime support while you work, or nights so you can sleep.",
    features: ["Day or night shift", "Full personal care", "Daily update to the family"],
    href: "/book?plan=12h",
    cta: "Book a 12-hour shift",
    featured: true,
  },
  {
    name: "Live-in, 24 hours",
    price: "₹28,000",
    unit: "per month",
    note: "Weekly off covered by a reliever",
    fit: "For someone who shouldn’t be alone at any time of day.",
    features: ["Day and night presence", "Supervisor visit every two weeks", "Replacement guaranteed"],
    href: "/book?plan=live-in",
    cta: "Book live-in care",
  },
];

export function Plans() {
  return (
    <section aria-labelledby="plans-title" className="py-20 sm:py-28">
      <div className="container">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <h2 id="plans-title" className="section-title max-w-xl">
            Clear prices, before you commit
          </h2>
          <p className="lead max-w-lg lg:justify-self-end">
            Starting prices for elder care. Specialised care such as dementia or bedridden
            support costs more, and is always quoted before you confirm.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={[
                "flex flex-col rounded-3xl p-7",
                p.featured ? "bg-teal-700 text-white" : "bg-white ring-1 ring-ink-100",
              ].join(" ")}
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-[19px] font-semibold">{p.name}</h3>
                {p.featured && (
                  <span className="rounded-full bg-marigold-500 px-2.5 py-0.5 text-[13px] font-semibold text-ink-900">
                    {p.note}
                  </span>
                )}
              </div>
              <p className="mt-5">
                <span className="font-display text-[44px] font-semibold tracking-[-0.03em]">
                  {p.price}
                </span>{" "}
                <span className={p.featured ? "text-teal-100" : "text-ink-500"}>{p.unit}</span>
              </p>
              {!p.featured && <p className="text-[14px] text-ink-500">{p.note}</p>}
              <p className={["mt-4 text-[16px]", p.featured ? "text-teal-50" : "text-ink-600"].join(" ")}>
                {p.fit}
              </p>
              <ul className={["mt-6 grid gap-2.5 border-t pt-6 text-[16px]", p.featured ? "border-white/15" : "border-ink-100"].join(" ")}>
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckIcon
                      size={18}
                      strokeWidth={2.2}
                      className={["mt-0.5 shrink-0", p.featured ? "text-marigold-300" : "text-teal-700"].join(" ")}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={p.href}
                className={[
                  "btn-lg mt-8 w-full",
                  p.featured ? "bg-white text-teal-800 hover:bg-teal-50" : "btn-secondary",
                ].join(" ")}
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-[16px]">
          <Link href="/pricing" className="link-quiet">
            See prices for every service
          </Link>
        </p>
      </div>
    </section>
  );
}

/* ── Free tools (for families who aren't ready to book) ──────────────── */

const tools = [
  {
    href: "/cost-calculator",
    title: "Estimate the monthly cost",
    body: "Work out a budget for the hours and kind of care you’re considering.",
  },
  {
    href: "/care-quiz",
    title: "Find the right kind of care",
    body: "Answer a few questions about your parent and get a suggestion.",
  },
  {
    href: "/shop",
    title: "Rent or buy care equipment",
    body: "Hospital beds, mobility aids, oxygen and monitoring devices.",
  },
];

export function NotReadyYet() {
  return (
    <section aria-labelledby="tools-title" className="pb-4">
      <div className="container">
        <h2 id="tools-title" className="text-[22px] font-semibold tracking-[-0.01em] text-ink-900">
          Still working out what you need?
        </h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {tools.map((t) => (
            <li key={t.href}>
              <Link
                href={t.href}
                className="block h-full rounded-2xl bg-white p-6 ring-1 ring-ink-100 transition-colors hover:ring-teal-300"
              >
                <span className="block text-[18px] font-semibold text-teal-700">{t.title}</span>
                <span className="mt-2 block text-[16px] text-ink-600">{t.body}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── Conditions we care for (plain language → the right service) ─────── */

const conditionGroups: { title: string; items: [string, string][] }[] = [
  {
    title: "Ageing and everyday life",
    items: [
      ["Weakness and frailty", "elder-care"],
      ["Parents living alone", "elder-care"],
      ["Loneliness after losing a spouse", "elder-care"],
      ["Help through the night", "night-caregiver"],
    ],
  },
  {
    title: "Memory and the brain",
    items: [
      ["Dementia and Alzheimer’s", "dementia-care"],
      ["Parkinson’s disease", "parkinsons-care"],
      ["Recovery after a stroke", "stroke-care"],
      ["Confusion and wandering", "dementia-care"],
    ],
  },
  {
    title: "After a hospital stay",
    items: [
      ["Knee or hip replacement", "post-surgery-care"],
      ["Fractures and falls", "post-surgery-care"],
      ["First weeks after discharge", "post-surgery-care"],
      ["Rehabilitation exercises", "physiotherapy-at-home"],
    ],
  },
  {
    title: "Nursing needs at home",
    items: [
      ["Injections and IV fluids", "home-nursing"],
      ["Wound and bedsore dressing", "home-nursing"],
      ["Catheter care", "home-nursing"],
      ["Feeding tube (Ryle’s / PEG)", "home-nursing"],
    ],
  },
  {
    title: "Long-term and serious illness",
    items: [
      ["Bedridden patients", "bedridden-care"],
      ["Diabetes and blood pressure", "elder-care"],
      ["Advanced cancer and comfort care", "palliative-care"],
      ["Heart, lung or kidney disease", "home-nursing"],
    ],
  },
  {
    title: "Mobility and independence",
    items: [
      ["Balance problems and fear of falling", "physiotherapy-at-home"],
      ["Wheelchair users", "disability-care"],
      ["Spinal cord injury", "disability-care"],
      ["Back, neck and joint pain", "physiotherapy-at-home"],
    ],
  },
];

export function ConditionsWeCareFor() {
  return (
    <section aria-labelledby="conditions-title" className="bg-white py-20 sm:py-28">
      <div className="container">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <h2 id="conditions-title" className="section-title max-w-xl">
            Conditions we care for at home
          </h2>
          <p className="lead max-w-lg lg:justify-self-end">
            Not sure what kind of care to ask for? Start with what your parent is going through.
            Each one takes you to the right service.
          </p>
        </div>
        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {conditionGroups.map((g) => (
            <div key={g.title}>
              <h3 className="border-b border-ink-100 pb-3 text-[17px] font-semibold text-ink-900">{g.title}</h3>
              <ul className="mt-3 grid gap-1">
                {g.items.map(([label, slug]) => (
                  <li key={label}>
                    <Link
                      href={`/services/${slug}`}
                      className="group -mx-2 flex items-center justify-between gap-3 rounded-lg px-2 py-2 text-[16px] text-ink-700 transition-colors hover:bg-stone-100 hover:text-ink-900"
                    >
                      {label}
                      <span aria-hidden className="text-ink-300 transition-colors group-hover:text-teal-700">›</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Mid-page urgent band ────────────────────────────────────────────── */

export function NeedCareToday() {
  return (
    <section aria-labelledby="today-title" className="py-6 sm:py-10">
      <div className="container">
        <div className="grid gap-8 rounded-3xl bg-teal-800 px-6 py-10 text-white sm:px-10 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-14">
          <div>
            <h2 id="today-title" className="font-display text-[30px] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[38px]">
              Need someone today?
            </h2>
            <p className="mt-3 max-w-md text-[17px] leading-relaxed text-teal-100">
              Our care team picks up 24 hours a day. For urgent cases, a caregiver can often be with
              you within 6 hours.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={site.phoneHref} className="btn-lg bg-white text-teal-800 hover:bg-teal-50">
                <PhoneIcon size={18} /> Call {site.phone}
              </a>
              <a href={site.whatsappHref} className="btn-lg btn-whatsapp">
                <WhatsAppIcon size={18} /> WhatsApp
              </a>
            </div>
          </div>
          <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/15 sm:p-6">
            <p className="mb-4 text-[17px] font-semibold">Or leave your number and we’ll call you</p>
            <CallbackForm tone="dark" source="callback-urgent-band" />
          </div>
        </div>
      </div>
    </section>
  );
}
