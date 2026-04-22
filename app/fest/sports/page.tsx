import { createMetadata } from "@/lib/metadata";
import { GenericContentPage } from "@/components/shared/GenericContentPage";

export const metadata = createMetadata({
  title: "Fest Sports",
  description: "A dedicated event page for sports-related fest activity and participation.",
  path: "/fest/sports"
});

export default function FestSportsPage() {
  return <GenericContentPage path="/fest/sports" />;
}
