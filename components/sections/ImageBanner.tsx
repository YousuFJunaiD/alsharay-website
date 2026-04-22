import Image from "next/image";

export function ImageBanner({
  src = "/images/campus-placeholder.svg",
  alt
}: {
  src?: string;
  alt: string;
}) {
  return (
    <div className="overflow-hidden rounded-[32px] border border-[var(--color-border)]">
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={900}
        className="h-auto w-full object-cover"
        priority={false}
      />
    </div>
  );
}
