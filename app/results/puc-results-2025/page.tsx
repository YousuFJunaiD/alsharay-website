import { createMetadata } from "@/lib/metadata";
import { ResultDetailPage } from "@/components/results/ResultDetailPage";

export const metadata = createMetadata({
  title: "PUC Results 2025",
  description: "A premium celebratory results page for the 2025 Al Sharay PUC performance showcase.",
  path: "/results/puc-results-2025"
});

export default function PucResults2025Page() {
  return <ResultDetailPage slug="puc-results-2025" />;
}
