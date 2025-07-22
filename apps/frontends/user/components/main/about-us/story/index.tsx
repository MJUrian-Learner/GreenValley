import {
  SectionTitle,
  SectionTitleDescription,
  SectionTitleHeader,
} from "@/components/common/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { SECTION_TITLES, STORY_CARDS } from "@/constants";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

function Story() {
  return (
    <section className="min-h-fit container py-20 flex flex-col gap-16">
      <div className="w-4/12 mx-auto">
        <SectionTitle>
          <SectionTitleHeader>{SECTION_TITLES.story.title}</SectionTitleHeader>
          <SectionTitleDescription>
            {SECTION_TITLES.story.description}
          </SectionTitleDescription>
        </SectionTitle>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-primary/20 via-primary to-accent/20 h-full" />

        <div className="space-y-24">
          {STORY_CARDS.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            const {
              year,
              title,
              subtitle,
              text,
              achievements,
              icon,
              color,
              gradient,
              image,
            } = item;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.3 }}
                className="relative flex flex-col lg:flex-row items-center lg:items-start gap-12"
              >
                <div className="absolute left-1/2 top-12 lg:top-8 transform -translate-x-1/2 z-20">
                  <div className="relative">
                    <div
                      className={`w-6 h-6 bg-${color} rounded-full shadow-lg ring-4 ring-background`}
                    />
                    <div
                      className={`absolute inset-0 w-6 h-6 bg-${color} rounded-full animate-ping opacity-30`}
                    />
                  </div>
                </div>

                <div
                  className={`
                  w-full lg:w-6/12 relative
                  ${isLeft ? "lg:pr-12 lg:order-1" : "lg:pl-12 lg:order-2"}
                `}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl blur-3xl opacity-50`}
                  />

                  <Card className="relative bg-muted/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6 mb-6">
                        <div className={`bg-${color} rounded-xl p-3 shadow-lg`}>
                          {React.createElement(icon, {
                            className: "w-6 h-6 text-background",
                          })}
                        </div>
                        <div className="flex-1">
                          <div
                            className={`inline-flex items-center gap-2 px-3 py-1 bg-${color}/10 rounded-full text-${color} text-sm font-medium mb-2`}
                          >
                            {year}
                          </div>
                          <h3 className="text-2xl font-bold leading-tight mb-1">
                            {title}
                          </h3>
                          <div className="text-lg font-medium text-muted-foreground">
                            {subtitle}
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                        {text}
                      </p>

                      <div className="grid gap-3">
                        {achievements.map((achievement, achievementIdx) => (
                          <div
                            key={achievementIdx}
                            className="flex items-center gap-3 p-3 bg-background/50 rounded-lg hover:bg-background/70 transition-colors"
                          >
                            <div
                              className={`w-8 h-8 bg-${color}/10 rounded-lg flex items-center justify-center`}
                            >
                              <CheckCircle
                                className={`w-4 h-4 text-${color}`}
                              />
                            </div>
                            <span className="font-medium text-foreground">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div
                  className={`
                  w-full lg:w-6/12 relative
                  ${isLeft ? "lg:pl-12 lg:order-2" : "lg:pr-12 lg:order-1"}
                `}
                >
                  <div className="relative group">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500`}
                    />

                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-2xl">
                      <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700 object-center"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-1 shadow-lg">
                        <span className={`text-${color} font-semibold text-sm`}>
                          {year}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Story;
