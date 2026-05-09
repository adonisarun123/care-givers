import { CheckIcon } from "@/components/icons";

const profiles = [
  {
    name: "Lakshmi",
    role: "Senior Elder Care Attendant",
    years: "9 years",
    languages: ["Kannada", "English", "Tamil"],
    specialties: ["Dementia", "Mobility", "Companionship"],
    photo:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Raju",
    role: "Patient Care Attendant",
    years: "6 years",
    languages: ["Hindi", "English", "Telugu"],
    specialties: ["Post-surgery", "Bedridden", "RT-feeding"],
    photo:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Mary",
    role: "Live-in Caregiver",
    years: "11 years",
    languages: ["Malayalam", "English", "Hindi"],
    specialties: ["Stroke recovery", "Elder care", "Wound care"],
    photo:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
  },
];

export function CaregiverProfiles() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-4xl">
          <div>
            <span className="section-eyebrow">
              <span className="h-px w-6 bg-teal-500" /> Real caregivers, real care
            </span>
            <h2 className="mt-3 section-title">
              The hands that hold yours.
            </h2>
          </div>
          <p className="lead md:max-w-md">
            Every caregiver is interviewed, trained for 60+ hours and then matched
            to your family by language, care needs and temperament.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {profiles.map((p) => (
            <article
              key={p.name}
              className="group rounded-[28px] bg-white ring-1 ring-ink-100/70 shadow-soft overflow-hidden"
            >
              <div className="relative aspect-[4/3] bg-sage-100 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.photo}
                  alt={p.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-ink-900/55 to-transparent">
                  <div className="text-white">
                    <div className="font-display text-[18px]">{p.name}</div>
                    <div className="text-xs opacity-90">{p.role}</div>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between text-xs text-ink-500">
                  <span>{p.years} experience</span>
                  <span className="inline-flex items-center gap-1 text-sage-700">
                    <CheckIcon size={12} /> Verified
                  </span>
                </div>

                <div className="mt-4">
                  <div className="text-[12px] uppercase tracking-[0.14em] text-ink-500">Languages</div>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {p.languages.map((l) => (
                      <span key={l} className="chip-cream">{l}</span>
                    ))}
                  </div>
                </div>

                <div className="mt-3">
                  <div className="text-[12px] uppercase tracking-[0.14em] text-ink-500">Specialties</div>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {p.specialties.map((s) => (
                      <span key={s} className="chip">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
