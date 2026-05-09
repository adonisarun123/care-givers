import Link from "next/link";
import { ArrowRightIcon, CheckIcon, PlayIcon, ShieldCheckIcon, StarIcon } from "@/components/icons";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft warm gradient backdrop */}
      <div className="absolute inset-0 ring-soft -z-10" />
      <div className="absolute inset-x-0 top-0 h-[640px] -z-10 bg-gradient-to-b from-sage-50 via-cream-50 to-cream-50" />

      <div className="container pt-12 sm:pt-16 lg:pt-20 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Left — copy */}
          <div className="animate-fade-up">
            <span className="chip">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage-400 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sage-500" />
              </span>
              Caregivers available across Bangalore today
            </span>

            <h1 className="mt-5 font-display text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.04] tracking-[-0.02em] text-ink-900">
              Gentle, trusted care
              <br />
              <span className="text-teal-700">for the people you love.</span>
            </h1>

            <p className="mt-6 lead max-w-xl">
              Verified caregivers and patient attendants for elderly parents, post-surgery
              recovery, dementia, bedridden and 24×7 needs — placed at your home in
              Bangalore, often within 6 hours.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/book" className="btn-lg btn-primary">
                Book a caregiver now
                <ArrowRightIcon size={18} />
              </Link>
              <a href={site.whatsappHref} className="btn-lg btn-secondary">
                <PlayIcon size={16} />
                Talk to care support
              </a>
            </div>

            {/* trust micro-row */}
            <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13.5px] text-ink-600">
              {[
                "Police-verified",
                "Trained & supervised",
                "Replacement guarantee",
                "Transparent pricing",
              ].map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5">
                  <span className="grid place-items-center h-5 w-5 rounded-full bg-sage-100 text-sage-700">
                    <CheckIcon size={13} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — image stack */}
          <div className="relative animate-fade-up [animation-delay:120ms]">
            <div className="relative aspect-[4/5] sm:aspect-[5/6] rounded-[2.25rem] overflow-hidden bg-sage-100 shadow-soft">
              {/* Hero image — soft, human, Indian family/caregiver */}
              {/* Using Unsplash with care/elder themes */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1581579438747-104c53e7d96f?auto=format&fit=crop&w=900&q=80"
                alt="A caregiver gently helps an elderly woman at home"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/15 via-transparent to-transparent" />
            </div>

            {/* Floating stat card — top-left */}
            <div className="hidden sm:flex absolute -left-4 sm:-left-8 top-8 sm:top-12 items-center gap-3 rounded-2xl bg-white/95 backdrop-blur ring-1 ring-ink-100 shadow-soft px-4 py-3">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-teal-50 text-teal-700">
                <ShieldCheckIcon size={18} />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold text-ink-900">100% verified</div>
                <div className="text-xs text-ink-500">Police, ID & training checks</div>
              </div>
            </div>

            {/* Rating card — bottom-right */}
            <div className="absolute right-2 sm:-right-4 bottom-6 sm:bottom-10 rounded-2xl bg-white/95 backdrop-blur ring-1 ring-ink-100 shadow-soft px-4 py-3">
              <div className="flex items-center gap-1 text-amber-500">
                {[0, 1, 2, 3, 4].map((i) => (
                  <StarIcon key={i} size={14} className="fill-current" />
                ))}
                <span className="ml-1 text-xs font-semibold text-ink-900">4.9</span>
              </div>
              <div className="mt-0.5 text-[11.5px] text-ink-500">
                from 1,200+ Bangalore families
              </div>
            </div>

            {/* tiny accent dot */}
            <div className="absolute -top-3 -right-2 h-12 w-12 rounded-full bg-peach-100 -z-10" />
            <div className="absolute -bottom-4 -left-3 h-16 w-16 rounded-full bg-sage-100 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
