import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLocalityBySlug, localities } from "@/lib/locations";
import { services } from "@/lib/services";
import { CheckIcon, PinIcon, ShieldCheckIcon } from "@/components/icons";
import { FinalCta } from "@/components/FinalCta";
import { BreadcrumbJsonLd, LocalityJsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/site";

export function generateStaticParams() {
  return localities.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const l = getLocalityBySlug(params.slug);
  if (!l) return {};
  return buildMetadata({
    title: `Home Caregivers in ${l.name}, Bangalore`,
    description: `Verified caregivers and patient attendants for ${l.name}, Bangalore. Elder care, post-surgery, dementia, live-in and night shifts. ${l.travelTime}.`,
    path: `/locations/${l.slug}`,
  });
}

export default function LocalityPage({ params }: { params: { slug: string } }) {
  const l = getLocalityBySlug(params.slug);
  if (!l) notFound();

  return (
    <>
      <LocalityJsonLd slug={l.slug} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
          { name: l.name, href: `/locations/${l.slug}` },
        ]}
      />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sage-50 via-cream-50 to-cream-50" />
        <div className="container pt-12 sm:pt-20 pb-10">
          <nav className="text-xs text-ink-500">
            <Link href="/" className="link-quiet">Home</Link>
            <span className="px-2">/</span>
            <Link href="/locations" className="link-quiet">Locations</Link>
            <span className="px-2">/</span>
            <span className="text-ink-700">{l.name}</span>
          </nav>

          <div className="mt-8 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <span className="chip">
                <PinIcon size={12} /> {l.zone} Bangalore · {l.pincode}
              </span>
              <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-[56px] leading-[1.05] tracking-[-0.02em] text-ink-900">
                Home caregivers in {l.name}.
              </h1>
              <p className="mt-5 lead max-w-xl">{l.longCopy}</p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/book" className="btn-lg btn-primary">
                  Book a caregiver in {l.name}
                </Link>
                <Link href="/pricing" className="btn-lg btn-secondary">
                  See pricing
                </Link>
              </div>
            </div>

            <aside className="rounded-3xl bg-white ring-1 ring-ink-100 shadow-soft p-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
                <ShieldCheckIcon size={14} /> Local coverage
              </div>
              <dl className="mt-4 divide-y divide-ink-100 text-sm">
                <Row label="Avg. response time" value={l.travelTime} />
                <Row label="Caregiver network" value="40+ trained attendants" />
                <Row label="Supervisor visits" value="Bi-weekly, in person" />
              </dl>

              <div className="mt-5 pt-5 border-t border-ink-100">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">
                  Nearby hospitals we work with
                </div>
                <ul className="mt-3 space-y-2">
                  {l.hospitals.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-ink-700">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-sage-100 text-sage-700">
                        <CheckIcon size={12} />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Services available in this locality */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container">
          <div className="max-w-2xl">
            <span className="section-eyebrow">
              <span className="h-px w-6 bg-teal-500" /> All services available in {l.name}
            </span>
            <h2 className="mt-3 section-title">Care that fits any home in {l.name}.</h2>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group block rounded-2xl bg-cream-50 ring-1 ring-cream-200 p-5 hover:bg-white hover:ring-ink-100 hover:shadow-soft transition"
                >
                  <div className="font-display text-lg text-ink-900">{s.name}</div>
                  <p className="mt-1 text-sm text-ink-600">{s.short}</p>
                  <div className="mt-3 text-xs text-teal-700 opacity-0 group-hover:opacity-100 transition">
                    Learn more →
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Other localities */}
      <section className="py-14 sm:py-20">
        <div className="container">
          <h2 className="section-title">Other areas we cover</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {localities
              .filter((x) => x.slug !== l.slug)
              .map((x) => (
                <li key={x.slug}>
                  <Link
                    href={`/locations/${x.slug}`}
                    className="rounded-full bg-white px-4 py-2 text-sm text-ink-700 ring-1 ring-ink-100 hover:ring-teal-300 transition"
                  >
                    {x.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </section>

      <FinalCta />
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-2.5">
      <dt className="text-ink-500">{label}</dt>
      <dd className="font-medium text-ink-900">{value}</dd>
    </div>
  );
}
