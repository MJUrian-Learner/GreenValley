"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

import { FEATURES } from "@/constants";
import {
  SectionTitle,
  SectionTitleDescription,
  SectionTitleHeader,
} from "@/components/common/section-title";
import { SECTION_TITLES } from "@/constants";

function Features() {
  return (
    <section className="min-h-fit container py-20 flex flex-col gap-12">
      <div className="w-4/12 mx-auto">
        <SectionTitle>
          <SectionTitleHeader>
            {SECTION_TITLES.features.title}
          </SectionTitleHeader>
          <SectionTitleDescription>
            {SECTION_TITLES.features.description}
          </SectionTitleDescription>
        </SectionTitle>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {FEATURES.map((feature, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }}>
            <Card className=" shadow-md bg-muted">
              <CardContent className=" py-6 flex flex-col justify-between gap-3">
                <div className="bg-primary rounded-lg p-3 w-fit">
                  <feature.logo className="w-7 h-7 text-background" />
                </div>
                <h3 className="text-xl font-bold leading-tight">
                  {feature.title}
                </h3>
                <>{feature.description}</>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Features;
