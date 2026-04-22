import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-[rgba(184,138,42,0.14)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-maroon)]",
        className
      )}
      {...props}
    />
  );
}
