"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import AboutHero from "@/components/main/about-us/hero";

export default function AboutUs() {
  return (
    <>
      <AboutHero />
      {/* Mission & Vision Section */}
      <section className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full shadow-lg border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  To revolutionize the rental market by providing a platform
                  that prioritizes transparency, security, and user experience.
                  We believe everyone deserves access to quality housing without
                  the traditional hassles.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">
                    Transparent pricing
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">
                    Verified properties
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">24/7 support</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="h-full shadow-lg border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  To become the leading platform that transforms how people find
                  and manage rental properties. We envision a future where
                  renting is as simple as booking a hotel room.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">
                    Digital-first approach
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Community-driven</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">
                    Sustainable growth
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-muted/50 py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h2 className="text-3xl font-bold text-primary">Our Story</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2023, Green Valley emerged from a simple observation:
                the rental market was broken. Too many people were struggling
                with opaque processes, hidden fees, and unreliable listings. We
                knew there had to be a better way.
              </p>
              <p>
                What started as a small team of passionate individuals has grown
                into a community of thousands of satisfied renters and property
                owners. We&apos;ve helped families find their dream homes,
                students secure their first apartments, and professionals
                relocate with confidence.
              </p>
              <p>
                Today, we continue to innovate and improve, always keeping our
                users&apos; needs at the heart of everything we do. Our
                commitment to excellence and customer satisfaction remains
                unwavering.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center space-y-12"
        >
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold text-primary">Our Core Values</h2>
            <p className="text-muted-foreground">
              These principles guide everything we do and shape our
              relationships with users
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">✓</span>
                </div>
                <h3 className="text-xl font-semibold">Trust & Transparency</h3>
                <p className="text-muted-foreground text-sm">
                  We believe in open communication and honest dealings with all
                  our users.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">⚡</span>
                </div>
                <h3 className="text-xl font-semibold">Innovation</h3>
                <p className="text-muted-foreground text-sm">
                  We constantly seek new ways to improve the rental experience
                  through technology.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">❤️</span>
                </div>
                <h3 className="text-xl font-semibold">Customer First</h3>
                <p className="text-muted-foreground text-sm">
                  Every decision we make is driven by what&apos;s best for our
                  community.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>
    </>
  );
}
