import type { Metadata } from "next";
import Link from "next/link";
import { localities } from "@/lib/locations";
import { PinIcon } from "@/components/icons";
import { FinalCta } from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Caregiver coverage areas in Bangalore",
  description:
    "Care Givers serves Indiranagar, Whitefield, HSR, Koramangala, Jayanagar, Electronic City, Hebbal, Malleshwaram and more across Bangalore.",
};

export default function LocationsIndex() {
  const zones = Array.from(new Set(localities.map((l) => l.zone)));

  return (
    <>
      <section className="pt-16 sm:pt-24 pb-8">
        <div className="container max-w-3xl text-center">
          <span className="chip">Service areas across Bangalore</span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-[-0.02em] text-ink-900">
            Care that knows your neighbourhood.
          </h1>
          <p className="mt-5 lead">
            Our caregivers live and work close to you — so they reach quickly, know the
            local hospitals, and feel like a part of your area.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="container">
          {zones.map((z) => (
            <div key={z} className="mb-12">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
                {z} Bangalore
              </h2>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {localities
                  .filter((l) => l.zone === z)
                  .map((l) => (
                    <li key={l.slug}>
                      <Link
                        href={`/locations/${l.slug}`}
                        className="group block rounded-3xl bg-white ring-1 ring-ink-100 p-6 hover:shadow-soft transition"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <span className="grid h-10 w-10 place-items-center rounded-full bg-teal-50 text-teal-700">
                              <PinIcon size={18} />
                            </span>
                            <div>
                              <div className="font-display text-xl text-ink-900">
                                {l.name}
                              </div>
                              <div className="text-xs text-ink-500">
                                {l.zone} · {l.travelTime}
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="mt-4 text-sm text-ink-600 leading-relaxed">
                          {l.blurb}
                        </p>
                        <div className="mt-4 text-sm font-medium text-teal-700 opacity-0 group-hover:opacity-100 transition">
                          See local care details →
                        </div>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
