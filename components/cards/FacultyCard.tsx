import { Card } from "@/components/ui/card";

export function FacultyCard({
  name,
  subject,
  note
}: {
  name: string;
  subject: string;
  note: string;
}) {
  return (
    <Card>
      <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-gold)]">{subject}</p>
      <h3 className="mt-2 text-xl font-semibold text-[var(--color-charcoal)]">{name}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{note}</p>
    </Card>
  );
}
