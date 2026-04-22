import { createMetadata } from "@/lib/metadata";
import { GenericContentPage } from "@/components/shared/GenericContentPage";

export const metadata = createMetadata({
  title: "Memories",
  description: "Explore excellence, cultural memories, and institutional moments from Al Sharay PU College.",
  path: "/memories"
});

export default function MemoriesPage() {
  return <GenericContentPage path="/memories" />;
}
