import { Card } from "@/components/ui/card";

export function EmptyState({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <Card className="border-dashed bg-[var(--color-cream)] text-center">
      <h3 className="text-xl font-semibold text-[var(--color-charcoal)]">{title}</h3>
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
        {description}
      </p>
    </Card>
  );
}
