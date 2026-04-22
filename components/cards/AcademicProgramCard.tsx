import { Card } from "@/components/ui/card";

export function AcademicProgramCard({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <Card>
      <h3 className="text-xl font-semibold text-[var(--color-charcoal)]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{description}</p>
    </Card>
  );
}
