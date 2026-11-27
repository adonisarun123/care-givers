"use client";

import Link from "next/link";
import { useState } from "react";
import { services } from "@/lib/services";
import { careOptions } from "@/components/home/careOptions";

/**
 * Hero care finder: pick who needs care → see that service's real prices →
 * continue into booking with the service already chosen.
 */
export function CareFinder() {
  const [slug, setSlug] = useState(careOptions[0].slug);
  const option = careOptions.find((o) => o.slug === slug)!;
  const service = services.find((s) => s.slug === slug);

  return (
    <div className="rounded-3xl bg-white p-5 shadow-lift ring-1 ring-ink-100 sm:p-7">
      <fieldset>
        <legend className="font-display text-[20px] font-semibold tracking-[-0.01em] text-ink-900">
          Who needs care?
        </legend>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
          {careOptions.map((o) => {
            const selected = o.slug === slug;
            return (
              <label
                key={o.slug}
                className={[
                  "cursor-pointer select-none rounded-xl px-3 py-2.5 text-center text-[14px] leading-snug transition-colors sm:rounded-full sm:px-3.5 sm:py-2 sm:text-left sm:text-[15px]",
                  "has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-marigold-500",
                  selected
                    ? "bg-teal-700 font-semibold text-white"
                    : "bg-stone-100 text-ink-800 hover:bg-stone-200",
                ].join(" ")}
              >
                <input
                  type="radio"
                  name="care-for"
                  value={o.slug}
                  checked={selected}
                  onChange={() => setSlug(o.slug)}
                  className="sr-only"
                />
                {o.label}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-6 border-t border-ink-100 pt-5" aria-live="polite">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-[17px] font-semibold text-ink-900">{service?.name}</h3>
          <Link
            href={`/services/${slug}`}
            className="shrink-0 text-[15px] text-teal-700 underline decoration-teal-200 underline-offset-4 hover:decoration-teal-700"
          >
            What’s included
          </Link>
        </div>
        <p className="mt-1 text-[16px] text-ink-600">{option.summary}</p>

        {service && (
          <dl className="mt-4 divide-y divide-ink-100 rounded-2xl bg-cream-50 px-4">
            {service.pricing.map((p) => (
              <div key={p.label} className="flex items-baseline justify-between gap-4 py-3">
                <dt className="text-[15px] text-ink-700">
                  {p.label}
                  {p.note && <span className="block text-[13px] text-ink-500">{p.note}</span>}
                </dt>
                <dd className="shrink-0 text-[16px] font-semibold text-ink-900">
                  {p.price}
                </dd>
              </div>
            ))}
          </dl>
        )}

        <Link href={`/book?service=${slug}`} className="btn-lg btn-primary mt-5 w-full">
          Continue booking
        </Link>
        <p className="mt-3 text-center text-[14px] text-ink-500">
          Your final price depends on care needs and area. You’ll see it before you confirm.
        </p>
      </div>
    </div>
  );
}
