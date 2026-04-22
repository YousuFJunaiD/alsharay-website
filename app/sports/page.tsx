import { createMetadata } from "@/lib/metadata";
import { GenericContentPage } from "@/components/shared/GenericContentPage";

export const metadata = createMetadata({
  title: "Sports",
  description: "Sports and physical engagement at Al Sharay PU College.",
  path: "/sports"
});

export default function SportsPage() {
  return <GenericContentPage path="/sports" />;
}
