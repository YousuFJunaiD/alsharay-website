import { createMetadata } from "@/lib/metadata";
import { GenericContentPage } from "@/components/shared/GenericContentPage";

export const metadata = createMetadata({
  title: "Adopt A Student",
  description: "A direct giving pathway to support deserving students through Al Sharay benefaction efforts.",
  path: "/benefaction/adopt-a-student"
});

export default function AdoptAStudentPage() {
  return <GenericContentPage path="/benefaction/adopt-a-student" />;
}
