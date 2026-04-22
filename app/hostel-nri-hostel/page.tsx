import { createMetadata } from "@/lib/metadata";
import { GenericContentPage } from "@/components/shared/GenericContentPage";

export const metadata = createMetadata({
  title: "Hostel & NRI Hostel",
  description: "Explore the residential support system for students at Al Sharay PU College.",
  path: "/hostel-nri-hostel"
});

export default function HostelPage() {
  return <GenericContentPage path="/hostel-nri-hostel" />;
}
