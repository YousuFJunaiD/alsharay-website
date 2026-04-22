import { createMetadata } from "@/lib/metadata";
import { GenericContentPage } from "@/components/shared/GenericContentPage";

export const metadata = createMetadata({
  title: "Memories of Excellence",
  description: "A polished archive area for awards, honors, and academic celebration at Al Sharay.",
  path: "/memories/excellence"
});

export default function MemoriesExcellencePage() {
  return <GenericContentPage path="/memories/excellence" />;
}
