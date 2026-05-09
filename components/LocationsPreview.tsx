import Link from "next/link";
import { localities } from "@/lib/locations";
import { PinIcon } from "@/components/icons";

export function LocationsPreview() {
  return (
    <section className="py-16 sm:py-24 bg-cream-50">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <span className="section-eyebrow">
              <span className="h-px w-6 bg-teal-500" /> Across Bangalore
            </span>
            <h2 className="mt-3 section-title">
              Care that reaches your neighbourhood.
            </h2>
            <p className="mt-4 lead">
              Our caregiver network is densest where Bangalore lives — east to west,
              tech parks to traditional homes.
            </p>
          </div>
          <Link href="/locations" className="link-quiet text-sm">
            See all serviced areas →
          </Link>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {localities.map((l) => (
            <li key={l.slug}>
              <Link
                href={`/locations/${l.slug}`}
                className="group flex items-start gap-3 rounded-2xl bg-white ring-1 ring-ink-100/70 p-4 hover:shadow-soft transition"
              >
                <span className="shrink-0 grid h-9 w-9 place-items-center rounded-full bg-teal-50 text-teal-700">
                  <PinIcon size={16} />
                </span>
                <div>
                  <div className="font-medium text-ink-900 group-hover:text-teal-700 transition">
                    {l.name}
                  </div>
                  <div className="text-xs text-ink-500 mt-0.5">{l.zone} Bangalore · {l.travelTime}</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
