import { createMetadata } from "@/lib/metadata";
import { ResultDetailPage } from "@/components/results/ResultDetailPage";

export const metadata = createMetadata({
  title: "Toppers 2021",
  description: "Featured toppers and merit highlights from the 2021 academic year.",
  path: "/results/toppers-2021"
});

export default function Toppers2021Page() {
  return <ResultDetailPage slug="toppers-2021" />;
}
