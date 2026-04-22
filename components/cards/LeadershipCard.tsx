import { Card } from "@/components/ui/card";

export function LeadershipCard({
  name,
  role,
  description
}: {
  name: string;
  role: string;
  description: string;
}) {
  return (
    <Card>
      <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-gold)]">{role}</p>
      <h3 className="mt-3 text-2xl font-semibold text-[var(--color-charcoal)]">{name}</h3>
      <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{description}</p>
    </Card>
  );
}
