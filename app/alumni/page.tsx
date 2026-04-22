import { createMetadata } from "@/lib/metadata";
import { GenericContentPage } from "@/components/shared/GenericContentPage";

export const metadata = createMetadata({
  title: "Alumni",
  description: "Celebrate the continuing legacy of Al Sharay alumni.",
  path: "/alumni"
});

export default function AlumniPage() {
  return <GenericContentPage path="/alumni" />;
}
