"use client";

import React from "react";
import Copywrite from "./copywrite";
import { useHeaderHeight } from "@/providers/header-height";
import HeroImage from "./hero-image";
import { useElementHeight } from "@/hooks/useElementHeight";

function Hero() {
  const { headerHeight } = useHeaderHeight();
  const { ref, height } = useElementHeight();

  return (
    <section className="bg-primary/15">
      <div
        ref={ref}
        className="container grid grid-cols-2 gap-12 items-center"
        style={{
          minHeight: `calc(100dvh - ${headerHeight}px)`,
        }}
      >
        <Copywrite />
        <HeroImage height={height} />
      </div>
    </section>
  );
}

export default Hero;
