import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { getServiceBySlug, services } from "@/lib/services";
import { CaregiverProfiles } from "@/components/CaregiverProfiles";
import { Testimonials } from "@/components/Testimonials";
import { FinalCta } from "@/components/FinalCta";
import {
  ArrowRightIcon,
  CheckIcon,
  CloseIcon,
  ShieldCheckIcon,
  SparklesIcon,
  StarIcon,
  HeartHandIcon,
  ClockIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { buildMetadata, site } from "@/lib/site";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";
import {
  RelatedJournal,
  RelatedProducts,
  RelatedTools,
} from "@/components/RelatedContent";
import {
  getRelatedPostsForService,
  getToolsForService,
} from "@/lib/related";
import { getProductsForService } from "@/lib/shop";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getServiceBySlug(slug);
  if (!s) return {};
  return buildMetadata({
    title: s.seoTitle,
    description: s.seoDescription,
    path: `/services/${s.slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getServiceBySlug(slug);
  if (!s) notFound();

  const others = services.filter((x) => x.slug !== s.slug).slice(0, 3);
  const relatedPosts = getRelatedPostsForService(s.slug);
  const relatedTools = getToolsForService(s.slug);
  const relatedProducts = getProductsForService(s.slug, 4);

  return (
    <>
      <ServiceJsonLd
        name={s.name}
        description={s.seoDescription}
        slug={s.slug}
        pricing={s.pricing}
        faqs={s.faqs}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: s.name, href: `/services/${s.slug}` },
        ]}
      />
      {/* ───── Hero ───── */}
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

          <div className="mt-8 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <span className="chip">{s.duration}</span>
              <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-[56px] leading-[1.05] tracking-[-0.02em] text-ink-900">
                {s.name}
              </h1>
              <p className="mt-5 lead max-w-xl">{s.hero}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/book" className="btn-lg btn-primary">
                  Book this care <ArrowRightIcon size={16} />
                </Link>
                <a href={site.whatsappHref} className="btn-lg btn-secondary">
                  <WhatsAppIcon size={16} /> Talk to a care manager
                </a>
              </div>

              {/* Quick facts strip */}
              <ul className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <Fact icon={ClockIcon} label="Starts in" value="6 hrs typical" />
                <Fact icon={ShieldCheckIcon} label="Verification" value="Police + Aadhaar" />
                <Fact icon={SparklesIcon} label="Replacement" value="24-hour, free" />
                <Fact icon={StarIcon} label="Family rating" value="4.9 / 5" />
              </ul>
            </div>

            <aside className="rounded-3xl bg-white ring-1 ring-ink-100 shadow-soft p-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
                <HeartHandIcon size={14} /> Best for
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
            </aside>
          </div>
        </div>
      </section>

      {/* ───── Intro paragraphs ───── */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container max-w-3xl">
          <span className="section-eyebrow">
            <span className="h-px w-6 bg-teal-500" /> Why this care exists
          </span>
          <div className="mt-4 space-y-5 text-[17px] leading-[1.7] text-ink-700">
            {s.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Conditions we support ───── */}
      <section className="py-14 sm:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16">
            <div className="lg:sticky lg:top-28 self-start">
              <span className="section-eyebrow">
                <span className="h-px w-6 bg-teal-500" /> Conditions we support
              </span>
              <h2 className="mt-3 section-title">Built for the cases families ask us about most.</h2>
              <p className="mt-4 lead">
                If your situation looks like one of these — or sits between two of them —
                we can almost always help. When we can’t, we’ll tell you upfront and
                point you to who can.
              </p>
            </div>

            <ul className="grid sm:grid-cols-2 gap-3">
              {s.conditions.map((c) => (
                <li
                  key={c.title}
                  className="rounded-3xl bg-white ring-1 ring-ink-100 p-5 shadow-soft"
                >
                  <div className="flex items-start gap-3">
                    <span className="shrink-0 mt-0.5 grid h-7 w-7 place-items-center rounded-full bg-teal-50 text-teal-700">
                      <CheckIcon size={14} />
                    </span>
                    <div>
                      <h3 className="font-display text-[17px] text-ink-900">{c.title}</h3>
                      <p className="mt-1 text-[14px] text-ink-600 leading-relaxed">{c.detail}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───── What's included + What's not ───── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <span className="section-eyebrow">
                <span className="h-px w-6 bg-teal-500" /> What you get
              </span>
              <h2 className="mt-3 section-title">A care plan, not just a person.</h2>
              <p className="mt-4 lead">{s.description}</p>

              <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                {s.whatsIncluded.map((w) => (
                  <li
                    key={w}
                    className="flex items-start gap-2.5 rounded-2xl bg-cream-50 ring-1 ring-cream-200 p-3.5"
                  >
                    <span className="shrink-0 mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-sage-200 text-sage-800">
                      <CheckIcon size={12} />
                    </span>
                    <span className="text-[14.5px] text-ink-800">{w}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="rounded-3xl bg-ink-900 text-cream-50 p-7 sm:p-9 shadow-soft">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-sage-300">
                <span className="h-px w-6 bg-sage-300" /> What we don’t cover
              </span>
              <h3 className="mt-3 font-display text-2xl text-cream-50">
                Honest about the edges.
              </h3>
              <p className="mt-3 text-[15px] text-cream-100/80">
                So you can plan the rest of the household around the care plan.
              </p>
              <ul className="mt-6 space-y-3">
                {s.notIncluded.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-[14.5px] text-cream-100/90">
                    <span className="shrink-0 mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-white/10 text-cream-100">
                      <CloseIcon size={12} />
                    </span>
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* ───── Care timeline ───── */}
      <section className="py-14 sm:py-20 bg-cream-50">
        <div className="container max-w-5xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="section-eyebrow justify-center">
              <span className="h-px w-6 bg-teal-500" /> {s.careTimeline.title}
            </span>
            <h2 className="mt-3 section-title">What care actually looks like.</h2>
            <p className="mt-4 lead">
              The shape of a real day, not a brochure version. Routines flex around your
              loved one — but this is the rhythm we keep returning to.
            </p>
          </div>

          <ol className="mt-12 relative border-l-2 border-sage-200 pl-6 sm:pl-10 ml-2 space-y-7">
            {s.careTimeline.items.map((it, i) => (
              <li key={i} className="relative">
                <span
                  className="absolute -left-[34px] sm:-left-[46px] top-1.5 grid h-6 w-6 place-items-center rounded-full bg-teal-600 text-white ring-4 ring-cream-50"
                  aria-hidden
                >
                  <span className="block h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                <div className="grid sm:grid-cols-[140px_1fr] gap-2 sm:gap-6 items-baseline">
                  <div className="text-sm font-semibold uppercase tracking-[0.12em] text-teal-700">
                    {it.time}
                  </div>
                  <div>
                    <div className="font-display text-[18px] text-ink-900">{it.label}</div>
                    {it.detail && (
                      <p className="mt-1.5 text-[14.5px] text-ink-600 leading-relaxed">{it.detail}</p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───── Caregiver profile + matching ───── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div className="rounded-[28px] bg-gradient-to-br from-sage-50 via-cream-50 to-teal-50 ring-1 ring-sage-200 p-7 sm:p-9">
              <span className="section-eyebrow">
                <span className="h-px w-6 bg-teal-500" /> The caregiver assigned to you
              </span>
              <h3 className="mt-3 font-display text-2xl text-ink-900">
                Trained for {s.name.toLowerCase()}, supervised through the engagement.
              </h3>

              <dl className="mt-6 space-y-5">
                <Detail label="Training" value={s.caregiverProfile.trainingHours} />
                <Detail label="Focus areas" value={s.caregiverProfile.focus} />
                <Detail label="Supervision" value={s.caregiverProfile.supervision} />
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">
                    Verifications
                  </dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {s.caregiverProfile.certifications.map((c) => (
                      <span key={c} className="chip">{c}</span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>

            <div>
              <span className="section-eyebrow">
                <span className="h-px w-6 bg-teal-500" /> How we match you
              </span>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl text-ink-900">
                The match is the work.
              </h3>
              <p className="mt-4 text-[16px] text-ink-700 leading-[1.7]">{s.matchingNotes}</p>

              <div className="mt-7 grid sm:grid-cols-3 gap-3 text-center">
                <Step n="01" label="You tell us your situation" />
                <Step n="02" label="We shortlist 1–3 caregivers" />
                <Step n="03" label="You meet & approve over WhatsApp" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Family story ───── */}
      <section className="py-14 sm:py-20">
        <div className="container max-w-3xl">
          <figure className="rounded-[32px] bg-white ring-1 ring-ink-100 shadow-soft p-8 sm:p-12">
            <div className="flex items-center gap-1 text-amber-500">
              {[0, 1, 2, 3, 4].map((i) => (
                <StarIcon key={i} size={16} className="fill-current" />
              ))}
            </div>
            <blockquote className="mt-5 font-display text-2xl sm:text-3xl leading-[1.3] tracking-tight text-ink-900">
              “{s.familyStory.quote}”
            </blockquote>
            <figcaption className="mt-7 pt-6 border-t border-ink-100 flex items-center justify-between text-sm">
              <div>
                <div className="font-semibold text-ink-900">{s.familyStory.name}</div>
                <div className="text-ink-500">{s.familyStory.meta}</div>
              </div>
              <span className="text-xs uppercase tracking-[0.16em] text-teal-700">
                A {s.name} family
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ───── Pricing ───── */}
      <section id="pricing" className="py-14 sm:py-20 bg-cream-50">
        <div className="container max-w-5xl">
          <div className="text-center">
            <span className="section-eyebrow justify-center">
              <span className="h-px w-6 bg-teal-500" /> Transparent pricing
            </span>
            <h2 className="mt-3 section-title">{s.name} starts at:</h2>
            <p className="mt-4 lead max-w-2xl mx-auto">
              Pricing shown is starting from. The exact quote depends on care complexity,
              shift timing and locality — confirmed in writing before placement.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

          <div className="mt-10 text-center">
            <Link href="/book" className="btn-lg btn-primary">
              Book this care <ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CaregiverProfiles />

      {/* ───── Equipment that supports this care ───── */}
      <RelatedProducts
        products={relatedProducts}
        heading={`Equipment families use alongside ${s.name}`}
        eyebrow="From the Care Givers shop"
        blurb="The hospital beds, mobility aids and monitoring devices our caregivers most often recommend for this kind of care. Buy outright or rent monthly."
      />

      {/* ───── Related tools ───── */}
      <RelatedTools
        tools={relatedTools}
        heading="Tools to help you decide on this care"
        eyebrow="Use these before you book"
      />

      {/* ───── Related journal posts ───── */}
      <RelatedJournal
        posts={relatedPosts}
        heading={`Reading that goes with ${s.name}`}
        eyebrow="From The Care Journal"
        blurb="The articles families read most often when they're considering this service."
      />

      <Testimonials />

      {/* ───── FAQ ───── */}
      {s.faqs.length > 0 && (
        <section className="py-14 sm:py-20 bg-white">
          <div className="container max-w-3xl">
            <div className="text-center">
              <span className="section-eyebrow justify-center">
                <span className="h-px w-6 bg-teal-500" /> Frequently asked
              </span>
              <h2 className="mt-3 section-title">The things families want to know.</h2>
            </div>

            <div className="mt-10 divide-y divide-ink-100">
              {s.faqs.map((f) => (
                <details
                  key={f.q}
                  className="group py-5 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer items-start justify-between gap-6">
                    <span className="font-display text-[18px] sm:text-xl text-ink-900">
                      {f.q}
                    </span>
                    <span className="mt-1 grid h-7 w-7 place-items-center rounded-full bg-ink-100 text-ink-700 transition group-open:rotate-45 group-open:bg-teal-700 group-open:text-white">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" /><path d="M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-[15px] text-ink-600 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───── Other services ───── */}
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

/* ─── small inline pieces ─── */

function Fact({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  value: string;
}) {
  return (
    <li className="rounded-2xl bg-white ring-1 ring-ink-100 p-3.5">
      <div className="flex items-center gap-2 text-teal-700">
        <Icon size={14} />
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em]">{label}</span>
      </div>
      <div className="mt-1 font-display text-[16px] text-ink-900">{value}</div>
    </li>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">{label}</dt>
      <dd className="mt-1.5 text-[15px] text-ink-800 leading-relaxed">{value}</dd>
    </div>
  );
}

function Step({ n, label }: { n: string; label: string }) {
  return (
    <div className="rounded-2xl bg-cream-50 ring-1 ring-cream-200 p-4">
      <div className="font-display text-2xl text-teal-700">{n}</div>
      <div className="mt-1 text-[13.5px] text-ink-700">{label}</div>
    </div>
  );
}
