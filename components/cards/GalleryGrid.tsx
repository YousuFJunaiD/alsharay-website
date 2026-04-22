import Image from "next/image";

const placeholders = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  title: `Gallery frame ${index + 1}`
}));

export function GalleryGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {placeholders.map((item) => (
        <div
          key={item.id}
          className="overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-white"
        >
          <Image
            src="/images/campus-placeholder.svg"
            alt={item.title}
            width={800}
            height={520}
            className="h-56 w-full object-cover"
          />
          <div className="p-5">
            <h3 className="text-lg font-semibold text-[var(--color-charcoal)]">{item.title}</h3>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              Replace this placeholder with institutional photography, event albums, or achievement visuals.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
