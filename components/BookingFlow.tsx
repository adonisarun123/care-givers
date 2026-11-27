"use client";

import Link from "next/link";
import { useId, useRef, useState } from "react";
import { CheckIcon, PhoneIcon, ShieldCheckIcon, WhatsAppIcon } from "@/components/icons";
import { services, type Service } from "@/lib/services";
import { localities } from "@/lib/locations";
import { site } from "@/lib/site";
import { careOptions } from "@/components/home/careOptions";

/* ─────────────────────────────────────────────────────────────────────────
 * Booking flow — 4 short steps, then the request is actually delivered:
 *   1. POST /api/booking (forwards to BOOKING_WEBHOOK_URL when configured)
 *   2. A pre-filled WhatsApp message to the care team, so a request is never
 *      lost even if no webhook is set up yet.
 * ───────────────────────────────────────────────────────────────────────── */

export type BookingPrefill = { serviceSlug?: string; plan?: "hourly" | "12h" | "live-in" };

type Form = {
  serviceSlug: string;
  option: string; // a pricing label of the chosen service, e.g. "12-hour day shift"
  startWhen: "" | "today" | "tomorrow" | "this-week" | "not-sure";
  gender: "" | "any" | "female" | "male";
  languages: string[];
  patientName: string;
  patientAge: string;
  notes: string;
  locality: string;
  address: string;
  contactName: string;
  contactPhone: string;
  website: string; // honeypot — real people leave this empty
};

const STEPS = ["Care", "Schedule", "Patient", "Contact"] as const;
const LANGUAGES = ["Kannada", "English", "Hindi", "Tamil", "Telugu", "Malayalam", "Bengali"];

const planPatterns: Record<NonNullable<BookingPrefill["plan"]>, RegExp> = {
  hourly: /hour(ly)? visit|hourly/i,
  "12h": /12-hour day|12-hour/i,
  "live-in": /live-in|24/i,
};

function initialForm(prefill?: BookingPrefill): Form {
  const service = services.find((s) => s.slug === prefill?.serviceSlug);
  const option =
    service && prefill?.plan
      ? service.pricing.find((p) => planPatterns[prefill.plan!].test(p.label))?.label ?? ""
      : "";
  return {
    serviceSlug: service?.slug ?? "",
    option,
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
    website: "",
  };
}

const isAssessment = (price?: string) => !!price && /assessment/i.test(price);
const digits = (s: string) => s.replace(/\D/g, "");

function errorsFor(step: number, f: Form): Record<string, string> {
  const e: Record<string, string> = {};
  if (step === 0 && !f.serviceSlug) e.serviceSlug = "Choose the kind of care you need.";
  if (step === 1) {
    if (!f.option) e.option = "Choose how often you need care.";
    if (!f.startWhen) e.startWhen = "Tell us when care should start.";
  }
  if (step === 2) {
    if (!f.locality) e.locality = "Choose the area closest to the patient’s home.";
  }
  if (step === 3) {
    if (f.contactName.trim().length < 2) e.contactName = "Enter your name.";
    const d = digits(f.contactPhone);
    if (!(d.length === 10 || (d.length === 12 && d.startsWith("91"))))
      e.contactPhone = "Enter a 10-digit mobile number.";
  }
  return e;
}

export function BookingFlow({ prefill }: { prefill?: BookingPrefill } = {}) {
  const [step, setStep] = useState(prefill?.serviceSlug ? 1 : 0);
  const [form, setForm] = useState<Form>(() => initialForm(prefill));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [delivered, setDelivered] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const service = services.find((s) => s.slug === form.serviceSlug);
  const chosenPrice = service?.pricing.find((p) => p.label === form.option);

  const update = <K extends keyof Form>(k: K, v: Form[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => {
      if (!e[k as string]) return e;
      const next = { ...e };
      delete next[k as string];
      return next;
    });
  };

  const goTo = (n: number) => {
    setStep(n);
    setErrors({});
    window.scrollTo({ top: 0, behavior: "smooth" });
    requestAnimationFrame(() => headingRef.current?.focus());
  };

  const next = async () => {
    const e = errorsFor(step, form);
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    if (step < STEPS.length - 1) return goTo(step + 1);

    setStatus("sending");
    let ok = false;
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, serviceName: service?.name }),
      });
      ok = res.ok && (await res.json()).delivered === true;
    } catch {
      ok = false;
    }
    setDelivered(ok);
    setStatus("done");
    window.scrollTo({ top: 0 });
  };

  if (status === "done") {
    return <Confirmation form={form} service={service} delivered={delivered} />;
  }

  return (
    <div className="pb-28 lg:pb-16">
      <div className="container pt-6 sm:pt-10">
        <Progress step={step} onJump={(n) => n < step && goTo(n)} />
      </div>

      <div className="container mt-8 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
        <form
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            next();
          }}
        >
          {/* honeypot */}
          <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
            <label>
              Website
              <input
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={(e) => update("website", e.target.value)}
              />
            </label>
          </div>

          {step === 0 && (
            <StepShell
              headingRef={headingRef}
              title="What kind of care do you need?"
              subtitle="Choose the closest match. You can explain the details later."
            >
              {(["daily", "medical"] as const).map((group) => (
                <fieldset key={group} className="mb-8 last:mb-0">
                  <legend className="mb-3 text-[15px] font-semibold text-teal-700">
                    {group === "daily" ? "Daily care and support" : "Medical care at home"}
                  </legend>
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    {careOptions
                      .filter((o) => o.group === group)
                      .map((o) => {
                        const s = services.find((x) => x.slug === o.slug);
                        if (!s) return null;
                        return (
                          <OptionCard
                            key={s.slug}
                            name="service"
                            checked={form.serviceSlug === s.slug}
                            onChange={() => {
                              update("serviceSlug", s.slug);
                              update("option", "");
                            }}
                            title={s.name}
                            detail={o.summary}
                          />
                        );
                      })}
                  </div>
                </fieldset>
              ))}
              <FieldError id="serviceSlug" msg={errors.serviceSlug} />
              <p className="mt-6 rounded-2xl bg-stone-100 p-4 text-[16px] text-ink-700">
                Not sure which one fits?{" "}
                <a href={site.phoneHref} className="font-semibold text-teal-700 underline underline-offset-4">
                  Call {site.phone}
                </a>{" "}
                and a coordinator will help you decide.
              </p>
            </StepShell>
          )}

          {step === 1 && service && (
            <StepShell
              headingRef={headingRef}
              title="How often, and from when?"
              subtitle={
                isAssessment(service.pricing[0]?.price)
                  ? "Prices for this service depend on the care involved. We’ll call you with a written quote before anything is booked."
                  : "Prices are starting rates. We confirm the final price with you before care begins."
              }
            >
              <fieldset>
                <legend className="mb-3 text-[16px] font-semibold text-ink-900">{service.name}</legend>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {service.pricing.map((p) => (
                    <OptionCard
                      key={p.label}
                      name="option"
                      checked={form.option === p.label}
                      onChange={() => update("option", p.label)}
                      title={p.label}
                      detail={p.note}
                      aside={isAssessment(p.price) ? undefined : p.price}
                    />
                  ))}
                </div>
                <FieldError id="option" msg={errors.option} />
              </fieldset>

              <fieldset className="mt-9">
                <legend className="mb-3 text-[16px] font-semibold text-ink-900">When should care start?</legend>
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                  {(
                    [
                      ["today", "Today"],
                      ["tomorrow", "Tomorrow"],
                      ["this-week", "This week"],
                      ["not-sure", "Not sure yet"],
                    ] as const
                  ).map(([v, label]) => (
                    <OptionCard
                      key={v}
                      name="startWhen"
                      checked={form.startWhen === v}
                      onChange={() => update("startWhen", v)}
                      title={label}
                      compact
                    />
                  ))}
                </div>
                <FieldError id="startWhen" msg={errors.startWhen} />
              </fieldset>

              <fieldset className="mt-9">
                <legend className="mb-3 text-[16px] font-semibold text-ink-900">
                  Preferences <span className="font-normal text-ink-500">(optional)</span>
                </legend>
                <div className="grid grid-cols-3 gap-2.5">
                  {(
                    [
                      ["any", "Either"],
                      ["female", "Female"],
                      ["male", "Male"],
                    ] as const
                  ).map(([v, label]) => (
                    <OptionCard
                      key={v}
                      name="gender"
                      checked={form.gender === v}
                      onChange={() => update("gender", v)}
                      title={label}
                      compact
                    />
                  ))}
                </div>
                <p className="mb-3 mt-6 text-[15px] text-ink-700">Languages spoken at home</p>
                <div className="flex flex-wrap gap-2">
                  {LANGUAGES.map((lang) => {
                    const on = form.languages.includes(lang);
                    return (
                      <label
                        key={lang}
                        className={[
                          "cursor-pointer rounded-full px-4 py-2 text-[15px] transition-colors",
                          "has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-marigold-500",
                          on ? "bg-teal-700 font-semibold text-white" : "bg-white text-ink-800 ring-1 ring-inset ring-ink-200 hover:ring-ink-300",
                        ].join(" ")}
                      >
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={on}
                          onChange={() =>
                            update("languages", on ? form.languages.filter((l) => l !== lang) : [...form.languages, lang])
                          }
                        />
                        {lang}
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            </StepShell>
          )}

          {step === 2 && (
            <StepShell
              headingRef={headingRef}
              title="About the patient"
              subtitle="This helps us send the right person. Share as much or as little as you like."
            >
              <div className="grid gap-5 sm:grid-cols-[1fr_8rem]">
                <TextField
                  label="Patient’s name"
                  optional
                  value={form.patientName}
                  onChange={(v) => update("patientName", v)}
                  autoComplete="off"
                />
                <TextField
                  label="Age"
                  optional
                  value={form.patientAge}
                  onChange={(v) => update("patientAge", v.replace(/[^\d]/g, "").slice(0, 3))}
                  inputMode="numeric"
                />
              </div>
              <TextArea
                className="mt-5"
                label="Health condition and needs"
                optional
                hint="For example: recovering from hip surgery, uses a walker, needs insulin twice a day."
                value={form.notes}
                onChange={(v) => update("notes", v)}
              />

              <fieldset className="mt-9">
                <legend className="mb-3 text-[16px] font-semibold text-ink-900">Area in Bangalore</legend>
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                  {localities.map((l) => (
                    <OptionCard
                      key={l.slug}
                      name="locality"
                      checked={form.locality === l.slug}
                      onChange={() => update("locality", l.slug)}
                      title={l.name}
                      compact
                    />
                  ))}
                  <OptionCard
                    name="locality"
                    checked={form.locality === "other"}
                    onChange={() => update("locality", "other")}
                    title="Somewhere else"
                    compact
                  />
                </div>
                <FieldError id="locality" msg={errors.locality} />
              </fieldset>
              <TextArea
                className="mt-5"
                label="Address"
                optional
                hint="We’ll confirm it on the call. It’s only shared with the assigned caregiver."
                value={form.address}
                onChange={(v) => update("address", v)}
                rows={2}
                autoComplete="street-address"
              />
            </StepShell>
          )}

          {step === 3 && (
            <StepShell
              headingRef={headingRef}
              title="How should we reach you?"
              subtitle="A care coordinator will call or WhatsApp you to confirm the details. Nothing is charged at this stage."
            >
              <div className="grid gap-5">
                <TextField
                  label="Your name"
                  value={form.contactName}
                  onChange={(v) => update("contactName", v)}
                  autoComplete="name"
                  error={errors.contactName}
                />
                <TextField
                  label="Mobile number (WhatsApp if possible)"
                  value={form.contactPhone}
                  onChange={(v) => update("contactPhone", v)}
                  inputMode="tel"
                  type="tel"
                  autoComplete="tel"
                  prefix="+91"
                  error={errors.contactPhone}
                />
              </div>
              <p className="mt-5 text-[14px] text-ink-500">
                We use your details only to arrange care. We don’t share them or send marketing messages.
              </p>
            </StepShell>
          )}

          {/* Navigation */}
          <div className="fixed inset-x-0 bottom-0 z-30 border-t border-ink-100 bg-white/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur lg:static lg:mt-10 lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
            <div className="mx-auto flex max-w-xl items-center gap-3 lg:mx-0 lg:max-w-none">
              {step > 0 && (
                <button type="button" onClick={() => goTo(step - 1)} className="btn-lg btn-secondary">
                  Back
                </button>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-lg btn-primary flex-1 lg:flex-none lg:min-w-[14rem]"
              >
                {step < STEPS.length - 1
                  ? "Continue"
                  : status === "sending"
                    ? "Sending…"
                    : "Send my request"}
              </button>
            </div>
          </div>
        </form>

        <Summary form={form} service={service} chosenPrice={chosenPrice?.price} />
      </div>
    </div>
  );
}

/* ─── Pieces ──────────────────────────────────────────────────────────── */

function Progress({ step, onJump }: { step: number; onJump: (n: number) => void }) {
  return (
    <nav aria-label="Booking progress">
      <p className="text-[15px] text-ink-600 sm:hidden">
        Step {step + 1} of {STEPS.length}: <span className="font-semibold text-ink-900">{STEPS[step]}</span>
      </p>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-stone-100 sm:hidden">
        <div className="h-full bg-teal-700 transition-[width] duration-300" style={{ width: `${((step + 1) / STEPS.length) * 100}%` }} />
      </div>
      <ol className="hidden items-center gap-3 sm:flex">
        {STEPS.map((label, i) => {
          const done = i < step;
          const current = i === step;
          return (
            <li key={label} className="flex flex-1 items-center gap-3 last:flex-none">
              <button
                type="button"
                onClick={() => onJump(i)}
                disabled={!done}
                aria-current={current ? "step" : undefined}
                className="flex items-center gap-2.5 disabled:cursor-default"
              >
                <span
                  className={[
                    "grid h-8 w-8 place-items-center rounded-full text-[14px] font-semibold",
                    done ? "bg-teal-700 text-white" : current ? "bg-white text-teal-800 ring-2 ring-teal-700" : "bg-stone-100 text-ink-500",
                  ].join(" ")}
                >
                  {done ? <CheckIcon size={16} strokeWidth={2.4} /> : i + 1}
                </span>
                <span className={["text-[15px]", current ? "font-semibold text-ink-900" : done ? "text-ink-700 underline-offset-4 hover:underline" : "text-ink-500"].join(" ")}>
                  {label}
                </span>
              </button>
              {i < STEPS.length - 1 && <span aria-hidden className={["h-px flex-1", done ? "bg-teal-700" : "bg-ink-200"].join(" ")} />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function StepShell({
  title,
  subtitle,
  children,
  headingRef,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  headingRef: React.RefObject<HTMLHeadingElement | null>;
}) {
  return (
    <div>
      <h1
        ref={headingRef}
        tabIndex={-1}
        className="font-display text-[32px] font-semibold leading-[1.1] tracking-[-0.025em] text-ink-900 outline-none focus-visible:outline-none sm:text-[40px]"
      >
        {title}
      </h1>
      {subtitle && <p className="mt-3 max-w-xl text-[17px] text-ink-600">{subtitle}</p>}
      <div className="mt-8">{children}</div>
    </div>
  );
}

function OptionCard({
  name,
  checked,
  onChange,
  title,
  detail,
  aside,
  compact,
}: {
  name: string;
  checked: boolean;
  onChange: () => void;
  title: string;
  detail?: string;
  aside?: string;
  compact?: boolean;
}) {
  return (
    <label
      className={[
        "relative flex cursor-pointer items-start gap-3 rounded-2xl transition-colors",
        compact ? "px-4 py-3" : "p-4",
        "has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-marigold-500",
        checked ? "bg-teal-50 ring-2 ring-inset ring-teal-700" : "bg-white ring-1 ring-inset ring-ink-200 hover:ring-ink-300",
      ].join(" ")}
    >
      <input type="radio" name={name} checked={checked} onChange={onChange} className="sr-only" />
      {!compact && (
        <span
          aria-hidden
          className={[
            "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
            checked ? "bg-teal-700 text-white" : "ring-1 ring-inset ring-ink-300",
          ].join(" ")}
        >
          {checked && <CheckIcon size={13} strokeWidth={3} />}
        </span>
      )}
      <span className="min-w-0 flex-1">
        <span className={["block text-[16px] text-ink-900", checked ? "font-semibold" : "font-medium"].join(" ")}>{title}</span>
        {detail && <span className="mt-0.5 block text-[14px] leading-snug text-ink-600">{detail}</span>}
      </span>
      {aside && <span className="shrink-0 text-[15px] font-semibold text-ink-900">{aside}</span>}
    </label>
  );
}

function FieldError({ id, msg }: { id: string; msg?: string }) {
  if (!msg) return null;
  return (
    <p id={`${id}-error`} role="alert" className="mt-3 text-[15px] font-medium text-red-700">
      {msg}
    </p>
  );
}

function TextField({
  label,
  value,
  onChange,
  optional,
  error,
  prefix,
  type = "text",
  inputMode,
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  optional?: boolean;
  error?: string;
  prefix?: string;
  type?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  autoComplete?: string;
}) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[15px] font-semibold text-ink-900">
        {label} {optional && <span className="font-normal text-ink-500">(optional)</span>}
      </label>
      <div
        className={[
          "flex items-center rounded-xl bg-white ring-1 ring-inset transition-shadow focus-within:ring-2",
          error ? "ring-red-600 focus-within:ring-red-600" : "ring-ink-200 focus-within:ring-teal-700",
        ].join(" ")}
      >
        {prefix && <span className="pl-4 text-[17px] text-ink-500">{prefix}</span>}
        <input
          id={id}
          type={type}
          inputMode={inputMode}
          autoComplete={autoComplete}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className="h-[52px] w-full rounded-xl bg-transparent px-4 text-[17px] text-ink-900 outline-none focus-visible:outline-none"
        />
      </div>
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-[15px] font-medium text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

function TextArea({
  label,
  value,
  onChange,
  optional,
  hint,
  rows = 3,
  className,
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  optional?: boolean;
  hint?: string;
  rows?: number;
  className?: string;
  autoComplete?: string;
}) {
  const id = useId();
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-[15px] font-semibold text-ink-900">
        {label} {optional && <span className="font-normal text-ink-500">(optional)</span>}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="mb-2 mt-1 text-[14px] text-ink-500">
          {hint}
        </p>
      )}
      <textarea
        id={id}
        rows={rows}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        aria-describedby={hint ? `${id}-hint` : undefined}
        className={[
          "w-full resize-y rounded-xl bg-white px-4 py-3 text-[17px] text-ink-900 outline-none ring-1 ring-inset ring-ink-200 transition-shadow focus:ring-2 focus:ring-teal-700 focus-visible:outline-none",
          hint ? "" : "mt-2",
        ].join(" ")}
      />
    </div>
  );
}

function Summary({ form, service, chosenPrice }: { form: Form; service?: Service; chosenPrice?: string }) {
  const area = form.locality === "other" ? "Elsewhere in Bangalore" : localities.find((l) => l.slug === form.locality)?.name;
  const start = { "": "", today: "Today", tomorrow: "Tomorrow", "this-week": "This week", "not-sure": "Not decided" }[form.startWhen];
  const rows: [string, string | undefined][] = [
    ["How often", form.option || undefined],
    ["Starting", start || undefined],
    ["Caregiver", form.gender ? { any: "Male or female", female: "Female", male: "Male" }[form.gender] : undefined],
    ["Languages", form.languages.join(", ") || undefined],
    ["Area", area],
  ];
  return (
    <aside className="hidden lg:block lg:sticky lg:top-28 lg:self-start" aria-label="Your request">
      <div className="rounded-3xl bg-white p-6 ring-1 ring-ink-100">
        <p className="text-[15px] font-semibold text-teal-700">Your request</p>
        <p className="mt-1 text-[22px] font-semibold leading-tight tracking-[-0.01em] text-ink-900">
          {service?.name ?? "Choose a kind of care"}
        </p>
        <dl className="mt-5 divide-y divide-ink-100 border-y border-ink-100 text-[15px]">
          {rows.map(([k, v]) => (
            <div key={k} className="flex justify-between gap-4 py-2.5">
              <dt className="text-ink-500">{k}</dt>
              <dd className={v ? "text-right font-medium text-ink-900" : "text-ink-300"}>{v ?? "Not yet"}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-5">
          <p className="text-[14px] text-ink-500">Starting price</p>
          <p className="mt-0.5 text-[20px] font-semibold text-ink-900">
            {chosenPrice && !isAssessment(chosenPrice) ? chosenPrice : service ? "Quoted after a free call" : "Not yet"}
          </p>
        </div>
      </div>
      <ul className="mt-5 grid gap-2.5 px-1 text-[15px] text-ink-700">
        {["Nothing is charged until you confirm", "Verified, trained staff only", "Replacement within 24 hours if needed"].map((t) => (
          <li key={t} className="flex items-start gap-2.5">
            <ShieldCheckIcon size={18} className="mt-0.5 shrink-0 text-teal-700" />
            {t}
          </li>
        ))}
      </ul>
      <p className="mt-6 px-1 text-[15px] text-ink-600">
        Prefer to talk?{" "}
        <a href={site.phoneHref} className="font-semibold text-teal-700 underline underline-offset-4">
          {site.phone}
        </a>
      </p>
    </aside>
  );
}

/* ─── After sending ───────────────────────────────────────────────────── */

function whatsappSummary(form: Form, service?: Service) {
  const area = form.locality === "other" ? "Other area" : localities.find((l) => l.slug === form.locality)?.name;
  const lines = [
    "Hi, I’d like to arrange care through your website.",
    `Care: ${service?.name ?? "-"}${form.option ? ` (${form.option})` : ""}`,
    form.startWhen && `Start: ${form.startWhen.replace("-", " ")}`,
    (form.patientName || form.patientAge) && `Patient: ${[form.patientName, form.patientAge && `${form.patientAge} yrs`].filter(Boolean).join(", ")}`,
    form.notes && `Needs: ${form.notes}`,
    area && `Area: ${area}`,
    form.gender && form.gender !== "any" && `Caregiver: ${form.gender}`,
    form.languages.length > 0 && `Languages: ${form.languages.join(", ")}`,
    `Name: ${form.contactName}`,
    `Phone: ${form.contactPhone}`,
  ].filter(Boolean);
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
}

function Confirmation({ form, service, delivered }: { form: Form; service?: Service; delivered: boolean }) {
  const wa = whatsappSummary(form, service);
  return (
    <div className="container max-w-2xl py-14 sm:py-20">
      {delivered ? (
        <>
          <span className="grid h-14 w-14 place-items-center rounded-full bg-teal-700 text-white">
            <CheckIcon size={28} strokeWidth={2.4} />
          </span>
          <h1 className="mt-6 font-display text-[36px] font-semibold leading-[1.1] tracking-[-0.025em] text-ink-900 sm:text-[44px]">
            Request received
          </h1>
          <p className="mt-4 text-[18px] leading-relaxed text-ink-700">
            Thank you, {form.contactName.split(" ")[0]}. A care coordinator will call or WhatsApp you on{" "}
            <strong>{form.contactPhone}</strong> to talk through {service ? <strong>{service.name.toLowerCase()}</strong> : "your request"} and
            confirm the details.
          </p>
        </>
      ) : (
        <>
          <h1 className="font-display text-[36px] font-semibold leading-[1.1] tracking-[-0.025em] text-ink-900 sm:text-[44px]">
            One last step: send it to our team
          </h1>
          <p className="mt-4 text-[18px] leading-relaxed text-ink-700">
            Tap the button below to send your request to our care team on WhatsApp. Your details are already filled in.
          </p>
        </>
      )}

      <div className="mt-8 flex flex-wrap gap-3">
        <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-lg btn-primary">
          <WhatsAppIcon size={18} /> {delivered ? "Also message us on WhatsApp" : "Send on WhatsApp"}
        </a>
        <a href={site.phoneHref} className="btn-lg btn-secondary">
          <PhoneIcon size={18} /> Call {site.phone}
        </a>
      </div>

      <div className="mt-12 rounded-3xl bg-stone-100 p-6 sm:p-8">
        <h2 className="text-[19px] font-semibold text-ink-900">What happens next</h2>
        <ol className="mt-4 grid gap-4 text-[16px] text-ink-700">
          {[
            "A coordinator calls you to understand the situation and confirm the price.",
            "We match a caregiver, nurse or physiotherapist and share their profile with you.",
            "Care starts at home. Nothing is charged until you’ve agreed the details.",
          ].map((t, i) => (
            <li key={t} className="flex gap-3">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-[14px] font-semibold text-teal-800">{i + 1}</span>
              {t}
            </li>
          ))}
        </ol>
      </div>

      <p className="mt-8 text-[16px]">
        <Link href="/" className="link-quiet">
          Back to the homepage
        </Link>
      </p>
    </div>
  );
}
