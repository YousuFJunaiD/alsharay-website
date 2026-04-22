import { Card } from "@/components/ui/card";

export function ContactInfoCard({
  title,
  lines
}: {
  title: string;
  lines: string[];
}) {
  return (
    <Card>
      <h3 className="text-xl font-semibold text-[var(--color-charcoal)]">{title}</h3>
      <div className="mt-4 space-y-2 text-sm leading-7 text-[var(--color-muted)]">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </Card>
  );
}
