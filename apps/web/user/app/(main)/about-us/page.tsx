"use client";

import AboutHero from "@/components/main/about-us/hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CORE_VALUES, TEAM_MEMBERS } from "@/constants";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle,
  Eye,
  Github,
  Globe,
  Headphones,
  Heart,
  Lightbulb,
  Linkedin,
  ShieldCheck,
  Target,
  TrendingUp,
  Twitter,
  Users,
  Zap
} from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <AboutHero />

      {/* Mission & Vision Section - Redesigned */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
              <Lightbulb className="w-4 h-4" />
              Our Purpose
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Building the Future of
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {" "}
                Rental Living
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We&apos;re on a mission to transform how people find and
              experience rental properties, making the process transparent,
              secure, and delightful.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Mission Card - Redesigned */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl" />
              <Card className="relative bg-gradient-to-br from-white to-blue-50/50 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16" />
                <CardHeader className="relative pb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-xl">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-primary mb-1">
                        Our Mission
                      </div>
                      <CardTitle className="text-3xl font-bold text-gray-900">
                        Revolutionize Rental Living
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative space-y-8">
                  <p className="text-lg leading-relaxed text-gray-700">
                    To revolutionize the rental market by prioritizing
                    transparency, security, and exceptional user experience. We
                    aim to be the trusted platform that connects people with
                    their perfect homes.
                  </p>
                  <div className="space-y-4">
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
                      <div
                        key={idx}
                        className="flex items-center gap-4 p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-colors"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-medium text-gray-700">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Vision Card - Redesigned */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent rounded-3xl blur-2xl" />
              <Card className="relative bg-gradient-to-br from-white to-emerald-50/50 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-secondary/10 to-transparent rounded-full -translate-y-16 -translate-x-16" />
                <CardHeader className="relative pb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center shadow-xl">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-secondary mb-1">
                        Our Vision
                      </div>
                      <CardTitle className="text-3xl font-bold text-gray-900">
                        Lead the Digital Revolution
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative space-y-8">
                  <p className="text-lg leading-relaxed text-gray-700">
                    To become the leading platform that transforms how people
                    find and manage rental properties. We envision a world where
                    finding the perfect home is effortless and enjoyable.
                  </p>
                  <div className="space-y-4">
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
                      <div
                        key={idx}
                        className="flex items-center gap-4 p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-colors"
                      >
                        <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-secondary" />
                        </div>
                        <span className="font-medium text-gray-700">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section - Completely Redesigned */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full text-secondary font-medium mb-6">
              <Calendar className="w-4 h-4" />
              Our Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              From Startup to
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {" "}
                Success Story
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every milestone tells a story of growth, innovation, and our
              commitment to making rental living better for everyone.
            </p>
          </motion.div>

          <div className="relative">
            {/* Enhanced timeline with curved design */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-secondary to-primary h-full rounded-full shadow-lg" />

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
                  color: "secondary",
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
                },
              ].map((item, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.3 }}
                    className="relative flex flex-col lg:flex-row items-center lg:items-start"
                  >
                    {/* Enhanced timeline dot */}
                    <div className="absolute left-1/2 top-6 lg:top-0 transform -translate-x-1/2 z-20">
                      <div
                        className={`w-8 h-8 bg-gradient-to-br from-${item.color} to-${item.color}/80 rounded-full shadow-xl ring-4 ring-white`}
                      />
                      <div
                        className={`absolute inset-0 w-8 h-8 bg-gradient-to-br from-${item.color} to-${item.color}/80 rounded-full animate-ping opacity-20`}
                      />
                    </div>

                    {/* Content Card */}
                    <div
                      className={`
                        w-full lg:w-6/12 p-8 bg-gradient-to-br from-white to-gray-50/50 rounded-3xl shadow-2xl hover:shadow-3xl border border-gray-100 transition-all duration-500 hover:-translate-y-2
                        ${
                          isLeft ? "lg:pr-20 lg:order-1" : "lg:pl-20 lg:order-2"
                        }
                      `}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br from-${item.color}/10 to-${item.color}/20 rounded-xl flex items-center justify-center`}
                        >
                          <item.icon className={`w-6 h-6 text-${item.color}`} />
                        </div>
                        <div>
                          <div
                            className={`text-sm font-medium text-${item.color} mb-1`}
                          >
                            {item.year}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {item.title}
                          </h3>
                          <div className="text-lg font-medium text-gray-600">
                            {item.subtitle}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 leading-relaxed text-lg mb-6">
                        {item.text}
                      </p>

                      <div className="space-y-3">
                        {item.achievements.map(
                          (achievement, achievementIdx) => (
                            <div
                              key={achievementIdx}
                              className="flex items-center gap-3"
                            >
                              <CheckCircle
                                className={`w-5 h-5 text-${item.color}`}
                              />
                              <span className="text-gray-700 font-medium">
                                {achievement}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Enhanced Image */}
                    <div
                      className={`
                        w-full lg:w-6/12 mt-12 lg:mt-0
                        ${
                          isLeft
                            ? "lg:ml-auto lg:order-2"
                            : "lg:mr-auto lg:order-1"
                        }
                      `}
                    >
                      <div className="relative group">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br from-${item.color}/20 to-${item.color}/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500`}
                        />
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                          <Image
                            src="/placeholder.svg"
                            alt={item.title}
                            width={600}
                            height={400}
                            className="w-full h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Redesigned */}
      <section className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent font-medium mb-6">
            <Calendar className="w-4 h-4" />
            Our Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            From Startup to{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Success Story
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every milestone tells a story of growth, innovation, and our commitment to making rental living better for everyone.
          </p>
        </motion.div>

        <div className="relative">
          {/* Simple timeline spine */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/80 h-full" />

          <div className="space-y-32">
            {[
              {
                year: '2023',
                title: 'The Beginning',
                subtitle: 'Humble Beginnings',
                text: 'Founded with a simple vision: to fix the broken rental market. We started with a small team and big dreams.',
                achievements: ['Launched MVP', 'First 100 users', 'Seed funding secured'],
                icon: Zap,
              },
              {
                year: '2024',
                title: 'Rapid Growth',
                subtitle: 'Scaling Success',
                text: 'Our community exploded as families, students, and professionals discovered the difference we make.',
                achievements: ['10,000+ users', '500+ properties', '24/7 support launched'],
                icon: TrendingUp,
              },
              {
                year: '2025',
                title: 'Global Expansion',
                subtitle: 'Beyond Borders',
                text: 'We\'re expanding our reach and features, bringing our innovative approach to new markets worldwide.',
                achievements: ['International launch', 'Advanced features', 'AI-powered matching'],
                icon: Globe,
              },
            ].map((item, idx) => {
              const isLeft = idx % 2 === 0;
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="relative flex flex-col lg:flex-row items-center lg:items-start"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 top-6 lg:top-0 transform -translate-x-1/2 z-20">
                    <div className="w-4 h-4 bg-accent rounded-full border-2 border-white shadow-sm" />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`
                      w-full lg:w-6/12 p-8 bg-white rounded-3xl
                      border border-gray-100 shadow-sm
                      transition hover:shadow-md duration-300
                      ${isLeft ? 'lg:pr-20 lg:order-1' : 'lg:pl-20 lg:order-2'}
                    `}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-accent mb-1">
                          {item.year}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {item.title}
                        </h3>
                        <div className="text-lg font-medium text-gray-600">
                          {item.subtitle}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      {item.text}
                    </p>

                    <div className="space-y-2">
                      {item.achievements.map((ach, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-accent" />
                          <span className="text-gray-700">{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image */}
                  <div
                    className={`w-full lg:w-6/12 mt-8 lg:mt-0 ${
                      isLeft ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="relative overflow-hidden rounded-3xl shadow-sm">
                      <Image
                        src="/placeholder.svg"
                        alt={item.title}
                        width={600}
                        height={400}
                        className="w-full h-80 lg:h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>

      {/* Team Section - Completely Redesigned */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-20"
          >
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full text-secondary font-medium mb-6">
                <Users className="w-4 h-4" />
                Meet the Team
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                The Minds Behind
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {" "}
                  Our Success
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our passionate team of innovators, creators, and problem-solvers
                working together to revolutionize rental living.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {TEAM_MEMBERS.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                >
                  <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50/50 hover:from-primary/5 hover:to-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardContent className="relative flex flex-col items-center text-center p-8 h-full">
                      <div className="relative mb-8">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />
                        <div className="relative p-2 rounded-full bg-gradient-to-br from-primary to-secondary">
                          <Image
                            src={member.avatar}
                            alt={member.name}
                            width={140}
                            height={140}
                            className="rounded-full border-4 border-white object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>

                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {member.name}
                        </h3>
                        <p className="text-primary font-semibold text-lg">
                          {member.role}
                        </p>
                      </div>

                      <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                        {member.bio}
                      </p>

                      {/* Enhanced Social Links */}
                      <div className="flex gap-4">
                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl group-hover:shadow-2xl"
                          >
                            <Linkedin className="w-6 h-6" />
                          </a>
                        )}
                        {member.social.twitter && (
                          <a
                            href={member.social.twitter}
                            className="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl group-hover:shadow-2xl"
                          >
                            <Twitter className="w-6 h-6" />
                          </a>
                        )}
                        {member.social.github && (
                          <a
                            href={member.social.github}
                            className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl group-hover:shadow-2xl"
                          >
                            <Github className="w-6 h-6" />
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - New Addition */}
      <section className="relative py-24 bg-gradient-to-br from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience
              <span className="block">Better Rental Living?</span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-10">
              Join thousands of satisfied users who have found their perfect
              home through our platform. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2 group">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
