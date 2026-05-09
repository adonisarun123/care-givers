# Care Givers — Bangalore Home Caregivers Platform

A premium, trust-first home caregiving website for Bangalore families. Built with
Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## What's inside

- **Homepage** with hero, trust strip, services, how-it-works, caregiver profiles,
  stats, transparent pricing, "why us", testimonials, locations preview, FAQ and
  final CTA.
- **/book** — a 6-step "book now" flow with progress bar, summary sidebar and
  confirmation screen. Validates each step. Mobile-first.
- **/services** — index + dynamic `/services/[slug]` detail pages for 8 services
  (elder, patient, live-in, post-surgery, dementia, bedridden, night, female).
  Each has unique copy, pricing tiers, "best for", inclusions and FAQs — all
  pre-written for SEO.
- **/locations** — index + dynamic `/locations/[slug]` for 8 Bangalore zones
  (Indiranagar, Whitefield, HSR, Koramangala, Jayanagar, Electronic City, Hebbal,
  Malleshwaram). Hospitals, response time and zone-specific copy on each.
- **/about**, **/pricing**, **/faq**, **/contact** — supporting pages.
- **Sticky mobile CTA**, **trust micro-row**, **language matching**, **WhatsApp
  shortcuts** baked in throughout.
- **404 page** with a helpful redirect to booking.

## Design system

- Palette: soft teal (`teal-600` `#2F6E78`), sage (`sage-600` `#467853`), warm cream
  (`cream-50` `#FBF8F3`), ink for text. Calm, healthcare-trust aesthetic.
- Typography: **Manrope** for UI, **Fraunces** for display headings (loaded via
  `next/font/google`).
- All colours, shadows, animations and components are defined in `tailwind.config.ts`
  and `app/globals.css`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

To build for production:

```bash
npm run build
npm start
```

## File map

```
app/
  layout.tsx              # Fonts, navbar, footer, sticky CTA
  page.tsx                # Homepage
  globals.css             # Design tokens + reusable component classes
  not-found.tsx           # 404
  book/page.tsx           # Booking flow entry
  services/page.tsx       # Services index
  services/[slug]/page.tsx
  locations/page.tsx      # Locations index
  locations/[slug]/page.tsx
  about/, pricing/, faq/, contact/
components/
  Navbar.tsx, Footer.tsx, StickyMobileCta.tsx
  Hero.tsx, TrustStrip.tsx, ServicesGrid.tsx
  HowItWorks.tsx, CaregiverProfiles.tsx, Stats.tsx
  PricingPreview.tsx, WhyUs.tsx, Testimonials.tsx
  LocationsPreview.tsx, FaqSection.tsx, FinalCta.tsx
  BookingFlow.tsx
  icons.tsx               # Inline SVG icon set (no icon library dependency)
  ui/Container.tsx
lib/
  site.ts                 # Site name, tagline, phone, WhatsApp, hours
  services.ts             # 8 service definitions (copy + pricing + FAQs)
  locations.ts            # 8 Bangalore zones
  cn.ts                   # className combiner
```

## Customising

- **Brand name, phone, WhatsApp, address** → `lib/site.ts`
- **Services & pricing** → `lib/services.ts`
- **Localities & coverage** → `lib/locations.ts`
- **Colour palette / typography** → `tailwind.config.ts`

The booking flow currently confirms locally (no backend). To wire it to a real
backend or CRM, hook into the `setSubmitted(true)` block inside
`components/BookingFlow.tsx` — POST the `form` state to your endpoint there.

## Notes on imagery

The hero and caregiver profile images are pulled from Unsplash via remote URLs
already allowed in `next.config.mjs`. Replace with your own photography for
production — real Bangalore families and caregivers, per the project's image
direction.
