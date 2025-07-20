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
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-primary/30 to-secondary/20 backdrop-blur-sm" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-bounce delay-500" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      <div className="absolute top-1/4 right-10 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative"
        >
          <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl" />
          <div
            className="absolute inset-0 w-32 h-32 bg-white/5 rounded-full animate-spin"
            style={{ animationDuration: "20s" }}
          />
        </motion.div>
      </div>

      <div className="absolute bottom-1/4 left-10 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="relative"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-2xl" />
          <div
            className="absolute inset-0 w-24 h-24 bg-white/5 rounded-full animate-spin"
            style={{ animationDuration: "15s", animationDirection: "reverse" }}
          />
        </motion.div>
      </div>

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
