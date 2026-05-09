import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRightIcon,
  HeartHandIcon,
  SparklesIcon,
  ShieldCheckIcon,
  ClockIcon,
} from "@/components/icons";
import { FinalCta } from "@/components/FinalCta";
import { buildMetadata } from "@/lib/site";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Care Tools — Quiz, Cost Calculator, Caregiver Self-Check",
  description:
    "Free interactive tools for Bangalore families: a 2-minute care quiz, a transparent cost calculator and a 60-second caregiver self-check.",
  path: "/tools",
});

const tools = [
  {
    href: "/care-quiz",
    eyebrow: "2-minute quiz",
    title: "Find the right care for your family",
    body: "Six questions about your situation. We recommend the right service, a price range, and a clear next step. Email yourself the plan.",
    icon: SparklesIcon,
    accent: "from-sage-100 to-cream-50",
    cta: "Start the quiz",
  },
  {
    href: "/cost-calculator",
    eyebrow: "Live estimate",
    title: "Bangalore caregiver cost calculator",
    body: "Adjust hours, days, locality and care complexity. Watch the monthly cost update live, with a transparent breakdown.",
    icon: ClockIcon,
    accent: "from-teal-100 to-cream-50",
    cta: "Open the calculator",
  },
  {
    href: "/caregiver-checkup",
    eyebrow: "60-second self-check",
    title: "Are you the family caregiver? A wellbeing check.",
    body: "Ten gentle questions for the family member doing the daily caregiving. Calm scoring, kind suggestions, no diagnosis.",
    icon: HeartHandIcon,
    accent: "from-peach-100 to-cream-50",
    cta: "Take the check-in",
  },
];

export default function ToolsIndex() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Tools", href: "/tools" },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-16 sm:pt-24 pb-10">
        <div className="container max-w-3xl text-center">
          <span className="chip">Free care tools for Bangalore families</span>
          <h1 className="mt-5 font-display text-[44px] sm:text-[56px] md:text-[68px] leading-[1.04] tracking-[-0.02em] text-ink-900">
            Tools that help you decide.
          </h1>
          <p className="mt-5 lead">
            Three small interactive tools to make a hard decision easier — built around
            real Bangalore pricing, honest matching logic, and a calm tone of voice.
            Use them privately. Save the result if it’s helpful.
          </p>
        </div>
      </section>

      {/* Tools grid */}
      <section className="py-10">
        <div className="container">
          <ul className="grid gap-6 lg:grid-cols-3">
            {tools.map(({ href, eyebrow, title, body, icon: Icon, accent, cta }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group flex flex-col h-full rounded-[28px] bg-white ring-1 ring-ink-100 shadow-soft hover:shadow-glow transition overflow-hidden"
                >
                  <div className={`relative aspect-[16/10] bg-gradient-to-br ${accent}`}>
                    <div className="absolute inset-0 grid place-items-center">
                      <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white/90 text-teal-700 shadow-soft">
                        <Icon size={26} />
                      </span>
                    </div>
                    <div className="absolute top-4 left-4 chip-cream bg-white/95">
                      {eyebrow}
                    </div>
                  </div>
                  <div className="p-6 sm:p-7 flex-1 flex flex-col">
                    <h3 className="font-display text-[22px] leading-tight text-ink-900 group-hover:text-teal-800 transition">
                      {title}
                    </h3>
                    <p className="mt-3 text-[14.5px] text-ink-600 leading-relaxed">
                      {body}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700">
                      {cta} <ArrowRightIcon size={14} />
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-12">
        <div className="container">
          <div className="rounded-[28px] bg-cream-50 ring-1 ring-cream-200 p-7 sm:p-9 grid sm:grid-cols-3 gap-6 text-center">
            <Trust
              icon={ShieldCheckIcon}
              title="Private"
              body="All inputs stay on your device. We don’t store anything unless you ask us to email you a result."
            />
            <Trust
              icon={SparklesIcon}
              title="Honest"
              body="Pricing reflects real Bangalore rates. Logic mirrors how our care managers actually quote."
            />
            <Trust
              icon={HeartHandIcon}
              title="Kind"
              body="Built to reduce anxiety, not increase it. No alarmist language, no upsells."
            />
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}

function Trust({
  icon: Icon,
  title,
  body,
}: {
  icon: (p: { size?: number }) => React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div>
      <div className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-sage-100 text-sage-700">
        <Icon size={20} />
      </div>
      <div className="mt-3 font-display text-lg text-ink-900">{title}</div>
      <p className="mt-1 text-[13.5px] text-ink-600 leading-relaxed">{body}</p>
    </div>
  );
}
