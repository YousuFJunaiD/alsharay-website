import { Card } from "@/components/ui/card";

export function TestimonialCard({
  quote,
  name,
  role
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <Card>
      <p className="text-base leading-8 text-[var(--color-charcoal)]">"{quote}"</p>
      <p className="mt-6 text-sm font-semibold text-[var(--color-maroon)]">{name}</p>
      <p className="text-sm text-[var(--color-muted)]">{role}</p>
    </Card>
  );
}
