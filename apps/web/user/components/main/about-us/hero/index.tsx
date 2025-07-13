"use client";

import React, { useState } from "react";
import { useElementHeight } from "@/hooks/useElementHeight";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";

function AboutHero() {
  const headerHeight = useElementHeight("header");
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <section
      className="relative flex items-center justify-center bg-cover bg-center transition-all duration-700 ease-in-out"
      style={{
        backgroundImage: `url(/about.png)`,
        minHeight: `calc(100dvh - ${headerHeight}px)`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-primary/20 to-transparent backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-16 max-w-5xl space-y-6">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-background drop-shadow-lg font-serif">
            Discover Your Perfect Space
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-muted drop-shadow-lg font-serif"></h2>
        </div>

        <p className="text-lg md:text-xl text-background/90 leading-relaxed max-w-3xl mx-auto">
          <span className="text-primary font-medium">Green Valley</span>{" "}
          connects you to exceptional rental experiences—simple, secure, and
          tailored for your community.
        </p>

        <div>
          <Link href="#facilities">
            <Button
              size="lg"
              className="px-10 py-4 rounded-2xl transform hover:scale-110 transition-all duration-300 ease-out hover:shadow-lg hover:shadow-primary/25"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <motion.span
                initial={{ x: 0 }}
                animate={{ x: isHovered ? -5 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                Browse Facilities
              </motion.span>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.4 }}
                  className={isHovered ? "-mr-4" : ""}
                >
                  <ArrowRightIcon />
                </motion.div>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
