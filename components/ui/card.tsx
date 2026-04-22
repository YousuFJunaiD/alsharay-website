import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[26px] border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)] sm:rounded-[30px] sm:p-6",
        className
      )}
      {...props}
    />
  );
}
