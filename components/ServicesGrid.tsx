import Link from "next/link";
import { services } from "@/lib/services";
import {
  ArrowRightIcon,
  BedriddenIcon,
  DementiaIcon,
  ElderIcon,
  FemaleIcon,
  LiveInIcon,
  NightIcon,
  PatientIcon,
  PostSurgeryIcon,
} from "@/components/icons";

const iconMap = {
  elder: ElderIcon,
  patient: PatientIcon,
  "live-in": LiveInIcon,
  "post-surgery": PostSurgeryIcon,
  dementia: DementiaIcon,
  bedridden: BedriddenIcon,
  night: NightIcon,
  female: FemaleIcon,
} as const;

const tones: Record<string, string> = {
  elder: "from-sage-100 to-sage-50 text-sage-800",
  patient: "from-teal-100 to-teal-50 text-teal-800",
  "live-in": "from-cream-100 to-cream-50 text-ink-800",
  "post-surgery": "from-peach-100 to-peach-50 text-ink-800",
  dementia: "from-sage-100 to-cream-50 text-sage-800",
  bedridden: "from-teal-100 to-cream-50 text-teal-800",
  night: "from-ink-100 to-cream-50 text-ink-800",
  female: "from-peach-100 to-sage-50 text-ink-800",
};

export function ServicesGrid({ heading = true }: { heading?: boolean }) {
  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        {heading && (
          <div className="max-w-2xl">
            <span className="section-eyebrow">
              <span className="h-px w-6 bg-teal-500" /> Care that fits your situation
            </span>
            <h2 className="mt-3 section-title">
              The kind of care your family actually needs.
            </h2>
            <p className="mt-4 lead">
              Whether it’s a few hours after surgery or a steady, quiet presence
              through the night — pick the care your loved one deserves.
            </p>
          </div>
        )}

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            const tone = tones[s.icon];
            return (
              <li key={s.slug} className="group">
                <Link
                  href={`/services/${s.slug}`}
                  className="relative flex h-full flex-col rounded-3xl bg-white ring-1 ring-ink-100/70 p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${tone}`}
                  >
                    <Icon size={22} />
                  </span>

                  <h3 className="mt-5 font-display text-[20px] leading-tight text-ink-900">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-[14px] text-ink-600 leading-relaxed">
                    {s.short}
                  </p>

                  <div className="mt-5 flex items-center justify-between text-xs text-ink-500">
                    <span>{s.duration}</span>
                    <span className="inline-flex items-center gap-1 text-teal-700 font-medium opacity-0 -translate-x-1 transition group-hover:opacity-100 group-hover:translate-x-0">
                      Explore <ArrowRightIcon size={14} />
                    </span>
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
