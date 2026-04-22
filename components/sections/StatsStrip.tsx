import { Card } from "@/components/ui/card";

export function StatsStrip({
  stats
}: {
  stats: { label: string; value: string }[];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <Card
          key={stat.label}
          className="relative overflow-hidden border-[var(--color-border-strong)] bg-[linear-gradient(180deg,#fffdfa_0%,#f6ebdb_100%)]"
        >
          <div className="absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-gold),transparent)]" />
          <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-gold)]">
            Institutional Stat
          </p>
          <p className="mt-4 font-serif text-4xl font-semibold text-[var(--color-maroon)]">
            {stat.value}
          </p>
          <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[var(--color-muted)]">
            {stat.label}
          </p>
        </Card>
      ))}
    </div>
  );
}
