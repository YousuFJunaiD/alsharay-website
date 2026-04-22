import { createMetadata } from "@/lib/metadata";
import { GenericContentPage } from "@/components/shared/GenericContentPage";

export const metadata = createMetadata({
  title: "Fest & Events",
  description: "Events, cultural memories, and student celebrations at Al Sharay.",
  path: "/fest"
});

export default function FestPage() {
  return <GenericContentPage path="/fest" />;
}
