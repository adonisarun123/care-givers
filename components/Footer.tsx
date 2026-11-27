import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { localities } from "@/lib/locations";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { LogoWordmark } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="mt-24 bg-ink-900 text-ink-200">
      <div className="container grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <LogoWordmark
            size={36}
            showCity={false}
            textClassName="font-display text-[19px] font-bold tracking-[-0.02em] text-white"
          />
          <p className="mt-5 max-w-sm text-[16px] leading-relaxed text-ink-300">
            Verified caregivers and patient attendants for families across Bangalore.
          </p>
          <div className="mt-6 space-y-2 text-[16px]">
            <a href={site.phoneHref} className="flex items-center gap-2.5 text-white hover:text-marigold-300">
              <PhoneIcon size={18} /> <span>{site.phone}</span>
            </a>
            <a href={site.whatsappHref} className="flex items-center gap-2.5 text-white hover:text-marigold-300">
              <WhatsAppIcon size={18} /> WhatsApp {site.whatsapp}
            </a>
            <a href={`mailto:${site.email}`} className="block pl-[30px] text-ink-300 hover:text-white">
              {site.email}
            </a>
          </div>
          <p className="mt-5 text-[14px] text-ink-400">{site.hours}</p>
        </div>

        <FooterColumn title="Care services">
          {services.map((s) => (
            <FooterLink key={s.slug} href={`/services/${s.slug}`}>
              {s.name}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Areas we serve">
          {localities.map((l) => (
            <FooterLink key={l.slug} href={`/locations/${l.slug}`}>
              {l.name}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Company">
          <FooterLink href="/about">About us</FooterLink>
          <FooterLink href="/pricing">Pricing</FooterLink>
          <FooterLink href="/shop">Care equipment</FooterLink>
          <FooterLink href="/journal">Care guides</FooterLink>
          <FooterLink href="/tools">Free care tools</FooterLink>
          <FooterLink href="/careers">Work with us</FooterLink>
          <FooterLink href="/faq">Questions</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
        </FooterColumn>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-2 py-6 text-[14px] text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}, Bangalore
          </p>
          <p>{site.address}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-[15px] font-semibold text-white">{title}</h2>
      <ul className="mt-4 space-y-2.5 text-[15px]">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-ink-300 transition-colors hover:text-white">
        {children}
      </Link>
    </li>
  );
}
