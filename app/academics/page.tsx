import { createMetadata } from "@/lib/metadata";
import { GenericContentPage } from "@/components/shared/GenericContentPage";

export const metadata = createMetadata({
  title: "Academics",
  description: "Academic programs and learning philosophy at Al Sharay PU College.",
  path: "/academics"
});

export default function AcademicsPage() {
  return <GenericContentPage path="/academics" />;
}
