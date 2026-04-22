import { createMetadata } from "@/lib/metadata";
import { GenericContentPage } from "@/components/shared/GenericContentPage";

export const metadata = createMetadata({
  title: "Strategic Location & Mission",
  description: "See how location, accessibility, and mission shape the Al Sharay student experience.",
  path: "/about/strategic-location-mission"
});

export default function StrategicLocationMissionPage() {
  return <GenericContentPage path="/about/strategic-location-mission" />;
}
