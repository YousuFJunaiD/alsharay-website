import { createMetadata } from "@/lib/metadata";
import { GenericContentPage } from "@/components/shared/GenericContentPage";

export const metadata = createMetadata({
  title: "Trustees",
  description: "Meet the trustees and institutional leadership community of Al Sharay.",
  path: "/trustees"
});

export default function TrusteesPage() {
  return <GenericContentPage path="/trustees" />;
}
