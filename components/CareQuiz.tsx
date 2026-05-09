"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  ShieldCheckIcon,
  SparklesIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

/* ── Quiz schema ──────────────────────────────────────────────────── */

type Option = { value: string; label: string; note?: string };
type Question = {
  key: string;
  prompt: string;
  hint?: string;
  options: Option[];
  multi?: boolean;
};

const QUESTIONS: Question[] = [
  {
    key: "relation",
    prompt: "Who is the care for?",
    hint: "We use this only to make the recommendation feel personal.",
    options: [
      { value: "mother", label: "My mother" },
      { value: "father", label: "My father" },
      { value: "grandparent", label: "My grandparent" },
      { value: "spouse", label: "My spouse" },
      { value: "other", label: "Another relative" },
    ],
  },
  {
    key: "situation",
    prompt: "What’s the primary situation right now?",
    options: [
      { value: "elder", label: "Aging — needs daily help", note: "Bathing, meds, mobility" },
      { value: "post-op", label: "Recovering from surgery", note: "Hospital discharge ahead or recent" },
      { value: "dementia", label: "Memory loss or dementia" },
      { value: "bedridden", label: "Bedridden / fully dependent" },
      { value: "companion", label: "Mostly companionship", note: "Days feel long and lonely" },
      { value: "fall", label: "Recovering from a fall or fracture" },
      { value: "chronic", label: "A chronic condition", note: "Stroke, Parkinson's, cardiac, cancer" },
    ],
  },
  {
    key: "where",
    prompt: "Where are they currently?",
    options: [
      { value: "home-alone", label: "At home, mostly alone" },
      { value: "home-family", label: "At home with family" },
      { value: "hospital", label: "In hospital, about to be discharged" },
      { value: "incoming", label: "In another city — bringing them to Bangalore" },
    ],
  },
  {
    key: "hours",
    prompt: "How many hours of care a day?",
    hint: "Best guess is fine — we’ll fine-tune this in a real conversation.",
    options: [
      { value: "few", label: "A few hours, once or twice a day", note: "From ₹220/hour" },
      { value: "12-day", label: "Full day (12 hours)", note: "From ₹950/day" },
      { value: "12-night", label: "Just nights (12 hours)", note: "From ₹950/night" },
      { value: "24", label: "Day and night (24×7)", note: "From ₹28,000/month" },
      { value: "unsure", label: "Not sure yet" },
    ],
  },
  {
    key: "urgency",
    prompt: "How urgent is this?",
    options: [
      { value: "today", label: "Today or tomorrow" },
      { value: "week", label: "This week" },
      { value: "month", label: "This month" },
      { value: "exploring", label: "Just exploring" },
    ],
  },
  {
    key: "preferences",
    prompt: "Any caregiver preferences? (optional, pick any)",
    multi: true,
    options: [
      { value: "female", label: "Female caregiver preferred" },
      { value: "male", label: "Male caregiver preferred" },
      { value: "kannada", label: "Kannada-speaking" },
      { value: "tamil-telugu", label: "Tamil or Telugu speaking" },
      { value: "hindi", label: "Hindi-speaking" },
      { value: "english", label: "English-speaking" },
    ],
  },
];

/* ── Component ───────────────────────────────────────────────────── */

export function CareQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [done, setDone] = useState(false);
  const [contact, setContact] = useState({ name: "", email: "", sent: false });

  const total = QUESTIONS.length;
  const q = QUESTIONS[step];
  const a = answers[q?.key];

  const canNext = useMemo(() => {
    if (!q) return false;
    if (q.multi) return true; // optional
    return Array.isArray(a) ? a.length > 0 : Boolean(a);
  }, [q, a]);

  const next = () => {
    if (!canNext) return;
    if (step === total - 1) {
      setDone(true);
      if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setStep((s) => s + 1);
  };
  const back = () => setStep((s) => Math.max(0, s - 1));

  const select = (value: string) => {
    if (!q) return;
    if (q.multi) {
      const current = (answers[q.key] as string[]) || [];
      const newVal = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      setAnswers((prev) => ({ ...prev, [q.key]: newVal }));
    } else {
      setAnswers((prev) => ({ ...prev, [q.key]: value }));
    }
  };

  const restart = () => {
    setAnswers({});
    setStep(0);
    setDone(false);
    setContact({ name: "", email: "", sent: false });
  };

  const progress = ((done ? total : step) / total) * 100;

  if (done) {
    return (
      <Result answers={answers} contact={contact} setContact={setContact} restart={restart} />
    );
  }

  return (
    <div className="min-h-[100svh] bg-cream-50">
      {/* Top bar */}
      <div className="sticky top-0 z-20 bg-cream-50/85 backdrop-blur border-b border-ink-100/70">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/tools" className="text-sm text-ink-600 hover:text-ink-900 link-quiet">
            ← Tools
          </Link>
          <div className="flex-1 h-1.5 rounded-full bg-ink-100 overflow-hidden">
            <div
              className="h-full bg-teal-600 transition-[width] duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs text-ink-500 hidden sm:block tabular-nums">
            Question {step + 1} of {total}
          </span>
        </div>
      </div>

      <div className="container py-12 lg:py-16 max-w-3xl">
        <div className="text-center mb-8">
          <span className="chip">2-minute care match</span>
        </div>

        <div className="animate-fade-up" key={step}>
          <h1 className="font-display text-3xl sm:text-4xl tracking-tight text-ink-900 text-center">
            {q.prompt}
          </h1>
          {q.hint && (
            <p className="mt-3 text-[15px] text-ink-600 text-center max-w-xl mx-auto">{q.hint}</p>
          )}

          <div
            className={`mt-8 grid gap-3 ${
              q.options.length > 4 ? "sm:grid-cols-2" : "sm:grid-cols-2"
            }`}
          >
            {q.options.map((o) => {
              const selected = q.multi
                ? ((answers[q.key] as string[]) || []).includes(o.value)
                : answers[q.key] === o.value;
              return (
                <button
                  key={o.value}
                  type="button"
                  onClick={() => select(o.value)}
                  className={[
                    "text-left rounded-2xl ring-1 p-5 transition w-full",
                    selected
                      ? "bg-teal-700 text-white ring-teal-700 shadow-glow"
                      : "bg-white ring-ink-100 hover:ring-teal-300",
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-medium text-[15.5px]">{o.label}</div>
                      {o.note && (
                        <div
                          className={`mt-1 text-[12.5px] ${
                            selected ? "text-cream-100/85" : "text-ink-500"
                          }`}
                        >
                          {o.note}
                        </div>
                      )}
                    </div>
                    <span
                      className={[
                        "shrink-0 mt-0.5 grid h-5 w-5 place-items-center rounded-full",
                        selected ? "bg-white/15 text-white" : "bg-ink-100 text-ink-400",
                      ].join(" ")}
                    >
                      {selected ? <CheckIcon size={12} /> : null}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            {step > 0 && (
              <button type="button" onClick={back} className="btn-md btn-ghost">
                ← Back
              </button>
            )}
            <button
              type="button"
              onClick={next}
              disabled={!canNext}
              className="btn-lg btn-primary"
            >
              {step === total - 1 ? "See my recommendation" : "Continue"}
              <ArrowRightIcon size={16} />
            </button>
            {q.multi && (
              <button
                type="button"
                onClick={() => {
                  setAnswers((prev) => ({ ...prev, [q.key]: [] }));
                  next();
                }}
                className="btn-md btn-ghost text-ink-500"
              >
                Skip
              </button>
            )}
            <a
              href={site.whatsappHref}
              className="btn-md btn-ghost gap-1.5 ml-auto text-ink-500"
            >
              <WhatsAppIcon size={16} /> Talk to a human
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Result + recommendation engine ──────────────────────────────── */

function recommend(answers: Record<string, string | string[]>) {
  const situation = answers.situation as string | undefined;
  const hours = answers.hours as string | undefined;
  const urgency = answers.urgency as string | undefined;
  const prefs = (answers.preferences as string[]) || [];

  // Choose primary service
  let serviceSlug = "elder-care";
  let monthlyLow = 28000;
  let monthlyHigh = 32000;

  if (situation === "dementia") {
    serviceSlug = "dementia-care";
    monthlyLow = 34000;
    monthlyHigh = 38000;
  } else if (situation === "bedridden") {
    serviceSlug = "bedridden-care";
    monthlyLow = 32000;
    monthlyHigh = 38000;
  } else if (situation === "post-op" || situation === "fall") {
    serviceSlug = "post-surgery-care";
    monthlyLow = 28000;
    monthlyHigh = 35000;
  } else if (situation === "chronic") {
    serviceSlug = "patient-care";
    monthlyLow = 30000;
    monthlyHigh = 35000;
  } else if (situation === "companion") {
    serviceSlug = "elder-care";
    // Companion-only — likely fewer hours
    monthlyLow = 12000;
    monthlyHigh = 22000;
  }

  // If hours is "few" — adjust to hourly tier
  let shape: "hourly" | "12h-day" | "12h-night" | "live-in" = "live-in";
  if (hours === "few") {
    shape = "hourly";
    monthlyLow = 12000;
    monthlyHigh = 18000;
  } else if (hours === "12-day") {
    shape = "12h-day";
    monthlyLow = 26000;
    monthlyHigh = 32000;
  } else if (hours === "12-night") {
    shape = "12h-night";
    monthlyLow = 22000;
    monthlyHigh = 28000;
  } else if (hours === "24" || hours === "unsure") {
    shape = "live-in";
  }

  // Female preference takes priority on the service tier display only
  const femalePreferred = prefs.includes("female");
  if (femalePreferred && serviceSlug === "elder-care") {
    serviceSlug = "female-caregiver";
  }

  const service = services.find((s) => s.slug === serviceSlug)!;

  const startBy =
    urgency === "today"
      ? "We can typically place a caregiver within 6 hours."
      : urgency === "week"
        ? "We have caregivers available this week — most placements within 24–48 hours."
        : urgency === "month"
          ? "Plenty of time to find the right match — we’ll plan a calm onboarding."
          : "Take your time. Save this plan for when you’re ready.";

  return {
    service,
    shape,
    monthlyLow,
    monthlyHigh,
    startBy,
    femalePreferred,
    languages: prefs.filter((p) => p !== "female" && p !== "male"),
  };
}

function Result({
  answers,
  contact,
  setContact,
  restart,
}: {
  answers: Record<string, string | string[]>;
  contact: { name: string; email: string; sent: boolean };
  setContact: (v: { name: string; email: string; sent: boolean }) => void;
  restart: () => void;
}) {
  const r = recommend(answers);
  const fmtINR = (n: number) =>
    n.toLocaleString("en-IN", { maximumFractionDigits: 0 });

  const submitContact = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend wired; flag as sent locally. The user can hook this to a CRM later.
    setContact({ ...contact, sent: true });
  };

  const shapeLabel = {
    hourly: "Hourly visits",
    "12h-day": "12-hour day shift",
    "12h-night": "12-hour night shift",
    "live-in": "24×7 live-in",
  }[r.shape];

  return (
    <div className="min-h-[100svh] bg-cream-50">
      <div className="container max-w-4xl py-12 sm:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-sage-100 text-sage-800 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
            <SparklesIcon size={14} /> Your care recommendation
          </span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl tracking-tight text-ink-900">
            Based on what you told us, this fits.
          </h1>
          <p className="mt-4 text-[16.5px] text-ink-600">
            We’ve matched your situation to one of our care plans. The price is a typical
            Bangalore range — your exact quote will be confirmed in writing.
          </p>
        </div>

        {/* Recommendation card */}
        <div className="mt-10 rounded-[28px] bg-white ring-1 ring-ink-100 shadow-soft p-7 sm:p-10">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
                Recommended care
              </div>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl tracking-tight text-ink-900">
                {r.service.name}
              </h2>
              <p className="mt-3 text-[15.5px] text-ink-700 leading-relaxed">
                {r.service.short}. {r.service.duration}.
              </p>

              <ul className="mt-6 space-y-2.5">
                {r.service.whatsIncluded.slice(0, 5).map((w) => (
                  <li key={w} className="flex items-start gap-2.5 text-[14.5px] text-ink-700">
                    <span className="shrink-0 mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-sage-100 text-sage-700">
                      <CheckIcon size={12} />
                    </span>
                    {w}
                  </li>
                ))}
              </ul>

              <Link
                href={`/services/${r.service.slug}`}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800"
              >
                Read more about {r.service.name} <ArrowRightIcon size={14} />
              </Link>
            </div>

            <aside className="rounded-3xl bg-gradient-to-br from-sage-50 via-cream-50 to-teal-50 ring-1 ring-sage-200 p-6 self-start">
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-700">
                Suggested shape
              </div>
              <div className="mt-1.5 font-display text-xl text-ink-900">{shapeLabel}</div>

              <div className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-700">
                Estimated monthly
              </div>
              <div className="mt-1.5 font-display text-3xl text-ink-900 tabular-nums">
                ₹{fmtINR(r.monthlyLow)} – ₹{fmtINR(r.monthlyHigh)}
              </div>
              <div className="mt-1 text-[11px] text-ink-500">
                Final quote depends on locality and complexity.
              </div>

              <div className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-700">
                Timing
              </div>
              <div className="mt-1.5 text-[14px] text-ink-700">{r.startBy}</div>

              {(r.femalePreferred || r.languages.length > 0) && (
                <>
                  <div className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-700">
                    Match preferences
                  </div>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {r.femalePreferred && <span className="chip">Female caregiver</span>}
                    {r.languages.map((l) => (
                      <span key={l} className="chip">{l}</span>
                    ))}
                  </div>
                </>
              )}
            </aside>
          </div>

          {/* CTAs */}
          <div className="mt-8 pt-7 border-t border-ink-100 flex flex-wrap gap-3">
            <Link href="/book" className="btn-lg btn-primary">
              Book this care now <ArrowRightIcon size={16} />
            </Link>
            <a href={site.whatsappHref} className="btn-lg btn-secondary">
              <WhatsAppIcon size={16} /> Discuss with a care manager
            </a>
            <button onClick={restart} className="btn-md btn-ghost ml-auto">
              Re-take the quiz
            </button>
          </div>
        </div>

        {/* Email me this plan */}
        {!contact.sent ? (
          <form
            onSubmit={submitContact}
            className="mt-8 rounded-3xl bg-white ring-1 ring-ink-100 p-6 sm:p-8"
          >
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
              <ShieldCheckIcon size={14} /> Save your plan
            </div>
            <h3 className="mt-2 font-display text-2xl text-ink-900">
              Email me this recommendation.
            </h3>
            <p className="mt-2 text-[14.5px] text-ink-600">
              We’ll send a copy you can share with family. No marketing follow-up unless
              you ask for it.
            </p>
            <div className="mt-5 grid sm:grid-cols-2 gap-3">
              <input
                type="text"
                required
                placeholder="Your name"
                value={contact.name}
                onChange={(e) => setContact({ ...contact, name: e.target.value })}
                className="rounded-2xl bg-cream-50 ring-1 ring-ink-100 px-4 py-3 text-[15px] outline-none focus:ring-2 focus:ring-teal-500/40"
              />
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={contact.email}
                onChange={(e) => setContact({ ...contact, email: e.target.value })}
                className="rounded-2xl bg-cream-50 ring-1 ring-ink-100 px-4 py-3 text-[15px] outline-none focus:ring-2 focus:ring-teal-500/40"
              />
            </div>
            <div className="mt-4 flex items-center gap-3">
              <button type="submit" className="btn-md btn-sage">
                Email me this plan <ArrowRightIcon size={14} />
              </button>
              <p className="text-xs text-ink-500">
                You can also <a href={site.whatsappHref} className="link-quiet">WhatsApp it</a> instead.
              </p>
            </div>
          </form>
        ) : (
          <div className="mt-8 rounded-3xl bg-sage-50 ring-1 ring-sage-200 p-6 sm:p-8 text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-sage-200 text-sage-800">
              <CheckIcon size={20} />
            </div>
            <h3 className="mt-4 font-display text-2xl text-ink-900">
              Saved. Your care manager will be in touch.
            </h3>
            <p className="mt-2 text-[14.5px] text-ink-700 max-w-md mx-auto">
              We’ll WhatsApp <strong>{contact.name}</strong> at the email{" "}
              <strong>{contact.email}</strong> with this plan and a few caregiver
              shortlists tailored to your situation.
            </p>
          </div>
        )}

        {/* Trust band */}
        <div className="mt-10 grid sm:grid-cols-3 gap-3 text-center">
          <Trust icon={ShieldCheckIcon} title="Verified" body="Police, Aadhaar, training checks" />
          <Trust icon={ClockIcon} title="Fast" body="6-hour typical placement" />
          <Trust icon={SparklesIcon} title="Replacement" body="24-hour, no-questions" />
        </div>
      </div>
    </div>
  );
}

function Trust({
  icon: Icon,
  title,
  body,
}: {
  icon: (p: { size?: number }) => React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl bg-white ring-1 ring-ink-100 p-4">
      <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-sage-100 text-sage-700">
        <Icon size={18} />
      </div>
      <div className="mt-2 font-medium text-ink-900">{title}</div>
      <div className="text-[12.5px] text-ink-500">{body}</div>
    </div>
  );
}
