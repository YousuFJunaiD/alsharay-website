import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[30px] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-card)]",
        className
      )}
      {...props}
    />
  );
}
