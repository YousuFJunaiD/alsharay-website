import { Card } from "@/components/ui/card";

export function ResultHighlightCard({
  label,
  value
}: {
  label: string;
  value: string;
}) {
  return (
    <Card className="relative overflow-hidden border-[var(--color-border-strong)] bg-[linear-gradient(180deg,#fffdfa_0%,#f8efe0_100%)]">
      <div className="absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-gold),transparent)]" />
      <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-gold)]">
        Academic Merit
      </p>
      <p className="mt-4 font-serif text-5xl font-semibold text-[var(--color-maroon)]">{value}</p>
      <p className="mt-4 text-sm uppercase tracking-[0.2em] text-[var(--color-muted)]">
        {label}
      </p>
    </Card>
  );
}
