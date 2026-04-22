import { createMetadata } from "@/lib/metadata";
import { GenericContentPage } from "@/components/shared/GenericContentPage";

export const metadata = createMetadata({
  title: "Benefaction",
  description: "Educational philanthropy and benefaction opportunities at Al Sharay.",
  path: "/benefaction"
});

export default function BenefactionPage() {
  return <GenericContentPage path="/benefaction" />;
}
