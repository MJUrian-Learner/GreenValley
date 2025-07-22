"use client";

import {
  SectionTitle,
  SectionTitleDescription,
  SectionTitleHeader,
} from "@/components/common/section-title";
import AboutHero from "@/components/main/about-us/hero";
import MissionVision from "@/components/main/about-us/mission-vision";
import { Card, CardContent } from "@/components/ui/card";
import { TEAM_MEMBERS } from "@/constants";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  ShieldCheck,
  TrendingUp,
  Users,
  Zap
} from "lucide-react";
import Image from "next/image";
import Story from "@/components/main/about-us/story";

export default function AboutUs() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <Story />

      {/* Team Section */}
      <section className="min-h-fit container py-20 flex flex-col gap-16">
        <div className="w-4/12 mx-auto">
          <SectionTitle>
            <SectionTitleHeader>Meet the Team</SectionTitleHeader>
            <SectionTitleDescription>
              Our passionate team of innovators, creators, and problem-solvers
              working together to revolutionize rental living.
            </SectionTitleDescription>
          </SectionTitle>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="group relative overflow-hidden bg-muted shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-border/50">
                <CardContent className="relative flex flex-col items-center text-center p-8 h-full">
                  {/* Avatar Section with Enhanced Design */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />
                    <div className="relative p-2 rounded-full bg-gradient-to-br from-primary to-primary/80 shadow-xl">
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        width={100}
                        height={100}
                        className="rounded-full border-4 border-background object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Member Info with Better Hierarchy */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold leading-tight mb-2 text-foreground">
                      {member.name}
                    </h3>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
                      <span className="text-primary font-semibold text-sm">
                        {member.role}
                      </span>
                    </div>
                  </div>

                  {/* Bio with Better Typography */}
                  <p className="text-muted-foreground leading-relaxed text-sm flex-grow">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section - Inspired Design */}
      <section className="relative py-16 overflow-hidden">
        {/* Background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Main CTA Banner */}
            <div className="relative bg-primary rounded-2xl shadow-2xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-32 translate-x-32" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-background/10 rounded-full blur-2xl translate-y-24 -translate-x-24" />

              {/* Content */}
              <div className="relative px-8 py-12 lg:py-16">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                  {/* Text Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
                      Ready to Find Your Perfect Home?
                    </h2>
                    <p className="text-lg text-primary-foreground/90 max-w-2xl">
                      Join thousands of satisfied users who have discovered
                      their ideal rental through our transparent, secure
                      platform.
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div className="flex-shrink-0">
                    <button className="group relative px-8 py-4 bg-background text-primary font-semibold rounded-xl hover:bg-background/95 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl">
                      <span>Get Started</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      {/* Button glow effect */}
                      <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  icon: ShieldCheck,
                  title: "Secure & Transparent",
                  description: "No hidden fees, verified properties",
                },
                {
                  icon: Users,
                  title: "24/7 Support",
                  description: "Expert assistance whenever you need",
                },
                {
                  icon: TrendingUp,
                  title: "Trusted Platform",
                  description: "Join 10,000+ satisfied users",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-muted rounded-xl p-6 text-center hover:bg-muted/80 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
