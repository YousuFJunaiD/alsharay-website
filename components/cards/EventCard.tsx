import Link from "next/link";

import { Card } from "@/components/ui/card";

export function EventCard({
  title,
  date,
  description,
  href
}: {
  title: string;
  date: string;
  description: string;
  href: string;
}) {
  return (
    <Card>
      <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-gold)]">{date}</p>
      <h3 className="mt-3 text-xl font-semibold text-[var(--color-charcoal)]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{description}</p>
      <Link href={href} className="mt-5 inline-flex text-sm font-semibold text-[var(--color-maroon)]">
        Explore details
      </Link>
    </Card>
  );
}
