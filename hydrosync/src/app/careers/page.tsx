"use client";

import { Hero, CTASection } from "@/components/sections";
import { motion } from "framer-motion";
import { useState } from "react";
import { Briefcase, GraduationCap, Shield, Truck, Star, Users, Heart, DollarSign, Award, Clock, Wrench, Zap, Droplets, Building2, MapPin, Coffee, BookOpen, Dumbbell, ChevronRight, CheckCircle, ArrowRight } from "lucide-react";

const benefits = [
  { icon: <DollarSign className="w-6 h-6" />, title: "Competitive Pay", desc: "Top-tier wages with performance bonuses and annual reviews" },
  { icon: <Shield className="w-6 h-6" />, title: "Full Benefits", desc: "Medical, dental, vision, life insurance, 401k with match" },
  { icon: <Clock className="w-6 h-6" />, title: "Work-Life Balance", desc: "No mandatory overtime, predictable schedules, paid time off" },
  { icon: <Truck className="w-6 h-6" />, title: "Company Vehicle", desc: "Take-home trucks for field techs with fuel card" },
  { icon: <Award className="w-6 h-6" />, title: "Career Growth", desc: "Clear advancement paths from apprentice to master to management" },
  { icon: <BookOpen className="w-6 h-6" />, title: "Paid Training", desc: "Ongoing certification courses, manufacturer training, leadership development" },
  { icon: <Coffee className="w-6 h-6" />, title: "Great Culture", desc: "Team events, recognition programs, family-oriented atmosphere" },
  { icon: <Heart className="w-6 h-6" />, title: "Safety First", desc: "Top-tier safety program, PPE provided, wellness initiatives" },
];

const openPositions = [
  {
    title: "HVAC Service Technician",
    department: "Field Operations",
    location: "Columbus, OH",
    type: "Full-Time",
    experience: "2+ years",
    description: "Diagnose and repair residential and light commercial HVAC systems. EPA certification required.",
    requirements: ["EPA Universal Certification", "2+ years HVAC service experience", "Clean driving record", "NATE certification preferred"],
    benefits: ["$60k-$90k + commission", "Take-home vehicle", "Tool allowance", "Ongoing training"],
  },
  {
    title: "Plumbing Service Technician",
    department: "Field Operations",
    location: "Columbus, OH",
    type: "Full-Time",
    experience: "2+ years",
    description: "Handle residential plumbing service calls including repairs, installations, and emergency response.",
    requirements: ["Ohio Journeyman/Master Plumber License", "2+ years service plumbing experience", "Clean driving record", "Gas line certification a plus"],
    benefits: ["$55k-$85k + commission", "Take-home vehicle", "Tool allowance", "Emergency call bonuses"],
  },
  {
    title: "HVAC Installer",
    department: "Installation",
    location: "Columbus, OH",
    type: "Full-Time",
    experience: "1+ years",
    description: "Install residential HVAC systems including furnaces, AC units, heat pumps, and ductwork.",
    requirements: ["EPA Certification", "1+ years installation experience", "Sheet metal experience preferred", "Clean driving record"],
    benefits: ["$50k-$75k + bonuses", "Company vehicle", "Tool provided", "Advancement to lead installer"],
  },
  {
    title: "Plumbing Apprentice",
    department: "Field Operations",
    location: "Columbus, OH",
    type: "Full-Time",
    experience: "Entry Level",
    description: "Learn the plumbing trade while earning. Registered apprenticeship program with classroom and on-the-job training.",
    requirements: ["High school diploma/GED", "Valid driver's license", "Mechanical aptitude", "Willingness to learn"],
    benefits: ["$18-$22/hr + raises", "Paid apprenticeship classes", "Tool starter kit", "Journeyman pathway"],
  },
  {
    title: "HVAC Apprentice",
    department: "Field Operations",
    location: "Columbus, OH",
    type: "Full-Time",
    experience: "Entry Level",
    description: "Start your HVAC career with our structured apprenticeship program combining hands-on work and classroom education.",
    requirements: ["High school diploma/GED", "Valid driver's license", "Mechanical aptitude", "EPA certification within 90 days"],
    benefits: ["$18-$22/hr + raises", "Paid apprenticeship classes", "EPA exam fees covered", "Journeyman pathway"],
  },
  {
    title: "Customer Service Representative",
    department: "Office",
    location: "Columbus, OH",
    type: "Full-Time",
    experience: "1+ years",
    description: "Handle inbound calls, schedule appointments, dispatch technicians, and provide exceptional customer service.",
    requirements: ["1+ years customer service experience", "Strong communication skills", "Computer proficiency", "Multi-tasking ability"],
    benefits: ["$18-$22/hr", "Monday-Friday schedule", "Paid training", "Advancement opportunities"],
  },
  {
    title: "Dispatch Coordinator",
    department: "Operations",
    location: "Columbus, OH",
    type: "Full-Time",
    experience: "2+ years",
    description: "Optimize technician routes, manage emergency calls, coordinate with customers and field teams.",
    requirements: ["2+ years dispatch/scheduling experience", "Field service software experience", "Strong organizational skills", "HVAC/plumbing knowledge a plus"],
    benefits: ["$45k-$55k", "Monday-Friday", "Performance bonuses", "Leadership track"],
  },
  {
    title: "Commercial HVAC Technician",
    department: "Commercial Division",
    location: "Columbus, OH",
    type: "Full-Time",
    experience: "5+ years",
    description: "Service and maintain commercial HVAC systems including RTUs, chillers, VRF, and building automation.",
    requirements: ["5+ years commercial HVAC experience", "EPA Universal + NATE", "BAS/BMS experience", "Refrigeration certification"],
    benefits: ["$70k-$100k + OT", "Take-home vehicle", "Specialized tool allowance", "Manufacturer training"],
  },
];

const apprenticeBenefits = [
  "Earn while you learn - paid on-the-job training",
  "Company pays for all classroom instruction",
  "Structured 4-5 year program to journeyman",
  "Mentorship from experienced journeymen",
  "Tool starter kit provided",
  "Regular wage increases as you progress",
  "Job security - high demand for skilled trades",
  "No student debt - we invest in you",
];

export default function CareersPage() {
  return (
    <>
      <Hero
        headline="Build Your Career at HydroSync"
        subheadline="Join a team that values skill, integrity, and growth. From apprenticeships to master technician roles, we invest in your future with competitive pay, comprehensive benefits, and a clear path forward."
        primaryCta={{ text: "View Open Positions", link: "#positions" }}
        secondaryCta={{ text: "Apply Now", link: "https://recruiting.paylocity.com/recruiting/jobs/All/fe2218d6-2b48-47b0-afc5-fb433366fc4a/Haven-Services-LLC---Columbus-Region" }}
        trustBadges={[
          { icon: <Users className="w-6 h-6" />, label: "Team Members", value: "150+" },
          { icon: <Award className="w-6 h-6" />, label: "Years in Business", value: "38" },
          { icon: <GraduationCap className="w-6 h-6" />, label: "Apprentices Trained", value: "50+" },
          { icon: <Star className="w-6 h-6" />, label: "Employee Rating", value: "4.7★" },
        ]}
      />

      <section className="py-20 md:py-24" aria-labelledby="why-heading">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="why-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Why HydroSync?</h2>
            <p className="text-lg text-neutral-600">We're not just a job - we're a career destination. Here's what sets us apart:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl border border-neutral-200"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">{benefit.title}</h3>
                <p className="text-neutral-600 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="positions" className="py-20 md:py-24 bg-neutral-50" aria-labelledby="positions-heading">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 id="positions-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Open Positions</h2>
            <p className="text-lg text-neutral-600">We're always looking for talented people. Don't see your role? We accept general applications year-round.</p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <motion.article
                key={position.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-neutral-200 p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">{position.department}</span>
                      <span className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm font-medium rounded-full">{position.type}</span>
                      <span className="px-3 py-1 bg-secondary-100 text-secondary-700 text-sm font-medium rounded-full">{position.experience}</span>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900">{position.title}</h3>
                    <p className="text-neutral-500 flex items-center gap-1 mt-1">
                      <MapPin className="w-4 h-4" /> {position.location}
                    </p>
                  </div>
                  <a
                    href="https://recruiting.paylocity.com/recruiting/jobs/All/fe2218d6-2b48-47b0-afc5-fb433366fc4a/Haven-Services-LLC---Columbus-Region"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors whitespace-nowrap"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-neutral-600 mb-6">{position.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-primary-600" />
                      Requirements
                    </h4>
                    <ul className="space-y-2" role="list">
                      {position.requirements.map((req) => (
                        <li key={req} className="flex items-center gap-2 text-neutral-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                      <Star className="w-5 h-5 text-secondary-600" />
                      Benefits
                    </h4>
                    <ul className="space-y-2" role="list">
                      {position.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-neutral-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://recruiting.paylocity.com/recruiting/jobs/All/fe2218d6-2b48-47b0-afc5-fb433366fc4a/Haven-Services-LLC---Columbus-Region"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary-600 text-white font-semibold text-lg hover:bg-primary-700 transition-colors"
            >
              View All Positions & Apply
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24" aria-labelledby="apprentice-heading">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="apprentice-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">Apprenticeship Programs</h2>
              <p className="text-lg text-neutral-600 mb-8">Start a rewarding career in the skilled trades with our registered apprenticeship programs. We're committed to developing the next generation of master plumbers and HVAC technicians.</p>
              <ul className="space-y-4" role="list">
                {apprenticeBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/careers/apprenticeships"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors"
              >
                Learn More About Apprenticeships
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="aspect-square bg-neutral-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                <GraduationCap className="w-32 h-32" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center">
                <p className="text-neutral-600">Apprenticeship Program</p>
                <p className="text-sm text-neutral-500 mt-1">Earn while you learn - no student debt</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Join the Team?"
        subtitle="Whether you're an experienced pro or just starting out, HydroSync offers the training, support, and opportunities to build a lasting career."
        buttons={[
          { text: "Apply Online", link: "https://recruiting.paylocity.com/recruiting/jobs/All/fe2218d6-2b48-47b0-afc5-fb433366fc4a/Haven-Services-LLC---Columbus-Region", variant: "primary" },
          { text: "Email Resume", link: "mailto:careers@hydrosync.com", variant: "outline" },
        ]}
      />
    </>
  );
}