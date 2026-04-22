import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";

import { footerColumns, footerContact } from "@/data/footer";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[linear-gradient(180deg,#231a18_0%,#150f0f_100%)] text-[rgba(255,247,232,0.86)]">
      <SectionContainer className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="flex items-center gap-4">
              <Image
                src={siteConfig.logoPath}
                alt="Al Sharay logo"
                width={96}
                height={96}
                className="h-20 w-20 object-contain"
              />
              <div>
                <p className="font-serif text-3xl text-white">{siteConfig.shortName}</p>
                <p className="text-xs uppercase tracking-[0.24em] text-[rgba(255,247,232,0.68)]">
                  PU College
                </p>
                <p className="mt-1 font-script text-xl text-[var(--color-gold-soft)]">
                  {siteConfig.tagline}
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-7 text-[rgba(255,247,232,0.72)]">
              A heritage-rich institution in Gulbarga known for disciplined academics, strong results, thoughtful mentoring, and a visible culture of educational excellence.
            </p>
            <div className="mt-6 w-24 border-t border-[rgba(195,154,61,0.55)]" />
            <div className="mt-6 space-y-3 text-sm">
              <p className="flex gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-[var(--color-gold-soft)]" />
                {footerContact.address}
              </p>
              <p className="flex gap-3">
                <Phone className="mt-1 h-4 w-4 shrink-0 text-[var(--color-gold-soft)]" />
                {footerContact.phone}
              </p>
              <p className="flex gap-3">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-[var(--color-gold-soft)]" />
                {footerContact.email}
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, index) => (
                <span
                  key={index}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(195,154,61,0.22)] bg-white/5 text-[var(--color-gold-soft)]"
                >
                  <Icon className="h-4 w-4" />
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="font-serif text-xl text-white">{column.title}</h3>
                <div className="mt-3 w-16 border-t border-[rgba(195,154,61,0.5)]" />
                <div className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block text-sm text-[rgba(255,247,232,0.72)] transition hover:text-[var(--color-gold-soft)]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-[rgba(195,154,61,0.16)] pt-6 text-sm text-[rgba(255,247,232,0.62)]">
          (c) {new Date().getFullYear()} Al Sharay PU College. All rights reserved.
        </div>
      </SectionContainer>
    </footer>
  );
}
