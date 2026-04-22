import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SectionContainer({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </section>
  );
}
