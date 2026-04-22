import { createMetadata } from "@/lib/metadata";
import { GenericContentPage } from "@/components/shared/GenericContentPage";

export const metadata = createMetadata({
  title: "Become A Philanthropist",
  description: "A formal philanthropy page for partners interested in educational impact through Al Sharay.",
  path: "/benefaction/become-a-philanthropist"
});

export default function BecomeAPhilanthropistPage() {
  return <GenericContentPage path="/benefaction/become-a-philanthropist" />;
}
