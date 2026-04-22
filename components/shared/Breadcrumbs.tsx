"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Breadcrumbs() {
  const pathname = usePathname();

  if (!pathname || pathname === "/") {
    return null;
  }

  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-muted)]">
        <li>
          <Link href="/" className="transition hover:text-[var(--color-maroon)]">
            Home
          </Link>
        </li>
        {segments.map((segment, index) => {
          const href = `/${segments.slice(0, index + 1).join("/")}`;
          const label = segment.replace(/-/g, " ");
          const isCurrent = index === segments.length - 1;

          return (
            <li key={href} className="flex items-center gap-2">
              <span>/</span>
              {isCurrent ? (
                <span className="font-medium capitalize text-[var(--color-charcoal)]">
                  {label}
                </span>
              ) : (
                <Link
                  href={href}
                  className="capitalize transition hover:text-[var(--color-maroon)]"
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
