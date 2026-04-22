import { createMetadata } from "@/lib/metadata";
import { GenericContentPage } from "@/components/shared/GenericContentPage";

export const metadata = createMetadata({
  title: "Triumphs",
  description: "A curated space for collective achievements and institutional triumphs at Al Sharay.",
  path: "/triumphs"
});

export default function TriumphsPage() {
  return <GenericContentPage path="/triumphs" />;
}
