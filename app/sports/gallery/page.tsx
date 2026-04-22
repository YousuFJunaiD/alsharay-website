import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { GalleryGrid } from "@/components/cards/GalleryGrid";

export const metadata = createMetadata({
  title: "Sports Gallery",
  description: "A sports gallery area ready for approved Al Sharay event and athletics photography.",
  path: "/sports/gallery"
});

export default function SportsGalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Sports Archive"
        title="Sports Gallery"
        description="This gallery structure is ready for real athletics photography, tournament albums, and memorable team moments."
      />
      <SectionContainer className="py-16">
        <GalleryGrid />
      </SectionContainer>
    </>
  );
}
