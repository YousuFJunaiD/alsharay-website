import { createMetadata } from "@/lib/metadata";
import { GenericContentPage } from "@/components/shared/GenericContentPage";

export const metadata = createMetadata({
  title: "Cultural Memories",
  description: "A graceful archive page for Al Sharay's cultural memories and student participation.",
  path: "/memories/cultural"
});

export default function MemoriesCulturalPage() {
  return <GenericContentPage path="/memories/cultural" />;
}
