import { createMetadata } from "@/lib/metadata";
import { GenericContentPage } from "@/components/shared/GenericContentPage";

export const metadata = createMetadata({
  title: "Faculty",
  description: "Learn about the faculty culture and educational dedication at Al Sharay PU College.",
  path: "/faculty"
});

export default function FacultyPage() {
  return <GenericContentPage path="/faculty" />;
}
