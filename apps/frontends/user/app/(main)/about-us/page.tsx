"use client";

import AboutHero from "@/components/main/about-us/hero";
import { Card, CardContent } from "@/components/ui/card";
import { TEAM_MEMBERS } from "@/constants";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  CheckCircle,
  Eye,
  Globe,
  Headphones,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import {
  SectionTitle,
  SectionTitleDescription,
  SectionTitleHeader,
} from "@/components/common/section-title";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <AboutHero />

      {/* Mission & Vision Section */}
      <section className="min-h-fit container py-20 flex flex-col gap-12">
        <div className="w-4/12 mx-auto">
          <SectionTitle>
            <SectionTitleHeader>Our Mission & Vision</SectionTitleHeader>
            <SectionTitleDescription>
              We&apos;re on a mission to transform how people find and
              experience rental properties, making the process transparent,
              secure, and delightful.
            </SectionTitleDescription>
          </SectionTitle>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="shadow-md bg-muted h-full">
              <CardContent className="py-6 flex flex-col justify-between gap-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary rounded-lg p-3 w-fit">
                    <Target className="w-7 h-7 text-background" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-primary mb-1">
                      Our Mission
                    </div>
                    <h3 className="text-2xl font-bold leading-tight">
                      Revolutionize Rental Living
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  To revolutionize the rental market by prioritizing
                  transparency, security, and exceptional user experience. We
                  aim to be the trusted platform that connects people with their
                  perfect homes.
                </p>

                <div className="space-y-3">
                  {[
                    {
                      icon: ShieldCheck,
                      text: "Transparent pricing & no hidden fees",
                    },
                    {
                      icon: Eye,
                      text: "Verified properties with quality assurance",
                    },
                    {
                      icon: Headphones,
                      text: "24/7 customer support & assistance",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground font-medium">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="shadow-md bg-muted h-full">
              <CardContent className="py-6 flex flex-col justify-between gap-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-accent rounded-lg p-3 w-fit">
                    <Award className="w-7 h-7 text-background" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-accent mb-1">
                      Our Vision
                    </div>
                    <h3 className="text-2xl font-bold leading-tight">
                      Lead the Digital Revolution
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  To become the leading platform that transforms how people find
                  and manage rental properties. We envision a world where
                  finding the perfect home is effortless and enjoyable.
                </p>

                <div className="space-y-3">
                  {[
                    {
                      icon: Globe,
                      text: "Digital-first approach with cutting-edge tech",
                    },
                    {
                      icon: Users,
                      text: "Community-driven platform & user feedback",
                    },
                    {
                      icon: TrendingUp,
                      text: "Sustainable growth & market expansion",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-muted-foreground font-medium">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Story Section - Premium Design */}
      <section className="min-h-fit container py-20 flex flex-col gap-16">
        <div className="w-4/12 mx-auto">
          <SectionTitle>
            <SectionTitleHeader>Our Journey</SectionTitleHeader>
            <SectionTitleDescription>
              Every milestone tells a story of growth, innovation, and our
              commitment to making rental living better for everyone.
            </SectionTitleDescription>
          </SectionTitle>
        </div>

        <div className="relative">
          {/* Premium Timeline Design */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-primary/20 via-primary to-accent/20 h-full" />

          <div className="space-y-24">
            {[
              {
                year: "2023",
                title: "The Beginning",
                subtitle: "Humble Beginnings",
                text: "Founded with a simple vision: to fix the broken rental market. We started with a small team and big dreams.",
                achievements: [
                  "Launched MVP",
                  "First 100 users",
                  "Seed funding secured",
                ],
                icon: Zap,
                color: "primary",
                gradient: "from-primary/10 to-primary/5",
              },
              {
                year: "2024",
                title: "Rapid Growth",
                subtitle: "Scaling Success",
                text: "Our community exploded as families, students, and professionals discovered the difference we make.",
                achievements: [
                  "10,000+ users",
                  "500+ properties",
                  "24/7 support launched",
                ],
                icon: TrendingUp,
                color: "accent",
                gradient: "from-accent/10 to-accent/5",
              },
              {
                year: "2025",
                title: "Global Expansion",
                subtitle: "Beyond Borders",
                text: "We're expanding our reach and features, bringing our innovative approach to new markets worldwide.",
                achievements: [
                  "International launch",
                  "Advanced features",
                  "AI-powered matching",
                ],
                icon: Globe,
                color: "primary",
                gradient: "from-primary/10 to-primary/5",
              },
            ].map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.3 }}
                  className="relative flex flex-col lg:flex-row items-center lg:items-start gap-12"
                >
                  {/* Premium Timeline Node */}
                  <div className="absolute left-1/2 top-12 lg:top-8 transform -translate-x-1/2 z-20">
                    <div className="relative">
                      <div
                        className={`w-6 h-6 bg-${item.color} rounded-full shadow-lg ring-4 ring-background`}
                      />
                      <div
                        className={`absolute inset-0 w-6 h-6 bg-${item.color} rounded-full animate-ping opacity-30`}
                      />
                    </div>
                  </div>

                  {/* Content Area */}
                  <div
                    className={`
                      w-full lg:w-6/12 relative
                      ${isLeft ? "lg:pr-12 lg:order-1" : "lg:pl-12 lg:order-2"}
                    `}
                  >
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl blur-3xl opacity-50`}
                    />

                    <Card className="relative bg-muted/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                      <CardContent className="p-8">
                        {/* Header with Icon */}
                        <div className="flex items-start gap-6 mb-6">
                          <div
                            className={`bg-${item.color} rounded-xl p-3 shadow-lg`}
                          >
                            <item.icon className="w-6 h-6 text-background" />
                          </div>
                          <div className="flex-1">
                            <div
                              className={`inline-flex items-center gap-2 px-3 py-1 bg-${item.color}/10 rounded-full text-${item.color} text-sm font-medium mb-2`}
                            >
                              {item.year}
                            </div>
                            <h3 className="text-2xl font-bold leading-tight mb-1">
                              {item.title}
                            </h3>
                            <div className="text-lg font-medium text-muted-foreground">
                              {item.subtitle}
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                          {item.text}
                        </p>

                        {/* Achievements Grid */}
                        <div className="grid gap-3">
                          {item.achievements.map(
                            (achievement, achievementIdx) => (
                              <div
                                key={achievementIdx}
                                className="flex items-center gap-3 p-3 bg-background/50 rounded-lg hover:bg-background/70 transition-colors"
                              >
                                <div
                                  className={`w-8 h-8 bg-${item.color}/10 rounded-lg flex items-center justify-center`}
                                >
                                  <CheckCircle
                                    className={`w-4 h-4 text-${item.color}`}
                                  />
                                </div>
                                <span className="font-medium text-foreground">
                                  {achievement}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Premium Image Area */}
                  <div
                    className={`
                      w-full lg:w-6/12 relative
                      ${isLeft ? "lg:pl-12 lg:order-2" : "lg:pr-12 lg:order-1"}
                    `}
                  >
                    <div className="relative group">
                      {/* Background Glow */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500`}
                      />

                      {/* Image Container */}
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                        <Image
                          src="/placeholder.svg"
                          alt={item.title}
                          width={600}
                          height={400}
                          className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Floating Badge */}
                        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-1 shadow-lg">
                          <span
                            className={`text-${item.color} font-semibold text-sm`}
                          >
                            {item.year}
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
