import { createMetadata } from "@/lib/metadata";
import { GenericContentPage } from "@/components/shared/GenericContentPage";

export const metadata = createMetadata({
  title: "Students",
  description: "Student support, culture, and campus experience at Al Sharay.",
  path: "/students"
});

export default function StudentsPage() {
  return <GenericContentPage path="/students" />;
}
