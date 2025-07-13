"use client";

import { HOW_IT_WORKS } from "@/constants";
import { Info } from "lucide-react";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Stepper from "./stepper";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(-1);

  return (
    <section className="min-h-fit bg-gradient-to-r from-accent/3 to-accent/5">
      <div className="container py-20 flex flex-col gap-12">
        <div className="text-center w-4/12 mx-auto space-y-4">
          <h2 className="text-3xl font-bold text-primary tracking-wide font-serif">
            How It Works
          </h2>
          <p className="text-muted-foreground">
            Simple steps to reserve your preferred facility
          </p>
        </div>

        {/* Stepper */}
        <Stepper activeStep={activeStep} />

        {/* Cards */}
        <div
          className="grid grid-cols-4 gap-6"
          onMouseLeave={() => setActiveStep(-1)}
        >
          {HOW_IT_WORKS.map((item, index) => (
            <Card
              key={index}
              onMouseEnter={() => setActiveStep(index)}
              className={`relative cursor-pointer rounded-xl border bg-background py-10 text-center transition-all duration-300 ${
                activeStep === index ? "scale-105" : ""
              }`}
            >
              <Tooltip>
                <TooltipTrigger className="absolute right-4 top-4">
                  <Info
                    className={`h-5 w-5 transition-colors duration-300 ${
                      activeStep === index
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>More information</p>
                </TooltipContent>
              </Tooltip>
              <CardContent className="flex flex-col gap-10">
                <div className="relative inline-block">
                  <div
                    className={`inline-flex h-24 w-24 items-center justify-center rounded-full transition-colors duration-300 ${
                      activeStep === index ? "bg-primary/20" : "bg-primary/10"
                    }`}
                  >
                    <div
                      className={`transition-colors duration-300 ${
                        activeStep === index
                          ? "text-primary"
                          : "text-primary/80"
                      }`}
                    >
                      <item.icon className="h-10 w-10" />
                    </div>
                  </div>
                  <div
                    className={`absolute -bottom-1 right-1/3 flex h-8 w-8 -translate-x-0.5 items-center justify-center rounded-full text-sm font-bold text-background ring-4 ring-background ${
                      activeStep === index ? "bg-accent/80" : "bg-accent"
                    }`}
                  >
                    {index + 1}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
