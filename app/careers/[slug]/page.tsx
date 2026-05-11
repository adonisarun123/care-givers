import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getJobBySlug, jobs } from "@/lib/jobs";
import { absoluteUrl, buildMetadata, site } from "@/lib/site";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import {
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  CloseIcon,
  HeartHandIcon,
  PhoneIcon,
  PinIcon,
  ShieldCheckIcon,
  SparklesIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { FinalCta } from "@/components/FinalCta";

export function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const j = getJobBySlug(slug);
  if (!j) return {};
  return buildMetadata({
    title: j.seoTitle,
    description: j.seoDescription,
    path: `/careers/${j.slug}`,
  });
}

export default async function JobPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const j = getJobBySlug(slug);
  if (!j) notFound();

  const others = jobs.filter((x) => x.slug !== j.slug).slice(0, 3);

  // JobPosting JSON-LD — eligible for Google Jobs
  const jobPosting = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: j.title,
    description: [j.shortDek, ...j.intro].join("\n\n"),
    datePosted: j.postedAt,
    validThrough: j.validThrough,
    employmentType: j.employmentType === "Live-in"
      ? "FULL_TIME"
      : j.employmentType.replace("-", "_").toUpperCase(),
    hiringOrganization: {
      "@type": "Organization",
      name: site.name,
      sameAs: site.url,
      logo: absoluteUrl("/og-logo.png"),
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1st Floor, Embassy Square, Indiranagar",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        postalCode: "560038",
        addressCountry: "IN",
      },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "INR",
      value: {
        "@type": "QuantitativeValue",
        minValue: extractRange(j.compensation.base).min,
        maxValue: extractRange(j.compensation.base).max,
        unitText: j.compensation.period.toUpperCase(),
      },
    },
    industry: "Home Health Care",
    occupationalCategory: "Healthcare Support",
    experienceRequirements: j.experienceLevel,
    qualifications: j.requirements.mustHave.join("; "),
    responsibilities: j.responsibilities.join("; "),
    skills: [...j.requirements.mustHave, ...j.requirements.niceToHave].join("; "),
    workHours: j.shift,
    totalJobOpenings: j.openings,
    applicantLocationRequirements: { "@type": "Country", name: "India" },
    directApply: true,
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Careers", href: "/careers" },
          { name: j.shortTitle, href: `/careers/${j.slug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPosting) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sage-50 via-cream-50 to-cream-50" />
        <div className="container pt-12 sm:pt-20 pb-10">
          <nav className="text-xs text-ink-500">
            <Link href="/" className="link-quiet">Home</Link>
            <span className="px-2">/</span>
            <Link href="/careers" className="link-quiet">Careers</Link>
            <span className="px-2">/</span>
            <span className="text-ink-700">{j.shortTitle}</span>
          </nav>

          <div className="mt-8 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
            <div>
              <div className="flex flex-wrap gap-2">
                <span className="chip">{j.category}</span>
                <span className="chip-cream">{j.experienceLevel}</span>
                <span className="chip-cream">{j.employmentType}</span>
              </div>
              <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-[56px] leading-[1.05] tracking-[-0.02em] text-ink-900">
                {j.title}
              </h1>
              <p className="mt-5 text-[18px] text-ink-700 leading-relaxed max-w-xl">
                {j.tagline}
              </p>
              <p className="mt-2 text-[15px] text-ink-500 max-w-xl">{j.shortDek}</p>

              <div className="mt-7 flex flex-wrap gap-3">
                <ApplyButton job={j} variant="primary" />
                <a href="#full-role" className="btn-lg btn-secondary">
                  Read the full role
                </a>
              </div>
            </div>

            {/* Sidebar facts */}
            <aside className="rounded-3xl bg-white ring-1 ring-ink-100 shadow-soft p-6">
              <Fact icon={PinIcon} label="Location" value={j.location} />
              <Fact icon={ClockIcon} label="Shift" value={j.shift} />
              <Fact
                icon={SparklesIcon}
                label="Compensation"
                value={`₹${j.compensation.base.replace(/\s/g, "")} / ${j.compensation.period}`}
              />
              <Fact icon={ShieldCheckIcon} label="Openings" value={`${j.openings} positions`} />
              <Fact icon={HeartHandIcon} label="Team" value={j.team} />

              <div className="mt-5 pt-5 border-t border-ink-100">
                <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-500">
                  Posted
                </div>
                <div className="mt-1 text-[14px] text-ink-800">
                  {formatDate(j.postedAt)} · valid until {formatDate(j.validThrough)}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* About the role */}
      <section id="full-role" className="py-14 sm:py-20 bg-white">
        <div className="container max-w-3xl">
          <span className="section-eyebrow">
            <span className="h-px w-6 bg-teal-500" /> About this role
          </span>
          <div className="mt-4 space-y-5 text-[17px] leading-[1.75] text-ink-800">
            {j.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="py-14 sm:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16">
            <div className="lg:sticky lg:top-28 self-start">
              <span className="section-eyebrow">
                <span className="h-px w-6 bg-teal-500" /> What you'll do
              </span>
              <h2 className="mt-3 section-title">
                The work, day-to-day.
              </h2>
              <p className="mt-4 lead">
                Real responsibilities — not vague aspirations. If something sounds like
                it isn't your strength, tell us in the application. We'll work with it.
              </p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {j.responsibilities.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-3 rounded-2xl bg-white ring-1 ring-ink-100 p-4 shadow-soft"
                >
                  <span className="shrink-0 mt-0.5 grid h-6 w-6 place-items-center rounded-full bg-sage-100 text-sage-700">
                    <CheckIcon size={13} />
                  </span>
                  <span className="text-[14.5px] text-ink-800 leading-relaxed">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Day in the life */}
      <section className="py-14 sm:py-20 bg-cream-50">
        <div className="container max-w-5xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="section-eyebrow justify-center">
              <span className="h-px w-6 bg-teal-500" /> A day in the life
            </span>
            <h2 className="mt-3 section-title">What a day looks like.</h2>
            <p className="mt-4 lead">
              The shape of a real day in this role. Routines flex around the situation —
              but this is the rhythm we keep returning to.
            </p>
          </div>

          <ol className="mt-12 relative border-l-2 border-sage-200 pl-6 sm:pl-10 ml-2 space-y-6">
            {j.dayInLife.map((it, i) => (
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
                  <div className="text-[15.5px] text-ink-800 leading-relaxed">
                    {it.activity}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <span className="section-eyebrow">
                <span className="h-px w-6 bg-teal-500" /> What we look for
              </span>
              <h2 className="mt-3 section-title">Must-haves.</h2>
              <ul className="mt-7 space-y-3">
                {j.requirements.mustHave.map((m) => (
                  <li key={m} className="flex items-start gap-3 text-[15.5px] text-ink-800">
                    <span className="shrink-0 mt-0.5 grid h-6 w-6 place-items-center rounded-full bg-sage-100 text-sage-700">
                      <CheckIcon size={13} />
                    </span>
                    {m}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-sage-700">
                <span className="h-px w-6 bg-sage-500" /> Nice to have
              </span>
              <h2 className="mt-3 section-title">Bonus skills.</h2>
              <ul className="mt-7 space-y-3">
                {j.requirements.niceToHave.map((m) => (
                  <li key={m} className="flex items-start gap-3 text-[15.5px] text-ink-700">
                    <span className="shrink-0 mt-0.5 grid h-6 w-6 place-items-center rounded-full bg-cream-100 text-ink-500">
                      <CheckIcon size={13} />
                    </span>
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What we provide */}
      <section className="py-14 sm:py-20 bg-cream-50">
        <div className="container">
          <div className="max-w-2xl mb-10">
            <span className="section-eyebrow">
              <span className="h-px w-6 bg-teal-500" /> What we provide
            </span>
            <h2 className="mt-3 section-title">
              We invest in you before you invest in us.
            </h2>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {j.whatWeProvide.map((w) => (
              <li
                key={w}
                className="rounded-3xl bg-white ring-1 ring-ink-100 p-5 flex items-start gap-3"
              >
                <span className="shrink-0 grid h-9 w-9 place-items-center rounded-full bg-sage-100 text-sage-700">
                  <SparklesIcon size={16} />
                </span>
                <span className="text-[14.5px] text-ink-800 leading-relaxed">{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Compensation */}
      <section className="py-14 sm:py-20">
        <div className="container max-w-4xl">
          <div className="rounded-[28px] bg-ink-900 text-cream-50 p-7 sm:p-10 shadow-soft">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-300">
              Compensation & benefits
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-display text-4xl sm:text-5xl tracking-tight">
                ₹{j.compensation.base}
              </span>
              <span className="text-cream-100/70">/ {j.compensation.period}</span>
            </div>

            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {j.compensation.benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 rounded-2xl bg-white/[0.04] ring-1 ring-white/10 p-4"
                >
                  <span className="shrink-0 mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-sage-400 text-ink-900">
                    <CheckIcon size={12} />
                  </span>
                  <span className="text-[14.5px] text-cream-100">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-7 border-t border-white/10">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-sage-300">
                Pay growth
              </div>
              <p className="mt-2 text-[15.5px] text-cream-100/90 leading-relaxed">
                {j.compensation.growth}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career path */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="section-eyebrow justify-center">
              <span className="h-px w-6 bg-teal-500" /> Where this can lead
            </span>
            <h2 className="mt-3 section-title">Your next 3 years.</h2>
            <p className="mt-4 lead">
              A real growth path. We promote from within first — most senior roles at
              Care Givers are filled by people who started in a different role.
            </p>
          </div>

          <ol className="mt-12 grid gap-4 md:grid-cols-3">
            {j.careerPath.map((s, i) => (
              <li
                key={s.step}
                className="rounded-3xl bg-cream-50 ring-1 ring-cream-200 p-6 relative"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
                  {s.timeline}
                </div>
                <div className="mt-2 font-display text-2xl text-ink-900">
                  {s.step}
                </div>
                <p className="mt-2 text-[14px] text-ink-600 leading-relaxed">
                  {s.detail}
                </p>
                {i < j.careerPath.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2.5 h-px w-5 bg-ink-200" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 sm:py-20 bg-cream-50">
        <div className="container max-w-3xl">
          <div className="text-center">
            <span className="section-eyebrow justify-center">
              <span className="h-px w-6 bg-teal-500" /> Frequently asked
            </span>
            <h2 className="mt-3 section-title">What candidates ask us.</h2>
          </div>

          <div className="mt-10 divide-y divide-ink-100">
            {j.faqs.map((f) => (
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

      {/* Apply CTA */}
      <section className="py-14 sm:py-20">
        <div className="container max-w-3xl">
          <div className="rounded-[28px] bg-gradient-to-br from-sage-100 via-cream-50 to-teal-50 ring-1 ring-sage-200 p-8 sm:p-12 text-center">
            <span className="chip">Ready when you are</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl tracking-tight text-ink-900">
              Apply for {j.shortTitle}.
            </h2>
            <p className="mt-3 text-[15.5px] text-ink-700 max-w-xl mx-auto">
              We aim to give every applicant a clear answer within 7 days. No fees, no
              document deposits, no ghosting.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <ApplyButton job={j} variant="primary" />
              <a href={site.phoneHref} className="btn-lg btn-secondary">
                <PhoneIcon size={16} /> Call {site.phone}
              </a>
            </div>
            <p className="mt-5 text-[12.5px] text-ink-500">
              We never charge applicants. Genuine offers come on company email only.
            </p>
          </div>
        </div>
      </section>

      {/* Other roles */}
      <section className="py-14 sm:py-20 bg-cream-50">
        <div className="container">
          <div className="flex items-end justify-between gap-4 mb-6">
            <h2 className="section-title">Other open roles</h2>
            <Link href="/careers" className="link-quiet text-sm">All roles →</Link>
          </div>
          <ul className="grid gap-4 md:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/careers/${o.slug}`}
                  className="group block rounded-2xl bg-white ring-1 ring-ink-100 p-5 hover:shadow-soft transition"
                >
                  <div className="text-[11px] uppercase tracking-[0.14em] text-teal-700 font-semibold">
                    {o.category}
                  </div>
                  <div className="mt-1.5 font-display text-lg text-ink-900">{o.title}</div>
                  <p className="mt-1 text-sm text-ink-600 line-clamp-2">{o.shortDek}</p>
                  <div className="mt-3 text-xs text-ink-500">
                    {o.openings} open · ₹{o.compensation.base.replace(/\s/g, "")} / {o.compensation.period}
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

/* ─── helpers ─── */

function ApplyButton({
  job,
  variant,
}: {
  job: { applyMode: "whatsapp" | "email"; title: string };
  variant: "primary" | "secondary";
}) {
  const cls = variant === "primary" ? "btn-lg btn-primary" : "btn-lg btn-secondary";
  const emailHost = (site.email || "@caregivers.example").split("@")[1] || "caregivers.example";

  if (job.applyMode === "whatsapp") {
    const text = encodeURIComponent(
      `Hi, I'm applying for the "${job.title}" role at Care Givers. Please share next steps.`,
    );
    return (
      <a
        href={`https://wa.me/919845612345?text=${text}`}
        className={cls}
        rel="noopener noreferrer"
        target="_blank"
      >
        <WhatsAppIcon size={16} /> Apply on WhatsApp
      </a>
    );
  }
  return (
    <a
      href={`mailto:careers@${emailHost}?subject=Application: ${encodeURIComponent(job.title)}`}
      className={cls}
    >
      Apply by email <ArrowRightIcon size={16} />
    </a>
  );
}

function Fact({
  icon: Icon,
  label,
  value,
}: {
  icon: (p: { size?: number }) => React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 py-2.5">
      <span className="shrink-0 mt-0.5 grid h-8 w-8 place-items-center rounded-full bg-sage-100 text-sage-700">
        <Icon size={14} />
      </span>
      <div className="min-w-0">
        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-500">
          {label}
        </div>
        <div className="mt-0.5 text-[14px] text-ink-800 leading-relaxed">{value}</div>
      </div>
    </div>
  );
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

function extractRange(base: string) {
  const numbers = (base.match(/[\d,]+/g) || []).map((n) => Number(n.replace(/,/g, "")));
  return {
    min: numbers[0] || 0,
    max: numbers[1] || numbers[0] || 0,
  };
}
