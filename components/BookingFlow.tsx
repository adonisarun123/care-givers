"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon, ShieldCheckIcon, WhatsAppIcon } from "@/components/icons";
import { services } from "@/lib/services";
import { localities } from "@/lib/locations";
import { site } from "@/lib/site";

type Form = {
  serviceSlug: string;
  duration: "hourly" | "12h-day" | "12h-night" | "live-in" | "";
  startWhen: "today" | "tomorrow" | "this-week" | "";
  gender: "any" | "female" | "male" | "";
  languages: string[];
  patientName: string;
  patientAge: string;
  notes: string;
  locality: string;
  address: string;
  contactName: string;
  contactPhone: string;
};

const empty: Form = {
  serviceSlug: "",
  duration: "",
  startWhen: "",
  gender: "",
  languages: [],
  patientName: "",
  patientAge: "",
  notes: "",
  locality: "",
  address: "",
  contactName: "",
  contactPhone: "",
};

const STEPS = [
  "Care type",
  "Schedule",
  "Preferences",
  "Patient",
  "Address",
  "You",
] as const;

export function BookingFlow() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<Form>(empty);
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof Form>(k: K, v: Form[K]) => setForm((f) => ({ ...f, [k]: v }));
  const canNext = useMemo(() => stepValid(step, form), [step, form]);

  const next = () => {
    if (!canNext) return;
    if (step === STEPS.length - 1) {
      setSubmitted(true);
      return;
    }
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const selectedService = services.find((s) => s.slug === form.serviceSlug);
  const progress = ((step + (submitted ? 1 : 0)) / STEPS.length) * 100;

  if (submitted) {
    return <Confirmation form={form} serviceName={selectedService?.name || "Caregiver"} />;
  }

  return (
    <div className="min-h-[100svh] bg-cream-50">
      {/* Top bar with progress */}
      <div className="sticky top-0 z-20 bg-cream-50/85 backdrop-blur border-b border-ink-100/70">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/" className="text-sm text-ink-600 hover:text-ink-900 link-quiet">
            ← Home
          </Link>
          <div className="flex-1 h-1.5 rounded-full bg-ink-100 overflow-hidden">
            <div
              className="h-full bg-teal-600 transition-[width] duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs text-ink-500 hidden sm:block tabular-nums">
            Step {step + 1} of {STEPS.length}
          </span>
        </div>
      </div>

      <div className="container py-10 lg:py-16 grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16">
        {/* LEFT: step */}
        <div>
          <div className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            {STEPS[step]}
          </div>

          {step === 0 && (
            <Step
              title="What kind of care do you need?"
              subtitle="Pick the closest match — we’ll fine-tune in the next step."
            >
              <div className="grid gap-3 sm:grid-cols-2">
                {services.map((s) => {
                  const selected = form.serviceSlug === s.slug;
                  return (
                    <button
                      key={s.slug}
                      type="button"
                      onClick={() => update("serviceSlug", s.slug)}
                      className={[
                        "text-left rounded-2xl ring-1 p-5 transition",
                        selected
                          ? "bg-teal-700 text-white ring-teal-700 shadow-glow"
                          : "bg-white ring-ink-100 hover:ring-teal-300",
                      ].join(" ")}
                    >
                      <div className={selected ? "text-sage-200" : "text-teal-700"}>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.16em]">
                          {s.duration}
                        </span>
                      </div>
                      <div className="mt-1.5 font-display text-[18px] leading-tight">{s.name}</div>
                      <p
                        className={[
                          "mt-1.5 text-[13.5px] leading-relaxed",
                          selected ? "text-cream-100/85" : "text-ink-600",
                        ].join(" ")}
                      >
                        {s.short}
                      </p>
                    </button>
                  );
                })}
              </div>
            </Step>
          )}

          {step === 1 && (
            <Step
              title="When and how often?"
              subtitle="Most families start with a 12-hour shift while they decide on long-term care."
            >
              <Grid>
                {[
                  { v: "hourly", label: "Hourly visit", note: "Min 4 hours · ₹220/hr" },
                  { v: "12h-day", label: "12-hour day shift", note: "8 am – 8 pm · ₹950/day" },
                  { v: "12h-night", label: "12-hour night shift", note: "8 pm – 8 am · ₹950/night" },
                  { v: "live-in", label: "24×7 live-in", note: "From ₹28,000/month" },
                ].map((opt) => (
                  <Choice
                    key={opt.v}
                    selected={form.duration === opt.v}
                    onClick={() => update("duration", opt.v as Form["duration"])}
                    label={opt.label}
                    note={opt.note}
                  />
                ))}
              </Grid>

              <div className="mt-8">
                <FieldLabel>When should care start?</FieldLabel>
                <Grid cols={3}>
                  {[
                    { v: "today", label: "Today" },
                    { v: "tomorrow", label: "Tomorrow" },
                    { v: "this-week", label: "This week" },
                  ].map((opt) => (
                    <Choice
                      key={opt.v}
                      selected={form.startWhen === opt.v}
                      onClick={() => update("startWhen", opt.v as Form["startWhen"])}
                      label={opt.label}
                    />
                  ))}
                </Grid>
              </div>
            </Step>
          )}

          {step === 2 && (
            <Step
              title="Any caregiver preferences?"
              subtitle="We match by language and gender to make your loved one comfortable."
            >
              <FieldLabel>Caregiver gender</FieldLabel>
              <Grid cols={3}>
                {[
                  { v: "any", label: "No preference" },
                  { v: "female", label: "Female" },
                  { v: "male", label: "Male" },
                ].map((opt) => (
                  <Choice
                    key={opt.v}
                    selected={form.gender === opt.v}
                    onClick={() => update("gender", opt.v as Form["gender"])}
                    label={opt.label}
                  />
                ))}
              </Grid>

              <div className="mt-8">
                <FieldLabel>Languages spoken (select any that work)</FieldLabel>
                <div className="flex flex-wrap gap-2">
                  {["Kannada", "English", "Hindi", "Tamil", "Telugu", "Malayalam", "Bengali"].map(
                    (lang) => {
                      const on = form.languages.includes(lang);
                      return (
                        <button
                          key={lang}
                          type="button"
                          onClick={() =>
                            update(
                              "languages",
                              on
                                ? form.languages.filter((l) => l !== lang)
                                : [...form.languages, lang],
                            )
                          }
                          className={[
                            "rounded-full px-4 py-2 text-sm transition ring-1",
                            on
                              ? "bg-teal-700 text-white ring-teal-700"
                              : "bg-white text-ink-700 ring-ink-100 hover:ring-teal-300",
                          ].join(" ")}
                        >
                          {lang}
                        </button>
                      );
                    },
                  )}
                </div>
              </div>
            </Step>
          )}

          {step === 3 && (
            <Step
              title="Tell us about the patient"
              subtitle="Just the essentials — the rest, we’ll learn together."
            >
              <Field>
                <FieldLabel>Patient’s name</FieldLabel>
                <Input
                  value={form.patientName}
                  onChange={(v) => update("patientName", v)}
                  placeholder="e.g., Mrs. Lakshmi Iyer"
                />
              </Field>
              <Field>
                <FieldLabel>Age</FieldLabel>
                <Input
                  value={form.patientAge}
                  onChange={(v) => update("patientAge", v)}
                  placeholder="e.g., 72"
                  inputMode="numeric"
                />
              </Field>
              <Field>
                <FieldLabel>Anything our caregiver should know? (optional)</FieldLabel>
                <Textarea
                  value={form.notes}
                  onChange={(v) => update("notes", v)}
                  placeholder="e.g., recovering from hip surgery, uses a walker, gets anxious in the evenings"
                />
              </Field>
            </Step>
          )}

          {step === 4 && (
            <Step
              title="Where should the caregiver come?"
              subtitle="We cover most of Bangalore. Pick the closest area to your home."
            >
              <FieldLabel>Locality</FieldLabel>
              <div className="grid sm:grid-cols-2 gap-2">
                {localities.map((l) => (
                  <Choice
                    key={l.slug}
                    selected={form.locality === l.slug}
                    onClick={() => update("locality", l.slug)}
                    label={l.name}
                    note={`${l.zone} Bangalore`}
                    compact
                  />
                ))}
              </div>
              <Field className="mt-6">
                <FieldLabel>Full address (we keep this private)</FieldLabel>
                <Textarea
                  value={form.address}
                  onChange={(v) => update("address", v)}
                  placeholder="Apartment / house no., street, landmark, pincode"
                />
              </Field>
            </Step>
          )}

          {step === 5 && (
            <Step
              title="How can we reach you?"
              subtitle="We’ll WhatsApp the caregiver match within an hour."
            >
              <Field>
                <FieldLabel>Your name</FieldLabel>
                <Input
                  value={form.contactName}
                  onChange={(v) => update("contactName", v)}
                  placeholder="Your full name"
                />
              </Field>
              <Field>
                <FieldLabel>Mobile / WhatsApp number</FieldLabel>
                <Input
                  value={form.contactPhone}
                  onChange={(v) => update("contactPhone", v)}
                  placeholder="10-digit Indian mobile number"
                  inputMode="tel"
                />
              </Field>
              <p className="text-xs text-ink-500">
                By continuing you agree to our care terms. We’ll never share your details.
              </p>
            </Step>
          )}

          {/* nav */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            {step > 0 && (
              <button type="button" onClick={back} className="btn-md btn-ghost">
                ← Back
              </button>
            )}
            <button
              type="button"
              onClick={next}
              disabled={!canNext}
              className="btn-lg btn-primary"
            >
              {step === STEPS.length - 1 ? "Confirm booking" : "Continue"}
              <ArrowRightIcon size={16} />
            </button>
            <a href={site.whatsappHref} className="btn-md btn-ghost gap-1.5 ml-auto text-ink-500">
              <WhatsAppIcon size={16} /> Stuck? WhatsApp us
            </a>
          </div>
        </div>

        {/* RIGHT: summary */}
        <aside className="lg:sticky lg:top-24 self-start">
          <div className="rounded-3xl bg-white ring-1 ring-ink-100 shadow-soft p-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
              <ShieldCheckIcon size={14} /> Your booking
            </div>
            <h3 className="mt-2 font-display text-2xl text-ink-900">
              {selectedService ? selectedService.name : "Tell us what you need"}
            </h3>
            <p className="mt-2 text-sm text-ink-600">
              {selectedService
                ? selectedService.short
                : "Pick a care type to see a tailored estimate appear here."}
            </p>

            <dl className="mt-6 divide-y divide-ink-100/80 text-sm">
              <SummaryRow label="Duration" value={prettyDuration(form.duration)} />
              <SummaryRow label="Start" value={prettyStart(form.startWhen)} />
              <SummaryRow label="Gender" value={prettyGender(form.gender)} />
              <SummaryRow
                label="Languages"
                value={form.languages.length ? form.languages.join(", ") : "—"}
              />
              <SummaryRow
                label="Locality"
                value={
                  localities.find((l) => l.slug === form.locality)?.name || "—"
                }
              />
            </dl>

            <div className="mt-6 rounded-2xl bg-cream-50 p-4 text-sm text-ink-700">
              <div className="flex items-center gap-2 text-teal-700 font-medium">
                <CheckIcon size={14} /> Replacement guarantee
              </div>
              <p className="mt-1.5 text-ink-600 text-[13px] leading-relaxed">
                Not the right fit? We replace within 24 hours, free.
              </p>
            </div>
          </div>

          <div className="mt-4 text-xs text-ink-500 text-center">
            Booking takes &lt;3 minutes · No payment required to confirm match
          </div>
        </aside>
      </div>
    </div>
  );
}

/* ─── Small UI primitives used inside the flow ─── */

function Step({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="animate-fade-up">
      <h1 className="font-display text-3xl sm:text-4xl tracking-tight text-ink-900">{title}</h1>
      {subtitle && <p className="mt-3 text-[15.5px] text-ink-600 max-w-xl">{subtitle}</p>}
      <div className="mt-8">{children}</div>
    </div>
  );
}

function Field({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`mb-5 ${className ?? ""}`}>{children}</div>;
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-2 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-ink-500">
      {children}
    </div>
  );
}

function Input({
  value,
  onChange,
  placeholder,
  inputMode,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <input
      type="text"
      inputMode={inputMode}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-2xl bg-white ring-1 ring-ink-100 px-4 py-3 text-[15px] outline-none transition focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500"
    />
  );
}

function Textarea({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={4}
      className="w-full rounded-2xl bg-white ring-1 ring-ink-100 px-4 py-3 text-[15px] outline-none transition focus:ring-2 focus:ring-teal-500/40 resize-none"
    />
  );
}

function Grid({
  children,
  cols = 2,
}: {
  children: React.ReactNode;
  cols?: 2 | 3;
}) {
  return (
    <div className={`grid gap-3 ${cols === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
      {children}
    </div>
  );
}

function Choice({
  selected,
  onClick,
  label,
  note,
  compact,
}: {
  selected: boolean;
  onClick: () => void;
  label: string;
  note?: string;
  compact?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "text-left rounded-2xl ring-1 transition w-full",
        compact ? "p-3.5" : "p-4",
        selected
          ? "bg-teal-700 text-white ring-teal-700 shadow-glow"
          : "bg-white ring-ink-100 hover:ring-teal-300",
      ].join(" ")}
    >
      <div className="font-medium">{label}</div>
      {note && (
        <div
          className={[
            "mt-0.5 text-[12.5px]",
            selected ? "text-cream-100/85" : "text-ink-500",
          ].join(" ")}
        >
          {note}
        </div>
      )}
    </button>
  );
}

function SummaryRow({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex items-center justify-between py-2.5">
      <dt className="text-ink-500">{label}</dt>
      <dd className="font-medium text-ink-900 text-right">{value || "—"}</dd>
    </div>
  );
}

/* ─── Validation + display helpers ─── */

function stepValid(step: number, f: Form) {
  switch (step) {
    case 0:
      return !!f.serviceSlug;
    case 1:
      return !!f.duration && !!f.startWhen;
    case 2:
      return !!f.gender;
    case 3:
      return f.patientName.trim().length >= 2 && f.patientAge.trim().length >= 1;
    case 4:
      return !!f.locality && f.address.trim().length >= 6;
    case 5:
      return f.contactName.trim().length >= 2 && /\d{10}/.test(f.contactPhone.replace(/\D/g, ""));
    default:
      return true;
  }
}

function prettyDuration(d: Form["duration"]) {
  if (!d) return "—";
  return {
    hourly: "Hourly visit",
    "12h-day": "12-hour day shift",
    "12h-night": "12-hour night shift",
    "live-in": "24×7 live-in",
  }[d];
}
function prettyStart(s: Form["startWhen"]) {
  if (!s) return "—";
  return { today: "Today", tomorrow: "Tomorrow", "this-week": "This week" }[s];
}
function prettyGender(g: Form["gender"]) {
  if (!g) return "—";
  return { any: "No preference", female: "Female", male: "Male" }[g];
}

/* ─── Confirmation screen ─── */
function Confirmation({ form, serviceName }: { form: Form; serviceName: string }) {
  return (
    <div className="min-h-[100svh] bg-cream-50">
      <div className="container max-w-3xl py-20 lg:py-28 text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-sage-100 text-sage-700 shadow-soft">
          <CheckIcon size={28} />
        </div>
        <h1 className="mt-6 font-display text-4xl sm:text-5xl tracking-tight text-ink-900">
          You can exhale now.
        </h1>
        <p className="mt-4 lead">
          We’ve received your request for <strong>{serviceName}</strong>. A care manager
          will WhatsApp <strong>{form.contactName || "you"}</strong> at{" "}
          <strong>{form.contactPhone || "your number"}</strong> within an hour with a
          shortlisted caregiver.
        </p>

        <div className="mt-10 grid sm:grid-cols-3 gap-4 text-left">
          <Stat label="Caregiver match" value="Within 60 minutes" />
          <Stat label="Caregiver placement" value="Within 6 hours typical" />
          <Stat label="Replacement guarantee" value="24-hour, no questions" />
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href={site.whatsappHref} className="btn-lg btn-primary">
            <WhatsAppIcon size={16} /> Continue on WhatsApp
          </a>
          <Link href="/" className="btn-lg btn-secondary">
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white ring-1 ring-ink-100 p-5 shadow-soft">
      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">{label}</div>
      <div className="mt-1.5 font-display text-xl text-ink-900">{value}</div>
    </div>
  );
}
