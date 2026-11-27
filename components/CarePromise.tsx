import Link from "next/link";
import { carePromises, includedInEveryBooking, whatIfs } from "@/lib/promise";
import { site } from "@/lib/site";
import { CheckIcon, PhoneIcon, ShieldCheckIcon } from "@/components/icons";

/** A small seal mark used wherever the promise is referenced. */
export function PromiseSeal({ size = 44 }: { size?: number }) {
  return (
    <span
      aria-hidden
      className="grid shrink-0 place-items-center rounded-full bg-marigold-500 text-ink-900 ring-4 ring-marigold-100"
      style={{ width: size, height: size }}
    >
      <ShieldCheckIcon size={Math.round(size * 0.5)} strokeWidth={2} />
    </span>
  );
}

/* ── Homepage / promise page: the six promises ───────────────────────── */

export function PromiseSection({
  showLink = true,
  headingLevel = "h2",
}: {
  showLink?: boolean;
  headingLevel?: "h1" | "h2";
}) {
  const H = headingLevel;
  return (
    <section aria-labelledby="promise-title" className="py-20 sm:py-28">
      <div className="container">
        <div className="rounded-[28px] bg-white p-6 ring-1 ring-ink-100 sm:p-10 lg:p-14">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <PromiseSeal size={56} />
              <div>
                <H id="promise-title" className="section-title">
                  Our care promise
                </H>
                <p className="mt-4 max-w-2xl text-[18px] leading-relaxed text-ink-600">
                  These commitments apply to every family and every booking, whether it’s a
                  four-hour visit or round-the-clock care. If we fall short on any of them, call us
                  and we’ll put it right.
                </p>
              </div>
            </div>
            {showLink && (
              <Link
                href="/our-promise"
                className="shrink-0 text-[16px] font-semibold text-teal-700 underline decoration-teal-200 underline-offset-4 hover:decoration-teal-700 sm:mt-3"
              >
                Read the full promise
              </Link>
            )}
          </div>

          <ul className="mt-10 grid gap-x-10 gap-y-8 border-t border-ink-100 pt-10 md:grid-cols-2 lg:grid-cols-3">
            {carePromises.map((p) => (
              <li key={p.title} className="flex gap-4">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-teal-700 text-white">
                  <CheckIcon size={16} strokeWidth={2.6} />
                </span>
                <div>
                  <h3 className="text-[18px] font-semibold leading-snug text-ink-900">{p.title}</h3>
                  <p className="mt-1.5 text-[16px] leading-relaxed text-ink-600">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ── "If something goes wrong" ───────────────────────────────────────── */

export function WhatIfSection() {
  return (
    <section aria-labelledby="whatif-title" className="bg-ink-900 py-20 text-white sm:py-28">
      <div className="container grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
        <div>
          <h2 id="whatif-title" className="font-display text-[32px] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[44px]">
            If something goes wrong, here’s what we do
          </h2>
          <p className="mt-5 max-w-md text-[18px] leading-relaxed text-ink-300">
            Care at home doesn’t always go to plan. What matters is that you know, before you
            book, exactly how we’ll respond.
          </p>
          <a
            href={site.phoneHref}
            className="mt-8 inline-flex items-center gap-2.5 text-[20px] font-semibold text-white hover:text-marigold-300"
          >
            <PhoneIcon size={20} /> {site.phone}
          </a>
          <p className="mt-1 text-[15px] text-ink-400">Care team, 24 hours a day</p>
        </div>

        <dl className="divide-y divide-white/10 border-y border-white/10">
          {whatIfs.map((w) => (
            <div key={w.situation} className="grid gap-2 py-6 sm:grid-cols-[1fr_1.2fr] sm:gap-8">
              <dt className="text-[17px] font-semibold text-white">{w.situation}</dt>
              <dd className="text-[17px] leading-relaxed text-ink-300">{w.response}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ── Included in every booking (value) ───────────────────────────────── */

export function IncludedList({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <h3 className="text-[18px] font-semibold text-ink-900">Included in every booking</h3>
      <ul className="mt-4 grid gap-2.5 text-[16px] text-ink-700 sm:grid-cols-2">
        {includedInEveryBooking.map((t) => (
          <li key={t} className="flex items-start gap-2.5">
            <CheckIcon size={18} strokeWidth={2.4} className="mt-0.5 shrink-0 text-teal-700" />
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── Compact strip for service pages and pricing ─────────────────────── */

export function PromiseStrip() {
  return (
    <section aria-label="Our care promise" className="py-10 sm:py-14">
      <div className="container">
        <div className="flex flex-col gap-6 rounded-3xl bg-marigold-100/60 p-6 ring-1 ring-marigold-300/50 sm:p-8 lg:flex-row lg:items-center lg:gap-10">
          <div className="flex items-center gap-4 lg:w-[22rem] lg:shrink-0">
            <PromiseSeal />
            <div>
              <p className="text-[19px] font-semibold text-ink-900">Covered by our care promise</p>
              <Link href="/our-promise" className="text-[15px] font-semibold text-teal-700 underline underline-offset-4">
                See every commitment
              </Link>
            </div>
          </div>
          <ul className="grid flex-1 gap-x-6 gap-y-2.5 text-[16px] text-ink-800 sm:grid-cols-2">
            {[
              "Verified and trained before placement",
              "Free replacement within 24 hours",
              "Backup cover for leave and sick days",
              "Price changes only with your agreement",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5">
                <CheckIcon size={18} strokeWidth={2.4} className="mt-0.5 shrink-0 text-teal-700" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
