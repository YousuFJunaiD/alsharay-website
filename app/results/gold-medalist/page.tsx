import { createMetadata } from "@/lib/metadata";
import { ResultDetailPage } from "@/components/results/ResultDetailPage";

export const metadata = createMetadata({
  title: "Gold Medalist",
  description: "An achievement spotlight page for distinguished Al Sharay medal-winning success.",
  path: "/results/gold-medalist"
});

export default function GoldMedalistPage() {
  return <ResultDetailPage slug="gold-medalist" />;
}
