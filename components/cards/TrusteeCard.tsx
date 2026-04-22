import { LeadershipCard } from "@/components/cards/LeadershipCard";

export function TrusteeCard(props: {
  name: string;
  role: string;
  description: string;
}) {
  return <LeadershipCard {...props} />;
}
