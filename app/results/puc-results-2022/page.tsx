import { createMetadata } from "@/lib/metadata";
import { ResultDetailPage } from "@/components/results/ResultDetailPage";

export const metadata = createMetadata({
  title: "PUC Results 2022",
  description: "A year-wise result presentation for Al Sharay's 2022 academic outcomes.",
  path: "/results/puc-results-2022"
});

export default function PucResults2022Page() {
  return <ResultDetailPage slug="puc-results-2022" />;
}
