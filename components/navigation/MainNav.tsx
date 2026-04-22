"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

import { mainNavigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary navigation" className="w-full">
      <ul className="flex items-center justify-center gap-1.5">
        {mainNavigation.map((item) => {
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

          if (!item.children) {
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] transition duration-200",
                    active
                      ? "bg-[linear-gradient(180deg,rgba(195,154,61,0.2),rgba(195,154,61,0.08))] text-[var(--color-maroon)] shadow-[inset_0_0_0_1px_rgba(195,154,61,0.22)]"
                      : "text-[var(--color-charcoal)] hover:bg-[rgba(91,16,24,0.05)] hover:text-[var(--color-maroon)]"
                  )}
                >
                  {item.title}
                </Link>
              </li>
            );
          }

          return (
            <li key={item.href} className="group relative">
              <Link
                href={item.href}
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-4 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] transition duration-200",
                  active
                    ? "bg-[linear-gradient(180deg,rgba(195,154,61,0.2),rgba(195,154,61,0.08))] text-[var(--color-maroon)] shadow-[inset_0_0_0_1px_rgba(195,154,61,0.22)]"
                    : "text-[var(--color-charcoal)] hover:bg-[rgba(91,16,24,0.05)] hover:text-[var(--color-maroon)]"
                )}
              >
                {item.title}
                <ChevronDown className="h-4 w-4" />
              </Link>
              <div className="pointer-events-none invisible absolute left-1/2 top-full z-30 mt-4 min-w-[340px] -translate-x-1/2 translate-y-2 rounded-[30px] border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,#fffdfa_0%,#fbf4e8_100%)] p-3 opacity-0 shadow-[0_26px_60px_rgba(28,23,21,0.12)] transition duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <div className="mb-2 px-4 pt-2 text-[10px] uppercase tracking-[0.24em] text-[var(--color-gold)]">
                  Browse Section
                </div>
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block rounded-2xl px-4 py-3 text-sm text-[var(--color-charcoal)] transition hover:bg-[rgba(195,154,61,0.12)] hover:text-[var(--color-maroon)]"
                  >
                    {child.title}
                  </Link>
                ))}
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
