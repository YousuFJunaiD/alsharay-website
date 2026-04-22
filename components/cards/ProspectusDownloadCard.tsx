import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function ProspectusDownloadCard() {
  return (
    <Card className="flex h-full flex-col items-start gap-4 border-[var(--color-border-strong)] bg-[linear-gradient(180deg,#fffdfa_0%,#f8efe0_100%)]">
      <div>
        <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-gold)]">
          Institutional document
        </p>
        <h3 className="mt-2 font-serif text-3xl font-semibold text-[var(--color-charcoal)]">
          Prospectus 2021-2022
        </h3>
        <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
          Replace this button with the final document link or PDF asset once the approved prospectus file is ready.
        </p>
      </div>
      <Button href="#" className="mt-auto gap-2">
        <Download className="h-4 w-4" />
        Download Prospectus
      </Button>
    </Card>
  );
}
