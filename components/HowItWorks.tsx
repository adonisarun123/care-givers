const steps = [
  {
    n: "01",
    title: "Tell us what you need",
    body: "Two minutes of simple questions — care type, duration, address. No phone calls required.",
  },
  {
    n: "02",
    title: "We match a caregiver",
    body: "We hand-pick from our trained network based on language, gender preference and care complexity.",
  },
  {
    n: "03",
    title: "Caregiver arrives at home",
    body: "Often within 6 hours. They’re briefed, ID-carded and introduced to your family with dignity.",
  },
  {
    n: "04",
    title: "We stay close",
    body: "Daily updates, supervisor check-ins and on-call replacement support — you’re never alone in this.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <span className="section-eyebrow">
              <span className="h-px w-6 bg-teal-500" /> How it works
            </span>
            <h2 className="mt-3 section-title">
              Booking should feel like a calm exhale.
            </h2>
            <p className="mt-4 lead">
              We’ve removed every friction we could — long forms, callbacks, paperwork —
              so the only thing you carry is the decision to ask for help.
            </p>
          </div>

          <ol className="relative space-y-5">
            {steps.map((step, i) => (
              <li
                key={step.n}
                className="relative rounded-3xl bg-cream-50 ring-1 ring-cream-200 p-6 sm:p-7"
              >
                <div className="flex items-start gap-5">
                  <div className="shrink-0">
                    <div className="font-display text-[28px] leading-none text-teal-700">{step.n}</div>
                    {i < steps.length - 1 && (
                      <div className="mt-3 ml-3 h-12 w-px bg-ink-200" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-ink-900">{step.title}</h3>
                    <p className="mt-2 text-[15px] text-ink-600 leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
