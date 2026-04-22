import { createMetadata } from "@/lib/metadata";
import { GenericContentPage } from "@/components/shared/GenericContentPage";

export const metadata = createMetadata({
  title: "Competitions",
  description: "A premium page for competitions, student participation, and campus recognition.",
  path: "/fest/competitions"
});

export default function CompetitionsPage() {
  return <GenericContentPage path="/fest/competitions" />;
}
