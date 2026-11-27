import { NextResponse } from "next/server";

/**
 * Receives booking requests from /book.
 *
 * Delivery: set BOOKING_WEBHOOK_URL (e.g. a Zapier / Make / Pipedrive / Google
 * Apps Script webhook) and every request is POSTed there as JSON. Until it is
 * set, the response says delivered:false and the confirmation screen asks the
 * family to send the request on WhatsApp instead, so nothing is lost.
 */

type Body = Record<string, unknown>;

const str = (v: unknown, max = 500) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: bots fill every field. Pretend success, deliver nothing.
  if (str(body.website)) return NextResponse.json({ ok: true, delivered: true });

  const phone = str(body.contactPhone, 20).replace(/\D/g, "");
  const name = str(body.contactName, 100);
  if (name.length < 2 || !(phone.length === 10 || (phone.length === 12 && phone.startsWith("91")))) {
    return NextResponse.json({ ok: false, error: "Name and a valid mobile number are required" }, { status: 422 });
  }

  const lead = {
    receivedAt: new Date().toISOString(),
    source: str(body.serviceSlug, 60).startsWith("callback") ? "website/callback" : "website/book",
    service: str(body.serviceName, 120) || str(body.serviceSlug, 60),
    serviceSlug: str(body.serviceSlug, 60),
    option: str(body.option, 120),
    startWhen: str(body.startWhen, 20),
    gender: str(body.gender, 10),
    languages: Array.isArray(body.languages) ? body.languages.map((l) => str(l, 20)).slice(0, 10) : [],
    patientName: str(body.patientName, 100),
    patientAge: str(body.patientAge, 3),
    notes: str(body.notes, 2000),
    locality: str(body.locality, 60),
    address: str(body.address, 500),
    contactName: name,
    contactPhone: phone.length === 10 ? `+91${phone}` : `+${phone}`,
  };

  const url = process.env.BOOKING_WEBHOOK_URL;
  if (!url) {
    console.warn("[booking] BOOKING_WEBHOOK_URL not set; request not forwarded", lead.service);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(8000),
    });
    return NextResponse.json({ ok: true, delivered: res.ok });
  } catch (err) {
    console.error("[booking] webhook failed", err);
    return NextResponse.json({ ok: true, delivered: false });
  }
}
