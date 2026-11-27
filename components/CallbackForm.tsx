"use client";

import { useId, useState } from "react";
import { CheckIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { site } from "@/lib/site";

/**
 * Two-field "call me back" form. Sends to /api/booking (forwarded to
 * BOOKING_WEBHOOK_URL). If no webhook is configured, the family is handed a
 * pre-filled WhatsApp message instead, so the request is never lost.
 *
 * Copy deliberately promises no response time. When operations commit to one,
 * pass it in via `promise`, e.g. "We call back within 15 minutes, 8am–9pm."
 */
export function CallbackForm({
  tone = "light",
  promise = "A care coordinator will call you back shortly.",
  source = "callback",
}: {
  tone?: "light" | "dark";
  promise?: string;
  source?: string;
}) {
  const id = useId();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [state, setState] = useState<"idle" | "sending" | "sent" | "fallback">("idle");

  const dark = tone === "dark";

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const digits = phone.replace(/\D/g, "");
    if (name.trim().length < 2) return setError("Enter your name.");
    if (!(digits.length === 10 || (digits.length === 12 && digits.startsWith("91"))))
      return setError("Enter a 10-digit mobile number.");
    setError(null);
    setState("sending");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contactName: name,
          contactPhone: phone,
          serviceName: "Callback request",
          serviceSlug: source,
          website,
        }),
      });
      const delivered = res.ok && (await res.json()).delivered === true;
      setState(delivered ? "sent" : "fallback");
    } catch {
      setState("fallback");
    }
  }

  const waHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    `Hi, please call me back about care at home.\nName: ${name}\nPhone: ${phone}`,
  )}`;

  if (state === "sent" || state === "fallback") {
    return (
      <div
        role="status"
        className={[
          "rounded-2xl p-5",
          dark ? "bg-white/10 text-white" : "bg-teal-50 text-ink-900 ring-1 ring-teal-100",
        ].join(" ")}
      >
        {state === "sent" ? (
          <p className="flex items-start gap-3 text-[16px]">
            <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal-700 text-white">
              <CheckIcon size={14} strokeWidth={2.6} />
            </span>
            <span>
              <strong>Thanks, {name.split(" ")[0]}.</strong> {promise} We’ll call {phone}.
            </span>
          </p>
        ) : (
          <>
            <p className="text-[16px]">
              <strong>One last step:</strong> tap below to send your callback request to our team on
              WhatsApp. Your details are already filled in.
            </p>
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-md btn-whatsapp mt-4">
              <WhatsAppIcon size={18} /> Send on WhatsApp
            </a>
          </>
        )}
      </div>
    );
  }

  const inputCls = [
    "h-12 w-full rounded-xl px-4 text-[16px] outline-none ring-1 ring-inset transition-shadow focus:ring-2 focus-visible:outline-none",
    dark
      ? "bg-white/10 text-white placeholder:text-white/60 ring-white/25 focus:ring-marigold-300"
      : "bg-white text-ink-900 placeholder:text-ink-400 ring-ink-200 focus:ring-teal-700",
  ].join(" ");

  return (
    <form onSubmit={submit} noValidate aria-describedby={`${id}-note`}>
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <input tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>
      <div className="grid gap-2.5 sm:grid-cols-[1fr_1fr_auto]">
        <label className="sr-only" htmlFor={`${id}-name`}>
          Your name
        </label>
        <input
          id={`${id}-name`}
          className={inputCls}
          placeholder="Your name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="sr-only" htmlFor={`${id}-phone`}>
          Mobile number
        </label>
        <input
          id={`${id}-phone`}
          className={inputCls}
          placeholder="Mobile number"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          aria-invalid={!!error}
        />
        <button
          type="submit"
          disabled={state === "sending"}
          className={["btn-md h-12 whitespace-nowrap", dark ? "bg-marigold-500 text-ink-900 hover:bg-marigold-300" : "btn-primary"].join(" ")}
        >
          <PhoneIcon size={17} /> {state === "sending" ? "Sending…" : "Call me back"}
        </button>
      </div>
      {error ? (
        <p role="alert" className={["mt-2 text-[15px] font-medium", dark ? "text-marigold-300" : "text-red-700"].join(" ")}>
          {error}
        </p>
      ) : (
        <p id={`${id}-note`} className={["mt-2 text-[14px]", dark ? "text-white/70" : "text-ink-500"].join(" ")}>
          {promise} No obligation to book.
        </p>
      )}
    </form>
  );
}
