import { createMetadata } from "@/lib/metadata";
import { ResultDetailPage } from "@/components/results/ResultDetailPage";

export const metadata = createMetadata({
  title: "PUC Results 2020",
  description: "A premium result page for the 2020 Al Sharay PUC performance showcase.",
  path: "/results/puc-results-2020"
});

export default function PucResults2020Page() {
  return <ResultDetailPage slug="puc-results-2020" />;
}
