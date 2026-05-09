const stats = [
  { value: "1,200+", label: "Bangalore families served" },
  { value: "6 hrs", label: "Avg. time to caregiver placement" },
  { value: "4.9 / 5", label: "Family satisfaction rating" },
  { value: "24×7", label: "Care support, every day" },
];

export function Stats() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="rounded-[32px] bg-teal-700 text-white px-6 sm:px-10 py-10 sm:py-12 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-teal-500/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-sage-400/20 blur-3xl" />

          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl sm:text-5xl tracking-tight">
                  {s.value}
                </div>
                <div className="mt-2 text-[13px] text-teal-100">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
