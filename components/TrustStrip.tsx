import { ClockIcon, HeartHandIcon, ShieldCheckIcon, SparklesIcon } from "@/components/icons";

const items = [
  {
    Icon: ShieldCheckIcon,
    title: "Police verified",
    body: "Background check, Aadhaar & address verified before placement.",
  },
  {
    Icon: HeartHandIcon,
    title: "Empathy first",
    body: "Screened for kindness and patience — not just skills.",
  },
  {
    Icon: ClockIcon,
    title: "Same-day start",
    body: "Caregiver placed at home in 6 hours for urgent cases.",
  },
  {
    Icon: SparklesIcon,
    title: "Replacement guarantee",
    body: "Not the right fit? We replace within 24 hours, no questions.",
  },
];

export function TrustStrip() {
  return (
    <section className="relative">
      <div className="container">
        <div className="rounded-[28px] bg-white ring-1 ring-ink-100/80 shadow-soft px-5 sm:px-8 py-6 sm:py-8 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {items.map(({ Icon, title, body }) => (
            <div key={title} className="flex items-start gap-4">
              <span className="shrink-0 grid h-11 w-11 place-items-center rounded-2xl bg-sage-50 text-sage-700">
                <Icon size={20} />
              </span>
              <div>
                <div className="text-[15px] font-semibold text-ink-900">{title}</div>
                <p className="mt-0.5 text-[13.5px] text-ink-600 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
