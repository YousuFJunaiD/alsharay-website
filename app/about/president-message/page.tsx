import { createMetadata } from "@/lib/metadata";
import { GenericContentPage } from "@/components/shared/GenericContentPage";

export const metadata = createMetadata({
  title: "President Message",
  description: "Read the leadership message that frames Al Sharay's educational vision and values.",
  path: "/about/president-message"
});

export default function PresidentMessagePage() {
  return <GenericContentPage path="/about/president-message" />;
}
