type AccordionItem = {
  title: string;
  content: string;
};

export function Accordion({ items }: { items: AccordionItem[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details
          key={item.title}
          className="group rounded-3xl border border-[var(--color-border)] bg-white p-5"
        >
          <summary className="cursor-pointer list-none text-base font-semibold text-[var(--color-charcoal)]">
            {item.title}
          </summary>
          <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
            {item.content}
          </p>
        </details>
      ))}
    </div>
  );
}
