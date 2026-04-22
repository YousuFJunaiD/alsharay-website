import { createMetadata } from "@/lib/metadata";
import { GenericContentPage } from "@/components/shared/GenericContentPage";

export const metadata = createMetadata({
  title: "A Gift To The Community",
  description: "A benefaction page centered on educational upliftment and service.",
  path: "/benefaction/gift-to-the-community"
});

export default function GiftToCommunityPage() {
  return <GenericContentPage path="/benefaction/gift-to-the-community" />;
}
