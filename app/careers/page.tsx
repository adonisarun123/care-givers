import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, site } from "@/lib/site";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import {
  categoryDescriptions,
  jobCategories,
  jobs,
} from "@/lib/jobs";
import {
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  HeartHandIcon,
  PinIcon,
  ShieldCheckIcon,
  SparklesIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { FinalCta } from "@/components/FinalCta";

export const metadata: Metadata = buildMetadata({
  title: "Careers at Care Givers — Caregiver, Nursing & Operations Jobs in Bangalore",
  description:
    "Open roles at Care Givers Bangalore — elder care attendants, patient care, live-in caregivers, dementia specialists, home nurses, supervisors, ops and corporate.",
  path: "/careers",
});

const totalOpenings = jobs.reduce((acc, j) => acc + j.openings, 0);

const whyWorkHere = [
  {
    icon: ShieldCheckIcon,
    title: "Paid training, every time",
    body: "60 to 120 hours of paid training before your first placement. Refresher sessions every quarter, paid.",
  },
  {
    icon: HeartHandIcon,
    title: "Real supervisor support",
    body: "A care supervisor visits your placement every two weeks. A care manager picks up your call 24×7.",
  },
  {
    icon: SparklesIcon,
    title: "Career path that's real",
    body: "Most caregivers grow into specialist or supervisor roles within 24 months. We promote from within first.",
  },
  {
    icon: ClockIcon,
    title: "Pay that grows",
    body: "Pay tied to placement complexity and ratings. Strong performers double their starting salary within 2 years.",
  },
];

const applicationProcess = [
  {
    step: "01",
    label: "Apply",
    body: "WhatsApp our hiring team or email a brief about yourself. Field roles via WhatsApp, corporate roles via email.",
  },
  {
    step: "02",
    label: "Phone interview",
    body: "15–20 minute conversation to understand your background, situation and language preferences.",
  },
  {
    step: "03",
    label: "In-person meet",
    body: "At our Indiranagar office. For field roles, bring Aadhaar and one address proof. For corporate roles, a structured 1:1 with the hiring manager.",
  },
  {
    step: "04",
    label: "Training",
    body: "Field roles: 60–120 hours of paid training before placement. Corporate roles: structured 30-60-90 plan with onboarding.",
  },
  {
    step: "05",
    label: "Placement / Day one",
    body: "Field: your first home placement, fully briefed. Corporate: meet the team, get your laptop, start.",
  },
];

export default function CareersIndex() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Careers", href: "/careers" },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sage-50 via-cream-50 to-cream-50" />
        <div className="container pt-16 sm:pt-24 pb-10">
          <div className="max-w-3xl">
            <span className="chip">
              {totalOpenings} open roles · {jobs.length} role types
            </span>
            <h1 className="mt-5 font-display text-[44px] sm:text-[56px] md:text-[68px] leading-[1.04] tracking-[-0.02em] text-ink-900">
              Build a career in caregiving
              <span className="text-teal-700">.</span>
            </h1>
            <p className="mt-5 lead">
              Care Givers is hiring across Bangalore — caregivers, home nurses,
              supervisors, operations and corporate roles. We pay fairly, train
              thoroughly, and grow people from within. The work is hard. The work matters.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.whatsappHref} className="btn-lg btn-primary">
                <WhatsAppIcon size={16} /> Apply via WhatsApp
              </a>
              <a href={`mailto:careers@${(site.email || "").split("@")[1] || "caregivers.example"}`} className="btn-lg btn-secondary">
                careers@{(site.email || "").split("@")[1] || "caregivers.example"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why work here */}
      <section className="py-10">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyWorkHere.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="rounded-3xl bg-white ring-1 ring-ink-100 shadow-soft p-6"
              >
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-sage-100 text-sage-700">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 font-display text-[18px] text-ink-900 leading-tight">
                  {title}
                </h3>
                <p className="mt-2 text-[13.5px] text-ink-600 leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles by category */}
      <section className="py-12">
        <div className="container">
          <div className="mb-8">
            <h2 className="section-title">Open roles</h2>
            <p className="mt-3 text-[15.5px] text-ink-600">
              {totalOpenings} positions across {jobCategories.length} categories. All roles
              are based in Bangalore unless noted otherwise.
            </p>
          </div>

          {jobCategories.map((cat) => {
            const list = jobs.filter((j) => j.category === cat);
            if (!list.length) return null;
            return (
              <div key={cat} className="mb-14 last:mb-0">
                <div className="flex items-end justify-between gap-4 mb-5">
                  <div>
                    <span className="section-eyebrow">
                      <span className="h-px w-6 bg-teal-500" /> {cat}
                    </span>
                    <p className="mt-2 text-[14.5px] text-ink-600 max-w-xl">
                      {categoryDescriptions[cat]}
                    </p>
                  </div>
                  <span className="text-xs text-ink-500 tabular-nums hidden sm:block">
                    {list.reduce((a, j) => a + j.openings, 0)} open
                  </span>
                </div>

                <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {list.map((j) => (
                    <li key={j.slug}>
                      <Link
                        href={`/careers/${j.slug}`}
                        className="group flex h-full flex-col rounded-3xl bg-white ring-1 ring-ink-100 shadow-soft p-6 hover:-translate-y-0.5 hover:shadow-glow transition"
                      >
                        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.14em] text-teal-700 font-semibold">
                          <span>{j.experienceLevel} · {j.employmentType}</span>
                          <span className="chip-cream">{j.openings} open</span>
                        </div>
                        <h3 className="mt-2 font-display text-[20px] leading-tight text-ink-900 group-hover:text-teal-800 transition">
                          {j.title}
                        </h3>
                        <p className="mt-2 text-[13.5px] text-ink-600 leading-relaxed">
                          {j.shortDek}
                        </p>

                        <dl className="mt-4 grid grid-cols-2 gap-y-2 text-[12px] text-ink-500">
                          <div className="flex items-center gap-1.5">
                            <PinIcon size={12} /> Bangalore
                          </div>
                          <div className="inline-flex items-center gap-1.5">
                            <ClockIcon size={12} /> {j.shift.split(",")[0]}
                          </div>
                          <div className="col-span-2 mt-1 inline-flex items-center gap-1.5">
                            <SparklesIcon size={12} />
                            <span className="font-medium text-ink-700">
                              ₹{j.compensation.base.replace(/\s/g, "")} / {j.compensation.period}
                            </span>
                          </div>
                        </dl>

                        <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-teal-700">
                          See full role <ArrowRightIcon size={14} />
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Application process */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-2xl mb-10">
            <span className="section-eyebrow">
              <span className="h-px w-6 bg-teal-500" /> How we hire
            </span>
            <h2 className="mt-3 section-title">
              A simple, respectful process.
            </h2>
            <p className="mt-4 lead">
              No multi-round interview marathons. No ghosting. We aim to give every
              applicant a clear answer within 7 days.
            </p>
          </div>

          <ol className="grid gap-4 md:grid-cols-5">
            {applicationProcess.map((s) => (
              <li
                key={s.step}
                className="rounded-3xl bg-cream-50 ring-1 ring-cream-200 p-5"
              >
                <div className="font-display text-2xl text-teal-700">{s.step}</div>
                <div className="mt-2 font-display text-[16px] text-ink-900">{s.label}</div>
                <p className="mt-2 text-[13px] text-ink-600 leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Equal opportunity */}
      <section className="py-14">
        <div className="container max-w-4xl">
          <div className="rounded-[28px] bg-gradient-to-br from-sage-50 via-cream-50 to-teal-50 ring-1 ring-sage-200 p-7 sm:p-10">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
              Who we hire
            </div>
            <h3 className="mt-3 font-display text-2xl sm:text-3xl text-ink-900">
              Equal opportunity, in practice.
            </h3>
            <p className="mt-3 text-[15.5px] text-ink-700 leading-relaxed">
              We hire across caste, religion, gender, language, region, and economic
              background. For field roles, your willingness to learn matters more than
              your prior credentials. For corporate roles, demonstrated work matters
              more than the brand on your résumé. Many of our caregivers entered with
              no formal training; many of our supervisors started as caregivers.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-[14.5px] text-ink-700">
              {[
                "We pay above market for the role complexity",
                "We never charge applicants any fee",
                "We never ask for documents to be deposited",
                "We provide accommodation for live-in caregivers",
                "We support continuing education and certifications",
                "We pay during the training period",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <span className="shrink-0 mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-sage-200 text-sage-800">
                    <CheckIcon size={12} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
