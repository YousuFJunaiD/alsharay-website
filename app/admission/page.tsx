import { createMetadata } from "@/lib/metadata";
import { GenericContentPage } from "@/components/shared/GenericContentPage";

export const metadata = createMetadata({
  title: "Admission",
  description: "Admissions at Al Sharay PU College with a clear, polished, and parent-friendly digital experience.",
  path: "/admission"
});

export default function AdmissionPage() {
  return <GenericContentPage path="/admission" />;
}
