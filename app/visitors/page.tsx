import { createMetadata } from "@/lib/metadata";
import { GenericContentPage } from "@/components/shared/GenericContentPage";

export const metadata = createMetadata({
  title: "Visitors",
  description: "A welcoming page for campus visitors, families, and guests seeking institutional information.",
  path: "/visitors"
});

export default function VisitorsPage() {
  return <GenericContentPage path="/visitors" />;
}
