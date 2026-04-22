import { createMetadata } from "@/lib/metadata";
import { ResultDetailPage } from "@/components/results/ResultDetailPage";

export const metadata = createMetadata({
  title: "NEET Toppers",
  description: "A polished recognition page for NEET achievers and future doctors from Al Sharay.",
  path: "/results/neet-toppers"
});

export default function NeetToppersPage() {
  return <ResultDetailPage slug="neet-toppers" />;
}
