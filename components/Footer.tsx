import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { localities } from "@/lib/locations";
import { getRecentPosts } from "@/lib/posts";
import { categories as shopCategories } from "@/lib/shop";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { LogoMark } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-ink-100 bg-white">
      <div className="container py-16 grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <LogoMark size={36} pulse={false} />
            <span className="font-display text-xl">{site.name}</span>
          </div>
          <p className="mt-4 text-[15px] text-ink-600 max-w-sm">
            Compassionate, verified caregivers and patient attendants for Bangalore families.
            Calm care, transparent pricing, replacement guaranteed.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <a href={site.whatsappHref} className="btn-sm btn-secondary gap-1.5">
              <WhatsAppIcon size={16} /> WhatsApp us
            </a>
            <a href={site.phoneHref} className="btn-sm btn-secondary gap-1.5">
              <PhoneIcon size={16} /> {site.phone}
            </a>
          </div>

          <p className="mt-6 text-xs text-ink-500">{site.hours}</p>
        </div>

        <FooterColumn title="Services">
          {services.slice(0, 8).map((s) => (
            <FooterLink key={s.slug} href={`/services/${s.slug}`}>
              {s.name}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Locations">
          {localities.map((l) => (
            <FooterLink key={l.slug} href={`/locations/${l.slug}`}>
              {l.name}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Shop">
          <FooterLink href="/shop">All products</FooterLink>
          {shopCategories.map((c) => (
            <FooterLink key={c.slug} href={`/shop#${c.slug}`}>
              {c.name}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Company">
          <FooterLink href="/about">About us</FooterLink>
          <FooterLink href="/pricing">Pricing</FooterLink>
          <FooterLink href="/journal">The Care Journal</FooterLink>
          <FooterLink href="/tools">Care tools</FooterLink>
          <FooterLink href="/careers">Careers · We're hiring</FooterLink>
          <FooterLink href="/faq">FAQ</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
          <FooterLink href="/book">Book a caregiver</FooterLink>
        </FooterColumn>
      </div>

      {/* Journal preview row — drives internal linking + search exposure */}
      <div className="border-t border-ink-100/80 bg-cream-50/60">
        <div className="container py-10">
          <div className="flex items-end justify-between gap-4 mb-5">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
              From The Care Journal
            </h4>
            <Link href="/journal" className="link-quiet text-sm text-ink-600">
              All posts →
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {getRecentPosts(3).map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/journal/${p.slug}`}
                  className="group block rounded-2xl bg-white ring-1 ring-ink-100 p-4 hover:shadow-soft transition"
                >
                  <div className="text-[11px] uppercase tracking-[0.14em] text-teal-700 font-semibold">
                    {p.category}
                  </div>
                  <div className="mt-1.5 font-display text-[15px] leading-tight text-ink-900 group-hover:text-teal-800 transition">
                    {p.title}
                  </div>
                  <div className="mt-1 text-[12px] text-ink-500">{p.readMinutes} min read</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-100/80">
        <div className="container py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-ink-500">
          <p>
            © {new Date().getFullYear()} {site.name} · Made with care in Bangalore
          </p>
          <p>
            <span className="text-ink-400">Verified caregivers · Background checked · 24×7 support</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-[14.5px] text-ink-700">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="link-quiet">
        {children}
      </Link>
    </li>
  );
}
