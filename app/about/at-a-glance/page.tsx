import { createMetadata } from "@/lib/metadata";
import { GenericContentPage } from "@/components/shared/GenericContentPage";

export const metadata = createMetadata({
  title: "At A Glance",
  description: "A concise institutional overview of Al Sharay PU College, its history, standards, and student focus.",
  path: "/about/at-a-glance"
});

export default function AtAGlancePage() {
  return <GenericContentPage path="/about/at-a-glance" />;
}
