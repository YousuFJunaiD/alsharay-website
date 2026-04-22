import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  className?: string;
} & ComponentPropsWithoutRef<"button">;

const styles = {
  primary:
    "border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,var(--color-maroon-strong)_0%,var(--color-maroon)_100%)] text-white shadow-[0_14px_32px_rgba(91,16,24,0.26)] hover:-translate-y-0.5 hover:bg-[linear-gradient(180deg,var(--color-maroon)_0%,var(--color-maroon-dark)_100%)]",
  secondary:
    "border border-[var(--color-border-strong)] bg-[rgba(251,244,232,0.86)] text-[var(--color-charcoal)] shadow-[var(--shadow-soft)] hover:-translate-y-0.5 hover:border-[var(--color-gold)] hover:text-[var(--color-maroon)]",
  ghost:
    "text-[var(--color-maroon)] hover:bg-[rgba(91,16,24,0.06)] hover:text-[var(--color-maroon-dark)]"
};

export function Button({
  children,
  variant = "primary",
  href,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.06em] transition duration-300",
    styles[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
