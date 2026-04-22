import { createMetadata } from "@/lib/metadata";
import { GenericContentPage } from "@/components/shared/GenericContentPage";

export const metadata = createMetadata({
  title: "What Drives Us",
  description: "Discover the values, mission, and educational convictions that drive Al Sharay PU College.",
  path: "/about/what-drives-us"
});

export default function WhatDrivesUsPage() {
  return <GenericContentPage path="/about/what-drives-us" />;
}
