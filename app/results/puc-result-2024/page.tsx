import { createMetadata } from "@/lib/metadata";
import { ResultDetailPage } from "@/components/results/ResultDetailPage";

export const metadata = createMetadata({
  title: "PUC Result 2024",
  description: "A premium presentation of documented 2024 Al Sharay result highlights and toppers.",
  path: "/results/puc-result-2024"
});

export default function PucResults2024Page() {
  return <ResultDetailPage slug="puc-result-2024" />;
}
