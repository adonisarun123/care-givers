import { CheckIcon } from "@/components/icons";

const points = [
  {
    title: "Vetting takes weeks, not minutes",
    body: "Aadhaar + police verification, in-person interview, references, and a 60-hour training programme — before any caregiver enters your home.",
  },
  {
    title: "Match by language, gender, and care complexity",
    body: "We don’t just send the next available person. Our placement team reads your case and assigns intentionally.",
  },
  {
    title: "Supervisors who actually visit",
    body: "Bi-weekly home visits from a trained supervisor — to ensure quality, listen to family, and adjust care.",
  },
  {
    title: "On-call, 24×7, with a real human",
    body: "Late-night emergency? A trained care manager (not a chatbot) is always available within minutes.",
  },
  {
    title: "Honest about what we’re not",
    body: "We’re not a hospital, an ICU, or a substitute for medical advice. We work alongside your doctor, not around them.",
  },
];

export function WhyUs() {
  return (
    <section className="py-16 sm:py-24 bg-ink-900 text-cream-50 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-teal-700/30 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-sage-500/20 blur-3xl" />

      <div className="container relative">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-sage-300">
              <span className="h-px w-6 bg-sage-300" /> Why families pick us
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl tracking-tight">
              The unglamorous things
              <br className="hidden md:block" /> that make care safe.
            </h2>
            <p className="mt-5 text-cream-100/80 max-w-md">
              We’ve built our process for the family who has been let down before — by an
              agency that promised, then disappeared.
            </p>
          </div>

          <ul className="space-y-3">
            {points.map((p, i) => (
              <li
                key={p.title}
                className="rounded-3xl bg-white/[0.04] hover:bg-white/[0.06] ring-1 ring-white/10 backdrop-blur p-6 sm:p-7 transition"
              >
                <div className="flex items-start gap-4">
                  <span className="shrink-0 grid h-9 w-9 place-items-center rounded-full bg-sage-400/90 text-ink-900 font-display text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-cream-50">{p.title}</h3>
                    <p className="mt-2 text-[15px] text-cream-100/75 leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
