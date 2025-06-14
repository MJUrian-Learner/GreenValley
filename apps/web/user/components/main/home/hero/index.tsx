"use client";

import { useElementHeight } from "@/hooks/useElementHeight";
import Copywrite from "./copywrite";
import HeroImage from "./hero-image";

function Hero() {
  const headerHeight = useElementHeight("header");

  return (
    <section id="hero-section" className="bg-primary/15">
      <div
        className="container grid grid-cols-2 gap-12 items-center transition-all duration-700 ease-in-out"
        style={{
          minHeight: `calc(100dvh - ${headerHeight}px)`,
        }}
      >
        <Copywrite />
        <HeroImage />
      </div>
    </section>
  );
}

export default Hero;
