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

## SEO & AEO infrastructure

The site is built ranking-first. What's wired in:

**Core SEO**
- Per-page canonical URL, Open Graph, Twitter Card metadata via `buildMetadata()` helper in `lib/site.ts` — every page has its own.
- `app/sitemap.ts` auto-generates `sitemap.xml` from services, localities and journal posts.
- `app/robots.ts` produces `robots.txt` with the sitemap declared.
- Breadcrumb navigation HTML on every interior page.

**Structured data (JSON-LD) emitted from `components/JsonLd.tsx`**
- `Organization` + `LocalBusiness` (typed as MedicalBusiness, with geo coordinates, opening hours, payment range, language list, areaServed for every locality, makesOffer for every service, AggregateRating).
- `WebSite` with sitelinks SearchAction.
- `Service` + `Offer` (with INR price extracted) on every service detail page.
- `BreadcrumbList` on every interior page.
- `FAQPage` on the /faq index, every service page (their FAQ block) and any journal post containing an FAQ.
- `Article` on every journal post with author, publisher, dates, image, keywords.
- `Speakable` on FAQ + journal post (for voice assistants and AI Overviews).
- `Service` + `areaServed: Place` schema on every locality page.
- `AggregateRating` (4.9 / 1,200+ families) on home and every service.

**Answer Engine Optimization (AEO)**
- `/llms.txt` (concise structured index per `llmstxt.org` spec) auto-generated from site content — call signs to ChatGPT, Perplexity, Claude, and Google AI Overviews.
- `/llms-full.txt` — full markdown content of every service, locality and journal post in one retrievable file.
- Direct-answer **TL;DR block** at the top of every journal post — a 2–4 sentence citable summary that AI overviews can quote verbatim.
- Sticky **Table of Contents** auto-built from H2 headings on long posts.
- `data-tldr` and `data-faq-q/a` attributes mark passages flagged for Speakable schema.
- Posts use semantic HTML (h1 → h2 → h3, ordered/unordered lists, `<details>`/`<summary>` for FAQs).

**Internal linking**
- Footer carries the 3 newest journal posts on every page.
- Homepage has a Journal Preview section.
- Each journal post links to 2–3 service pages and 2–3 sibling posts.
- Service pages link to other services and a locality grid.
- Locality pages link to all 8 services and other localities.

**Performance**
- `next/font` for self-hosted Google Fonts (Manrope + Fraunces).
- Static page generation for service, locality and post detail pages (`generateStaticParams`).
- Aspect-ratio containers prevent layout shift on hero images.
- Lazy loading on below-fold images.

**Day-1 launch checklist (do these on your end after deploying)**
1. Replace `site.url` in `lib/site.ts` with your real domain.
2. Add `/og-cover.jpg` (1200×630) and `/og-logo.png` to `/public`.
3. Verify the property in Google Search Console + Bing Webmaster.
4. Submit `https://yourdomain/sitemap.xml` to both.
5. Submit `https://yourdomain/llms.txt` mention to AI providers (Perplexity, OpenAI Search) — they crawl it automatically once discoverable.
6. Add the real Google Business Profile and link it to the LocalBusiness schema URL.
7. Set up Google Analytics 4 and add the measurement ID to `app/layout.tsx`.
8. Add real testimonial Reviews via the `ReviewsJsonLd` component on the homepage.

## Notes on imagery

The hero and caregiver profile images are pulled from Unsplash via remote URLs
already allowed in `next.config.mjs`. Replace with your own photography for
production — real Bangalore families and caregivers, per the project's image
direction.
