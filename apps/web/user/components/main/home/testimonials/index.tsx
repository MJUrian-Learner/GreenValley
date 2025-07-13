"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

import { TESTIMONIALS } from "@/constants";
import { Star } from "lucide-react";
import Image from "next/image";

function Features() {
  return (
    <section className="min-h-fit bg-muted ">
      <div className="container py-20 flex flex-col gap-12">
        <div className="text-center w-6/12 mx-auto space-y-4">
          <h2 className="text-3xl font-bold text-primary tracking-wide font-serif">
            What Residents Are Saying
          </h2>
          <div className="flex gap-6 items-center justify-center">
            <div className="flex gap-2">
              {/* stars */}
              <div className="flex items-center gap-1 text-accent">
                {/* 5 stars */}
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="w-4 h-4" fill="currentColor" />
                ))}
              </div>
              <p className="font-medium text-muted-foreground">
                4.8/5 average rating
              </p>
            </div>
            <p className="font-medium text-muted-foreground">
              127 facilities reserved this month
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }}>
              <Card className="shadow-md bg-primary/5">
                <CardContent className="py-6 flex flex-col gap-6">
                  {/* Quote */}
                  <p className="text-lg text-muted-foreground italic">
                    &quot;{testimonial.comment}&quot;
                  </p>
                  {/* Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? "text-accent"
                            : "text-muted-foreground/50"
                        }`}
                        fill={i < testimonial.rating ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                  {/* User Info */}
                  <div className="flex items-center gap-3">
                    <div className="relative h-15 w-15 rounded-full overflow-hidden border border-border flex items-center justify-center">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                      />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-muted-foreground">
                        {testimonial.description}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
