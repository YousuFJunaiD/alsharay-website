import { createMetadata } from "@/lib/metadata";
import { GenericContentPage } from "@/components/shared/GenericContentPage";

export const metadata = createMetadata({
  title: "Campus Life",
  description: "See how campus life at Al Sharay combines belonging, support, and academic seriousness.",
  path: "/campus-life"
});

export default function CampusLifePage() {
  return <GenericContentPage path="/campus-life" />;
}
