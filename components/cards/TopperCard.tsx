import { Card } from "@/components/ui/card";

export function TopperCard({
  name,
  score,
  note
}: {
  name: string;
  score: string;
  note: string;
}) {
  return (
    <Card className="relative overflow-hidden border-[var(--color-border-strong)] bg-[linear-gradient(180deg,#fffefc_0%,#f8efe1_100%)]">
      <div className="absolute right-5 top-5 rounded-full border border-[rgba(195,154,61,0.34)] bg-[rgba(195,154,61,0.12)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-maroon)]">
        Merit Profile
      </div>
      <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-gold)]">
        Featured Achiever
      </p>
      <h3 className="mt-4 max-w-[14rem] font-serif text-3xl font-semibold text-[var(--color-charcoal)]">
        {name}
      </h3>
      <p className="mt-4 inline-flex rounded-full border border-[rgba(195,154,61,0.34)] bg-[rgba(91,16,24,0.04)] px-4 py-2 text-lg font-semibold text-[var(--color-maroon)]">
        {score}
      </p>
      <p className="mt-5 text-sm leading-7 text-[var(--color-muted)]">{note}</p>
    </Card>
  );
}
