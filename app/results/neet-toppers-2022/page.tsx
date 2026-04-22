import { createMetadata } from "@/lib/metadata";
import { ResultDetailPage } from "@/components/results/ResultDetailPage";

export const metadata = createMetadata({
  title: "NEET Toppers 2022",
  description: "A polished page dedicated to Al Sharay's NEET achievers from 2022.",
  path: "/results/neet-toppers-2022"
});

export default function NeetToppers2022Page() {
  return <ResultDetailPage slug="neet-toppers-2022" />;
}
