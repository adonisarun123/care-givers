import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/lib/services";
import { CaregiverProfiles } from "@/components/CaregiverProfiles";
import { Testimonials } from "@/components/Testimonials";
import { FinalCta } from "@/components/FinalCta";
import { ArrowRightIcon, CheckIcon, ShieldCheckIcon } from "@/components/icons";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getServiceBySlug(params.slug);
  if (!s) return {};
  return {
    title: s.seoTitle,
    description: s.seoDescription,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = getServiceBySlug(params.slug);
  if (!s) notFound();

  const others = services.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sage-50 via-cream-50 to-cream-50" />
        <div className="container pt-12 sm:pt-20 pb-10">
          <nav className="text-xs text-ink-500">
            <Link href="/" className="link-quiet">Home</Link>
            <span className="px-2">/</span>
            <Link href="/services" className="link-quiet">Services</Link>
            <span className="px-2">/</span>
            <span className="text-ink-700">{s.name}</span>
          </nav>

          <div className="mt-8 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <div>
              <span className="chip">{s.duration}</span>
              <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-[56px] leading-[1.05] tracking-[-0.02em] text-ink-900">
                {s.name}
              </h1>
              <p className="mt-5 lead max-w-xl">{s.hero}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/book" className="btn-lg btn-primary">
                  Book a {s.name.toLowerCase().includes("caregiver") ? "caregiver" : "service"}
                  <ArrowRightIcon size={16} />
                </Link>
                <Link href="#pricing" className="btn-lg btn-secondary">
                  See pricing
                </Link>
              </div>
            </div>

            <div className="rounded-3xl bg-white ring-1 ring-ink-100 shadow-soft p-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
                <ShieldCheckIcon size={14} /> Best for
              </div>
              <ul className="mt-4 space-y-3">
                {s.whoFor.map((w) => (
                  <li key={w} className="flex items-start gap-2.5 text-[15px] text-ink-700">
                    <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-sage-100 text-sage-700">
                      <CheckIcon size={12} />
                    </span>
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About / what's included */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container grid lg:grid-cols-[1fr_1.2fr] gap-12">
          <div className="lg:sticky lg:top-28 self-start">
            <span className="section-eyebrow">
              <span className="h-px w-6 bg-teal-500" /> What you get
            </span>
            <h2 className="mt-3 section-title">A care plan, not just a person.</h2>
            <p className="mt-4 lead">{s.description}</p>
          </div>

          <ul className="grid sm:grid-cols-2 gap-3">
            {s.whatsIncluded.map((w) => (
              <li
                key={w}
                className="rounded-2xl bg-cream-50 ring-1 ring-cream-200 p-5 flex items-start gap-3"
              >
                <span className="shrink-0 grid h-8 w-8 place-items-center rounded-full bg-sage-100 text-sage-700">
                  <CheckIcon size={14} />
                </span>
                <span className="text-[15px] text-ink-800">{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-14 sm:py-20">
        <div className="container max-w-4xl">
          <div className="text-center">
            <span className="section-eyebrow justify-center">
              <span className="h-px w-6 bg-teal-500" /> Transparent pricing
            </span>
            <h2 className="mt-3 section-title">{s.name} starts at:</h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {s.pricing.map((p) => (
              <article
                key={p.label}
                className="rounded-3xl bg-white ring-1 ring-ink-100 shadow-soft p-6"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
                  {p.label}
                </div>
                <div className="mt-3 font-display text-3xl text-ink-900">{p.price}</div>
                {p.note && <div className="mt-1 text-xs text-ink-500">{p.note}</div>}
              </article>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-ink-500">
            Final quote depends on care complexity and locality. Always confirmed in writing
            before placement.
          </p>

          <div className="mt-8 text-center">
            <Link href="/book" className="btn-lg btn-primary">
              Book this care <ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CaregiverProfiles />
      <Testimonials />

      {/* FAQ */}
      {s.faqs.length > 0 && (
        <section className="py-14 sm:py-20">
          <div className="container max-w-3xl">
            <h2 className="section-title text-center">Frequently asked</h2>
            <div className="mt-10 divide-y divide-ink-100">
              {s.faqs.map((f) => (
                <div key={f.q} className="py-6">
                  <h3 className="font-display text-xl text-ink-900">{f.q}</h3>
                  <p className="mt-2 text-[15px] text-ink-600 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other services */}
      <section className="py-14 sm:py-20 bg-cream-50">
        <div className="container">
          <div className="flex items-end justify-between gap-6">
            <h2 className="section-title">Other care we offer</h2>
            <Link href="/services" className="link-quiet text-sm">All services →</Link>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/services/${o.slug}`}
                  className="group block rounded-2xl bg-white ring-1 ring-ink-100 p-5 hover:shadow-soft transition"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
                    {o.duration}
                  </div>
                  <div className="mt-1.5 font-display text-lg text-ink-900">{o.name}</div>
                  <p className="mt-1 text-sm text-ink-600">{o.short}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-sm text-teal-700 opacity-0 group-hover:opacity-100 transition">
                    Read more <ArrowRightIcon size={14} />
                  </div>
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
