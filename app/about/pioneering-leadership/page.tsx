import { createMetadata } from "@/lib/metadata";
import { GenericContentPage } from "@/components/shared/GenericContentPage";

export const metadata = createMetadata({
  title: "Pioneering Leadership",
  description: "Meet the pioneering leadership behind Al Sharay's educational and charitable mission.",
  path: "/about/pioneering-leadership"
});

export default function PioneeringLeadershipPage() {
  return <GenericContentPage path="/about/pioneering-leadership" />;
}
