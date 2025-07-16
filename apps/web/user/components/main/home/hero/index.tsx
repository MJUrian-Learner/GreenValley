"use client";

import React, { useEffect, useState } from "react";
import { useElementHeight } from "@/hooks/useElementHeight";
import Copywrite from "./copywrite";
import HeroImage from "./hero-image";
import { motion } from "framer-motion";

function Hero() {
  const headerHeight = useElementHeight("header");

  // Floating particles setup
  const [particles, setParticles] = useState<
    {
      x: number;
      y: number;
      delay: number;
    }[]
  >([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 6 }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
      }))
    );
  }, []);

  return (
    <section
      id="hero-section"
      className="relative flex items-center justify-center bg-gradient-to-br from-accent/10 via-primary/10 to-background transition-all duration-700 ease-in-out"
      style={{
        minHeight: `calc(100dvh - ${headerHeight}px)`,
      }}
    >
      {/* Light semi-transparent overlay to soften background */}
      <div className="absolute inset-0 bg-background/20 backdrop-blur-sm" />

      {/* Soft brand-colored shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 left-8 w-28 h-28 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-12 right-8 w-36 h-36 bg-accent/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Floating particles in accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map(({ x, y, delay }, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent/40 rounded-full"
            style={{ left: `${x}%`, top: `${y}%` }}
            animate={{ y: [0, -15, 0], opacity: [0.4, 0.8, 0.4] }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay,
            }}
          />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
        <Copywrite />
        <HeroImage />
      </div>
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}

export default Hero;
