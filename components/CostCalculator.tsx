"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRightIcon,
  CheckIcon,
  PinIcon,
  ShieldCheckIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { services } from "@/lib/services";
import { localities } from "@/lib/locations";
import { site } from "@/lib/site";

type Plan = "hourly" | "12h-day" | "12h-night" | "live-in";
type Complexity = "basic" | "specialised";

const PLAN_RATES: Record<
  Plan,
  { label: string; baseDay: number; baseMonthLow: number; baseMonthHigh: number }
> = {
  hourly: { label: "Hourly visits", baseDay: 220, baseMonthLow: 0, baseMonthHigh: 0 },
  "12h-day": { label: "12-hour day shift", baseDay: 950, baseMonthLow: 26000, baseMonthHigh: 32000 },
  "12h-night": { label: "12-hour night shift", baseDay: 950, baseMonthLow: 22000, baseMonthHigh: 28000 },
  "live-in": { label: "24×7 live-in", baseDay: 0, baseMonthLow: 28000, baseMonthHigh: 38000 },
};

const COMPLEXITY_MULT: Record<Complexity, number> = {
  basic: 1,
  specialised: 1.18,
};

// East / South / Central are dispatch-fast; North / further zones get a tiny travel premium for hourly only
const ZONE_HOURLY_PREMIUM: Record<string, number> = {
  East: 0,
  South: 0,
  Central: 0,
  North: 20,
  West: 15,
};

export function CostCalculator() {
  const [plan, setPlan] = useState<Plan>("12h-day");
  const [hoursPerDay, setHoursPerDay] = useState(6); // hourly only
  const [daysPerMonth, setDaysPerMonth] = useState(30);
  const [serviceSlug, setServiceSlug] = useState("elder-care");
  const [localitySlug, setLocalitySlug] = useState("indiranagar");
  const [complexity, setComplexity] = useState<Complexity>("basic");

  const locality = localities.find((l) => l.slug === localitySlug)!;
  const service = services.find((s) => s.slug === serviceSlug)!;

  const result = useMemo(() => {
    const r = PLAN_RATES[plan];
    const mult = COMPLEXITY_MULT[complexity];

    if (plan === "hourly") {
      const ratePerHour = r.baseDay + (ZONE_HOURLY_PREMIUM[locality.zone] || 0);
      const monthly = Math.round(ratePerHour * hoursPerDay * daysPerMonth * mult);
      return {
        ratePerHour,
        monthly,
        monthlyLow: monthly,
        monthlyHigh: monthly,
        breakdown: [
          { label: "Hourly rate", value: `₹${ratePerHour}` },
          { label: "Hours per day", value: hoursPerDay },
          { label: "Days per month", value: daysPerMonth },
          {
            label: "Complexity multiplier",
            value: complexity === "specialised" ? "+18%" : "—",
          },
        ],
      };
    }

    if (plan === "12h-day" || plan === "12h-night") {
      const perDay = Math.round(r.baseDay * mult);
      const monthly = Math.round(perDay * daysPerMonth);
      return {
        ratePerHour: 0,
        monthly,
        monthlyLow: Math.round(r.baseMonthLow * mult),
        monthlyHigh: Math.round(r.baseMonthHigh * mult),
        breakdown: [
          { label: "Per shift", value: `₹${perDay}` },
          { label: "Days per month", value: daysPerMonth },
          {
            label: "Complexity multiplier",
            value: complexity === "specialised" ? "+18%" : "—",
          },
        ],
      };
    }

    // live-in
    const monthlyLow = Math.round(r.baseMonthLow * mult);
    const monthlyHigh = Math.round(r.baseMonthHigh * mult);
    return {
      ratePerHour: 0,
      monthly: Math.round((monthlyLow + monthlyHigh) / 2),
      monthlyLow,
      monthlyHigh,
      breakdown: [
        { label: "Live-in monthly", value: `₹${monthlyLow.toLocaleString("en-IN")} – ₹${monthlyHigh.toLocaleString("en-IN")}` },
        { label: "Weekly off coverage", value: "Included" },
        { label: "Bi-weekly supervisor visit", value: "Included" },
      ],
    };
  }, [plan, hoursPerDay, daysPerMonth, complexity, locality.zone]);

  const fmt = (n: number) => n.toLocaleString("en-IN", { maximumFractionDigits: 0 });

  return (
    <div className="container max-w-6xl py-12 sm:py-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="chip">Bangalore caregiver cost calculator</span>
        <h1 className="mt-5 font-display text-4xl sm:text-5xl tracking-tight text-ink-900">
          Estimate your monthly care cost.
        </h1>
        <p className="mt-4 lead">
          Plug in your situation. We’ll show a transparent monthly estimate, the same way
          we’d quote it on the phone — no callbacks, no salesy upsell.
        </p>
      </div>

      <div className="mt-12 grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-start">
        {/* Inputs */}
        <div className="rounded-3xl bg-white ring-1 ring-ink-100 shadow-soft p-6 sm:p-8">
          <Field label="Care plan">
            <div className="grid sm:grid-cols-2 gap-2">
              {(Object.keys(PLAN_RATES) as Plan[]).map((p) => (
                <Choice
                  key={p}
                  selected={plan === p}
                  onClick={() => setPlan(p)}
                  label={PLAN_RATES[p].label}
                />
              ))}
            </div>
          </Field>

          <Field label="Service type">
            <select
              value={serviceSlug}
              onChange={(e) => setServiceSlug(e.target.value)}
              className="w-full rounded-2xl bg-cream-50 ring-1 ring-ink-100 px-4 py-3 text-[15px] outline-none focus:ring-2 focus:ring-teal-500/40"
            >
              {services.map((s) => (
                <option key={s.slug} value={s.slug}>{s.name}</option>
              ))}
            </select>
          </Field>

          <Field label="Locality (for travel-time pricing)">
            <select
              value={localitySlug}
              onChange={(e) => setLocalitySlug(e.target.value)}
              className="w-full rounded-2xl bg-cream-50 ring-1 ring-ink-100 px-4 py-3 text-[15px] outline-none focus:ring-2 focus:ring-teal-500/40"
            >
              {localities.map((l) => (
                <option key={l.slug} value={l.slug}>
                  {l.name} — {l.zone} Bangalore
                </option>
              ))}
            </select>
          </Field>

          {plan === "hourly" && (
            <Field label={`Hours per day: ${hoursPerDay}`}>
              <input
                type="range"
                min={1}
                max={11}
                step={1}
                value={hoursPerDay}
                onChange={(e) => setHoursPerDay(Number(e.target.value))}
                className="w-full accent-teal-600"
              />
              <div className="mt-1 flex justify-between text-[11px] text-ink-500">
                <span>1 hr</span>
                <span>11 hrs</span>
              </div>
            </Field>
          )}

          {plan !== "live-in" && (
            <Field label={`Days per month: ${daysPerMonth}`}>
              <input
                type="range"
                min={5}
                max={30}
                step={1}
                value={daysPerMonth}
                onChange={(e) => setDaysPerMonth(Number(e.target.value))}
                className="w-full accent-teal-600"
              />
              <div className="mt-1 flex justify-between text-[11px] text-ink-500">
                <span>5 days</span>
                <span>30 days</span>
              </div>
            </Field>
          )}

          <Field label="Care complexity">
            <div className="grid grid-cols-2 gap-2">
              <Choice
                selected={complexity === "basic"}
                onClick={() => setComplexity("basic")}
                label="Basic"
                note="General elder / patient care"
              />
              <Choice
                selected={complexity === "specialised"}
                onClick={() => setComplexity("specialised")}
                label="Specialised"
                note="Dementia, bedridden, RT-feed"
              />
            </div>
          </Field>
        </div>

        {/* Output */}
        <aside className="lg:sticky lg:top-24">
          <div className="rounded-3xl bg-gradient-to-br from-sage-50 via-cream-50 to-teal-50 ring-1 ring-sage-200 p-6 sm:p-8 shadow-soft">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
              Estimated monthly cost
            </div>
            {plan === "live-in" ? (
              <div className="mt-2 font-display text-4xl sm:text-5xl tracking-tight text-ink-900 tabular-nums">
                ₹{fmt(result.monthlyLow)} – ₹{fmt(result.monthlyHigh)}
              </div>
            ) : (
              <div className="mt-2 font-display text-4xl sm:text-5xl tracking-tight text-ink-900 tabular-nums">
                ₹{fmt(result.monthly)}
              </div>
            )}
            <div className="mt-1 text-[12px] text-ink-500">
              {plan === "live-in"
                ? "Range based on basic to specialised live-in tiers."
                : `For ${daysPerMonth} days a month in ${locality.name}.`}
            </div>

            <dl className="mt-6 divide-y divide-ink-100/80 text-sm">
              {result.breakdown.map((b) => (
                <div key={b.label} className="flex items-center justify-between py-2">
                  <dt className="text-ink-500">{b.label}</dt>
                  <dd className="font-medium text-ink-900">{b.value}</dd>
                </div>
              ))}
              <div className="flex items-center justify-between py-2">
                <dt className="text-ink-500">Service</dt>
                <dd className="font-medium text-ink-900">{service.name}</dd>
              </div>
              <div className="flex items-center justify-between py-2">
                <dt className="text-ink-500">Locality</dt>
                <dd className="font-medium text-ink-900 inline-flex items-center gap-1">
                  <PinIcon size={12} /> {locality.name}
                </dd>
              </div>
            </dl>

            <div className="mt-6 grid gap-2">
              <Link href="/book" className="btn-md btn-primary">
                Book this exact plan <ArrowRightIcon size={14} />
              </Link>
              <a href={site.whatsappHref} className="btn-md btn-secondary gap-1.5">
                <WhatsAppIcon size={14} /> Discuss with care manager
              </a>
            </div>

            <div className="mt-5 text-[11.5px] text-ink-500">
              Final quote depends on caregiver match and any equipment. Always confirmed
              in writing before placement.
            </div>
          </div>

          <div className="mt-4 rounded-2xl bg-white ring-1 ring-ink-100 p-4 text-[13px] text-ink-600 flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-sage-100 text-sage-700">
              <ShieldCheckIcon size={16} />
            </span>
            <div>
              All caregivers are police-verified, Aadhaar-checked, and trained 60+ hours.
              Replacement guarantee in 24 hours.
            </div>
          </div>
        </aside>
      </div>

      {/* Whats included strip */}
      <div className="mt-12 rounded-[28px] bg-white ring-1 ring-ink-100 shadow-soft p-7 sm:p-9">
        <h2 className="font-display text-2xl text-ink-900">
          Always included in every plan
        </h2>
        <ul className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-[14.5px] text-ink-700">
          {[
            "Verified, trained caregiver",
            "ID badge & uniform",
            "Daily WhatsApp updates",
            "On-call care manager",
            "Bi-weekly supervisor visit",
            "Replacement guarantee",
          ].map((b) => (
            <li key={b} className="flex items-center gap-2">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-sage-100 text-sage-700">
                <CheckIcon size={12} />
              </span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ── Local primitives ──────────────────────────────────── */

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <div className="mb-2 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-ink-500">
        {label}
      </div>
      {children}
    </div>
  );
}

function Choice({
  selected,
  onClick,
  label,
  note,
}: {
  selected: boolean;
  onClick: () => void;
  label: string;
  note?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "text-left rounded-2xl ring-1 p-3.5 transition w-full",
        selected
          ? "bg-teal-700 text-white ring-teal-700 shadow-glow"
          : "bg-cream-50 ring-ink-100 hover:ring-teal-300",
      ].join(" ")}
    >
      <div className="font-medium text-[14.5px]">{label}</div>
      {note && (
        <div className={`mt-0.5 text-[12px] ${selected ? "text-cream-100/80" : "text-ink-500"}`}>
          {note}
        </div>
      )}
    </button>
  );
}
