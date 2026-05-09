"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRightIcon,
  HeartHandIcon,
  SparklesIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { site } from "@/lib/site";

type Frequency = "never" | "rarely" | "sometimes" | "often";

const QUESTIONS: { key: string; text: string }[] = [
  {
    key: "sleep",
    text: "In the past two weeks, have you slept fewer than 6 hours most nights?",
  },
  { key: "meals", text: "Have you skipped or rushed through your own meals?" },
  {
    key: "self-meds",
    text: "Have you forgotten your own medications or doctor’s appointments?",
  },
  {
    key: "social",
    text: "Have you cancelled or avoided plans with friends or family in the past month?",
  },
  {
    key: "resentful",
    text: "Have you felt resentful — even briefly — about being the one doing the care?",
  },
  {
    key: "overwhelm",
    text: "Have you felt suddenly tearful or overwhelmed for no obvious reason?",
  },
  {
    key: "body",
    text: "Have you noticed body aches, headaches or new tiredness that won’t go?",
  },
  {
    key: "snap",
    text: "Have you found yourself snapping or being short with the person you’re caring for?",
  },
  {
    key: "work",
    text: "Has your work or other responsibilities visibly suffered?",
  },
  {
    key: "noticed",
    text: "Has someone in your life recently said you look tired or stressed?",
  },
];

const FREQ_OPTIONS: { value: Frequency; label: string; score: number }[] = [
  { value: "never", label: "Never", score: 0 },
  { value: "rarely", label: "Rarely", score: 1 },
  { value: "sometimes", label: "Sometimes", score: 2 },
  { value: "often", label: "Often", score: 3 },
];

export function CaregiverCheckup() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Frequency>>({});
  const [done, setDone] = useState(false);

  const total = QUESTIONS.length;
  const q = QUESTIONS[step];
  const a = answers[q?.key];
  const canNext = Boolean(a);

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

  const pick = (value: Frequency) => {
    setAnswers((prev) => ({ ...prev, [q.key]: value }));
  };

  const restart = () => {
    setAnswers({});
    setStep(0);
    setDone(false);
  };

  const score = useMemo(() => {
    return Object.values(answers).reduce((acc, f) => {
      const opt = FREQ_OPTIONS.find((o) => o.value === f);
      return acc + (opt?.score || 0);
    }, 0);
  }, [answers]);

  const progress = ((done ? total : step) / total) * 100;

  if (done) return <CheckupResult score={score} restart={restart} />;

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
              className="h-full bg-sage-600 transition-[width] duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs text-ink-500 hidden sm:block tabular-nums">
            {step + 1} of {total}
          </span>
        </div>
      </div>

      <div className="container max-w-3xl py-12 lg:py-16">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-sage-100 text-sage-800 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
            <HeartHandIcon size={14} /> A 60-second self-check
          </span>
        </div>

        <div key={step} className="animate-fade-up">
          <h1 className="font-display text-2xl sm:text-3xl tracking-tight text-ink-900 text-center leading-tight">
            {q.text}
          </h1>

          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {FREQ_OPTIONS.map((opt) => {
              const selected = answers[q.key] === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => pick(opt.value)}
                  className={[
                    "rounded-2xl ring-1 p-5 text-left transition w-full",
                    selected
                      ? "bg-sage-700 text-white ring-sage-700 shadow-glow"
                      : "bg-white ring-ink-100 hover:ring-sage-300",
                  ].join(" ")}
                >
                  <div className="font-medium text-[15.5px]">{opt.label}</div>
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
              className="btn-lg btn-sage"
            >
              {step === total - 1 ? "See my check-in" : "Continue"}
              <ArrowRightIcon size={16} />
            </button>
          </div>

          <p className="mt-8 text-center text-[12.5px] text-ink-500 max-w-md mx-auto">
            This is a private check-in, not a medical diagnosis. Your answers stay on
            your device.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Result ──────────────────────────────────── */

function bandFor(score: number) {
  if (score <= 7) {
    return {
      tone: "calm" as const,
      title: "You’re holding up well.",
      body:
        "From what you’ve shared, you seem to be coping with this caregiving season. The things that wear caregivers down — sleep, food, social life — are still mostly intact. Don’t take that for granted: build in a small weekly pause now, before it’s needed.",
      suggestions: [
        "Block one evening a week as caregiver-free time, on the calendar.",
        "Keep a short list of who you’d call for backup if things changed suddenly.",
        "Re-take this check-in monthly — the score moves quietly.",
      ],
      ctaLabel: "Take a thoughtful read",
      ctaHref: "/journal/dementia-care-at-home-india",
    };
  }
  if (score <= 16) {
    return {
      tone: "amber" as const,
      title: "Take a breath. Some of this is adding up.",
      body:
        "The pattern you’re describing is a familiar one for family caregivers — and it’s the stage where small interventions help most. A part-time caregiver for one or two days a week, even just for a month, can re-set sleep and energy in ways that nothing else does.",
      suggestions: [
        "Consider 2–3 hourly caregiver visits a week to take the load off mornings or evenings.",
        "Talk openly with one person — sibling, friend, doctor — about how you’re actually doing.",
        "Don’t skip your own routine doctor visits this quarter.",
      ],
      ctaLabel: "See part-time care options",
      ctaHref: "/services/elder-care",
    };
  }
  return {
    tone: "warm" as const,
    title: "It’s time to ask for help.",
    body:
      "Several of these signals together — sleep loss, body aches, social withdrawal, snapping at the person you love — usually mean a caregiver is closer to burnout than they realise. This is not a moral failing. It’s a logistics problem with a clear fix: bring in trained help so you can rest. Even a few weeks of a live-in caregiver can change everything.",
    suggestions: [
      "Consider a 12-hour shift caregiver immediately, even for two weeks, so you can sleep.",
      "Talk to a care manager today — sometimes the first conversation is the hardest part.",
      "If you’re ever in real distress, please reach out to a doctor or iCALL (9152987821) — you deserve support too.",
    ],
    ctaLabel: "Talk to a care manager today",
    ctaHref: site.whatsappHref,
    external: true,
  } as const;
}

function CheckupResult({ score, restart }: { score: number; restart: () => void }) {
  const b = bandFor(score);
  const max = QUESTIONS.length * 3;
  const pct = Math.round((score / max) * 100);

  const toneStyles = {
    calm: {
      ring: "ring-sage-200",
      bg: "from-sage-50 via-cream-50 to-teal-50",
      pill: "bg-sage-100 text-sage-800",
    },
    amber: {
      ring: "ring-peach-200",
      bg: "from-peach-50 via-cream-50 to-sage-50",
      pill: "bg-peach-100 text-ink-800",
    },
    warm: {
      ring: "ring-teal-200",
      bg: "from-teal-50 via-cream-50 to-peach-50",
      pill: "bg-teal-100 text-teal-800",
    },
  }[b.tone];

  return (
    <div className="min-h-[100svh] bg-cream-50">
      <div className="container max-w-3xl py-12 sm:py-20">
        <div className="text-center max-w-xl mx-auto">
          <span
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${toneStyles.pill}`}
          >
            <HeartHandIcon size={14} /> Your check-in
          </span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl tracking-tight text-ink-900">
            {b.title}
          </h1>
          <p className="mt-5 text-[16.5px] sm:text-[17.5px] leading-[1.7] text-ink-700">
            {b.body}
          </p>
        </div>

        {/* Score visualisation */}
        <div className={`mt-10 rounded-[28px] bg-gradient-to-br ${toneStyles.bg} ring-1 ${toneStyles.ring} p-7 sm:p-9`}>
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
                Your check-in score
              </div>
              <div className="mt-1 font-display text-3xl text-ink-900 tabular-nums">
                {score} / {max}
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs uppercase tracking-[0.16em] text-ink-500">
                Caregiver load
              </div>
              <div className="mt-1 font-display text-2xl text-ink-900 tabular-nums">
                {pct}%
              </div>
            </div>
          </div>

          <div className="mt-5 h-2 rounded-full bg-white/70 overflow-hidden">
            <div
              className={
                b.tone === "calm"
                  ? "h-full bg-sage-500"
                  : b.tone === "amber"
                    ? "h-full bg-peach-200"
                    : "h-full bg-teal-600"
              }
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        {/* Suggestions */}
        <div className="mt-8 rounded-3xl bg-white ring-1 ring-ink-100 shadow-soft p-6 sm:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            What might help
          </div>
          <ul className="mt-4 space-y-3">
            {b.suggestions.map((s, i) => (
              <li key={i} className="flex items-start gap-3 text-[15.5px] text-ink-800 leading-relaxed">
                <span className="shrink-0 mt-0.5 grid h-6 w-6 place-items-center rounded-full bg-sage-100 text-sage-800 font-display text-xs">
                  {i + 1}
                </span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {"external" in b && b.external ? (
            <a href={b.ctaHref} className="btn-lg btn-primary">
              <WhatsAppIcon size={16} /> {b.ctaLabel}
            </a>
          ) : (
            <Link href={b.ctaHref} className="btn-lg btn-primary">
              {b.ctaLabel} <ArrowRightIcon size={16} />
            </Link>
          )}
          <Link href="/tools" className="btn-lg btn-secondary">
            Other tools
          </Link>
          <button onClick={restart} className="btn-md btn-ghost ml-auto sm:ml-0">
            Re-take the check-in
          </button>
        </div>

        {/* Important note */}
        <div className="mt-10 rounded-2xl bg-cream-100 ring-1 ring-cream-200 p-5 text-[13.5px] text-ink-700 leading-relaxed">
          <div className="flex items-start gap-3">
            <span className="shrink-0 mt-0.5 grid h-7 w-7 place-items-center rounded-full bg-white text-teal-700 ring-1 ring-ink-100">
              <SparklesIcon size={14} />
            </span>
            <p>
              This is a private self-check, not a clinical diagnosis. If you’re in real
              distress — feeling depressed, hopeless, or unable to cope — please reach
              out to a doctor, or call iCALL (a free Indian counselling helpline) at{" "}
              <a href="tel:+919152987821" className="font-medium text-teal-700">
                9152987821
              </a>
              . You deserve support too.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
