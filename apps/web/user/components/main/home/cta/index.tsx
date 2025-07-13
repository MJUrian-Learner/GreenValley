import { Button } from "@/components/ui/button";
import {
  SectionTitle,
  SectionTitleDescription,
  SectionTitleHeader,
} from "@/components/common/section-title";
import React from "react";
import { SECTION_TITLES } from "@/constants";

function CTA() {
  return (
    <section className="min-h-fit bg-gradient-to-r from-primary/95 via-primary/85 to-primary/95">
      <div className="container py-20 flex flex-col gap-12">
        <div className="text-center w-4/12 mx-auto space-y-8">
          <SectionTitle>
            <SectionTitleHeader className="text-background">
              {SECTION_TITLES.cta.title}
            </SectionTitleHeader>
            <SectionTitleDescription className="text-background/80">
              {SECTION_TITLES.cta.description}
            </SectionTitleDescription>
          </SectionTitle>
          <Button
            variant="secondary"
            className="px-12 py-6 text-lg bg-accent rounded-xl hover:bg-accent/95 shadow-md"
          >
            Select Date &amp; Time
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
