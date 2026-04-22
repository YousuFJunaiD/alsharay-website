import Image from "next/image";
import Link from "next/link";

import { MainNav } from "@/components/navigation/MainNav";
import { MobileNav } from "@/components/navigation/MobileNav";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40">
      <div className="border-b border-[rgba(195,154,61,0.2)] bg-[rgba(255,251,245,0.96)] shadow-[0_12px_28px_rgba(26,16,12,0.08)] backdrop-blur-xl">
        <SectionContainer className="grid items-center gap-6 py-4 xl:grid-cols-[minmax(0,1fr)_auto] xl:py-5">
          <Link href="/" className="flex min-w-0 items-center gap-4 lg:gap-5">
            <Image
              src={siteConfig.logoPath}
              alt="Al Sharay logo"
              width={96}
              height={96}
              className="h-16 w-16 object-contain sm:h-20 sm:w-20"
              priority
            />
            <div className="min-w-0">
              <p className="font-serif text-[1.7rem] leading-none text-[var(--color-maroon)] sm:text-[2rem]">
                {siteConfig.shortName}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)] sm:text-xs">
                PU College of Science
              </p>
              <p className="mt-1 hidden font-script text-lg leading-none text-[var(--color-gold)] sm:block">
                {siteConfig.tagline}
              </p>
            </div>
          </Link>
          <div className="hidden items-center gap-3 xl:flex">
            <div className="rounded-[24px] border border-[var(--color-border)] bg-white/80 px-4 py-3 text-right shadow-[var(--shadow-soft)]">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-gold)]">
                Main Branch
              </p>
              <p className="mt-1 text-sm font-semibold text-[var(--color-charcoal)]">
                {siteConfig.location}
              </p>
              <p className="mt-1 text-xs tracking-[0.08em] text-[var(--color-muted)]">
                Since {siteConfig.foundedYear} · Academic excellence and values
              </p>
            </div>
            <Button href="/contact" variant="secondary" className="bg-white/90 px-6">
              Admission Enquiry
            </Button>
          </div>
          <div className="justify-self-end xl:hidden">
            <MobileNav />
          </div>
        </SectionContainer>
        <div className="hidden border-t border-[rgba(195,154,61,0.16)] xl:block">
          <SectionContainer className="flex items-center justify-center py-3.5">
            <div className="rounded-full border border-[rgba(195,154,61,0.16)] bg-white/70 px-3 py-2 shadow-[var(--shadow-soft)]">
              <MainNav />
            </div>
          </SectionContainer>
        </div>
      </div>
    </header>
  );
}
