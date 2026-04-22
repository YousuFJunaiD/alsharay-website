import { createMetadata } from "@/lib/metadata";
import { GenericContentPage } from "@/components/shared/GenericContentPage";

export const metadata = createMetadata({
  title: "Freshers Party 2016",
  description: "A premium memory page for the Al Sharay Freshers Party 2016 archive.",
  path: "/fest/freshers-party-2016"
});

export default function FreshersPartyPage() {
  return <GenericContentPage path="/fest/freshers-party-2016" />;
}
