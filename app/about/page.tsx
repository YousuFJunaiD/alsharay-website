import { createMetadata } from "@/lib/metadata";
import { GenericContentPage } from "@/components/shared/GenericContentPage";

export const metadata = createMetadata({
  title: "About",
  description: "Learn about the heritage, vision, and institutional philosophy of Al Sharay PU College.",
  path: "/about"
});

export default function AboutPage() {
  return <GenericContentPage path="/about" />;
}
