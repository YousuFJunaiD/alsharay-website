import { Badge } from "@/components/ui/badge";

export function AchievementBadge({ label }: { label: string }) {
  return <Badge className="mr-2 mb-2">{label}</Badge>;
}
