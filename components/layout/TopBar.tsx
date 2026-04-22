import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { contactDetails } from "@/data/contact";
import { utilityLinks } from "@/data/navigation";
import { SectionContainer } from "@/components/shared/SectionContainer";

export function TopBar() {
  return (
    <div className="hidden border-b border-[rgba(195,154,61,0.22)] bg-[linear-gradient(90deg,var(--color-maroon-dark)_0%,var(--color-maroon)_45%,var(--color-maroon-dark)_100%)] text-[rgba(255,244,228,0.84)] lg:block">
      <SectionContainer className="flex items-center justify-between gap-5 py-2">
        <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.16em]">
          {utilityLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-4 text-[11px] tracking-[0.12em] text-[rgba(255,244,228,0.78)]">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" />
            {contactDetails.mapLabel}
          </span>
          <span className="inline-flex items-center gap-2">
            <Phone className="h-3.5 w-3.5" />
            {contactDetails.mobile}
          </span>
          <span className="inline-flex items-center gap-2">
            <Mail className="h-3.5 w-3.5" />
            {contactDetails.email}
          </span>
        </div>
      </SectionContainer>
    </div>
  );
}
