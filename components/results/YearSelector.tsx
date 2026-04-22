"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { resultEntries } from "@/data/results";
import { cn } from "@/lib/utils";

export function YearSelector() {
  const pathname = usePathname();

  return (
    <div className="rounded-[30px] border border-[var(--color-border)] bg-[linear-gradient(180deg,#fffdfa_0%,#f8efe0_100%)] p-4 shadow-[var(--shadow-soft)]">
      <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[var(--color-gold)]">
        Explore Year-Wise Results
      </p>
      <div className="flex flex-wrap gap-3">
      {resultEntries.map((entry) => {
        const href = `/results/${entry.slug}`;
        const active = pathname === href;

        return (
          <Link
            key={entry.slug}
            href={href}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-semibold transition",
              active
                ? "border-[var(--color-maroon)] bg-[linear-gradient(180deg,var(--color-maroon-strong)_0%,var(--color-maroon)_100%)] text-white shadow-[0_10px_24px_rgba(91,16,24,0.2)]"
                : "border-[var(--color-border-strong)] bg-white text-[var(--color-charcoal)] hover:border-[var(--color-gold)] hover:text-[var(--color-maroon)]"
            )}
          >
            {entry.year}
          </Link>
        );
      })}
      </div>
    </div>
  );
}
