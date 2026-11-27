import Link from "next/link";
import { site } from "@/lib/site";
import { CheckIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { CareFinder } from "@/components/home/CareFinder";

const promises = [
  "Aadhaar and police verified",
  "Replaced within 24 hours if it isn’t the right fit",
  "Prices shown before you book",
];

export function HomeHero() {
  return (
    <section className="pb-16 pt-8 sm:pb-24 sm:pt-14">
      <div className="container grid items-start gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div className="lg:pt-6">
          <p className="inline-flex items-center gap-2.5 text-[15px] text-ink-600">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inset-0 rounded-full bg-marigold-500 motion-safe:animate-ping opacity-60" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-marigold-500" />
            </span>
            Our care team picks up 24 hours a day
          </p>

          <h1 className="mt-6 font-display text-[44px] font-semibold leading-[1.02] tracking-[-0.035em] text-ink-900 sm:text-[60px] lg:text-[72px]">
            Trusted care at home for the people who raised you.
          </h1>

          <p className="mt-6 max-w-[34rem] text-[19px] leading-[1.55] text-ink-600">
            Trained caregivers, registered nurses and physiotherapists across Bangalore, for
            elderly parents, recovery after surgery, dementia and round-the-clock care.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/book" className="btn-lg btn-primary">
              Book a caregiver
            </Link>
            <a href={site.whatsappHref} className="btn-lg btn-secondary">
              <WhatsAppIcon size={18} /> Ask on WhatsApp
            </a>
          </div>
          <p className="mt-4 text-[16px] text-ink-600">
            Or call{" "}
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-1.5 font-semibold text-ink-900 underline decoration-ink-200 underline-offset-4 hover:decoration-ink-600"
            >
              <PhoneIcon size={16} />
              {site.phone}
            </a>
          </p>

          <ul className="mt-10 grid gap-3 border-t border-ink-100 pt-6 text-[16px] text-ink-700">
            {promises.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal-50 text-teal-700">
                  <CheckIcon size={15} strokeWidth={2.2} />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <Link
            href="/our-promise"
            className="mt-4 inline-block text-[16px] font-semibold text-teal-700 underline decoration-teal-200 underline-offset-4 hover:decoration-teal-700"
          >
            Read our care promise
          </Link>
        </div>

        <CareFinder />
      </div>
    </section>
  );
}
