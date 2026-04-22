import { Card } from "@/components/ui/card";

export function FacilityCard({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <Card className="bg-[linear-gradient(180deg,#fff_0%,#fbf5ec_100%)]">
      <h3 className="text-xl font-semibold text-[var(--color-charcoal)]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{description}</p>
    </Card>
  );
}
