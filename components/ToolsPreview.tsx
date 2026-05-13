import Link from "next/link";
import {
  ArrowRightIcon,
  ClockIcon,
  HeartHandIcon,
  SparklesIcon,
} from "@/components/icons";

const tools = [
  {
    href: "/care-quiz",
    icon: SparklesIcon,
    eyebrow: "2-minute quiz",
    title: "Find the right care",
    body: "Tell us your situation. We'll recommend the plan and price.",
    accent: "from-sage-100 to-cream-50",
  },
  {
    href: "/cost-calculator",
    icon: ClockIcon,
    eyebrow: "Live estimate",
    title: "Calculate your cost",
    body: "Sliders for hours, days, locality and complexity. Instant total.",
    accent: "from-teal-100 to-cream-50",
  },
  {
    href: "/caregiver-checkup",
    icon: HeartHandIcon,
    eyebrow: "60-second check-in",
    title: "Are you holding up?",
    body: "A private wellbeing self-check for the family carer.",
    accent: "from-peach-100 to-cream-50",
  },
];

export function ToolsPreview() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 max-w-3xl">
          <div>
            <span className="section-eyebrow">
              <span className="h-px w-6 bg-teal-500" /> Free care tools
            </span>
            <h2 className="mt-3 section-title">Tools that help you decide.</h2>
            <p className="mt-4 lead">
              Three small interactive tools — private, calm, no email required —
              that turn a hard decision into a clearer one.
            </p>
          </div>
          <Link href="/tools" className="link-quiet text-sm text-ink-600">
            All tools →
          </Link>
        </div>

        <ul className="grid gap-5 md:grid-cols-3">
          {tools.map((t) => {
            const Icon = t.icon;
            return (
              <li key={t.href}>
                <Link
                  href={t.href}
                  className={`group block h-full rounded-[28px] bg-gradient-to-br ${t.accent} ring-1 ring-ink-100 shadow-soft hover:shadow-glow transition p-6`}
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/90 text-teal-700 shadow-soft">
                    <Icon size={22} />
                  </span>
                  <div className="mt-5 text-[11px] uppercase tracking-[0.14em] text-teal-700 font-semibold">
                    {t.eyebrow}
                  </div>
                  <h3 className="mt-1.5 font-display text-[20px] leading-tight text-ink-900 group-hover:text-teal-800 transition">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-[14px] text-ink-600 leading-relaxed">
                    {t.body}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-700 opacity-0 group-hover:opacity-100 transition">
                    Open <ArrowRightIcon size={14} />
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
