"use client";

import { Hero, WhyChooseUs, TrustSignals, CTASection } from "@/components/sections";
import { ReviewsCarousel } from "@/components/sections";
import { Shield, Truck, Star, Clock, Users, Award, Zap, Wrench, Droplets, Home, Building2, Heart } from "lucide-react";

const teamMembers = [
  { name: "James Mitchell", role: "Founder & CEO", bio: "35+ years in the trades. Started as an apprentice in 1986.", certifications: ["Master Plumber", "Master HVAC", "NATE Certified"] },
  { name: "Sarah Chen", role: "Operations Director", bio: "15 years operations management. Ensures smooth daily operations.", certifications: ["PMP", "Six Sigma Black Belt"] },
  { name: "Mike Rodriguez", role: "Field Operations Manager", bio: "20 years field experience. Leads our 150+ technician team.", certifications: ["Journeyman Plumber", "EPA Universal"] },
  { name: "Lisa Thompson", role: "Customer Experience Lead", bio: "10 years customer service. Maintains our 4.8★ rating.", certifications: ["CCXP", "Service Excellence"] },
];

const trustBadges = [
  { icon: <Award className="w-6 h-6" />, label: "A+ BBB Rating", value: "Since 1986" },
  { icon: <Shield className="w-6 h-6" />, label: "Licensed & Insured", value: "Fully Certified" },
  { icon: <Truck className="w-6 h-6" />, label: "80+ Vehicles", value: "Rapid Response" },
  { icon: <Star className="w-6 h-6" />, label: "4.8★ Rating", value: "4,200+ Reviews" },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        headline="About HydroSync"
        subheadline="Since 1986, HydroSync has been Central Ohio's trusted choice for plumbing, HVAC, and drain services. Family-owned, locally operated, and committed to excellence."
        primaryCta={{ text: "Schedule Service", link: "/schedule" }}
        secondaryCta={{ text: "Call (614) 232-2222", link: "tel:6142322222" }}
        trustBadges={trustBadges}
      />

      <section className="py-20 md:py-24" aria-labelledby="story-heading">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="story-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-neutral-600">
                <p>Founded in 1986 by James Mitchell as a one-truck plumbing operation, HydroSync has grown into Central Ohio's premier home services company - but our values haven't changed.</p>
                <p>What started as a commitment to honest work, fair pricing, and treating customers like family has scaled to 150+ employees, 80+ service vehicles, and over 4,200 five-star reviews. We're still locally owned, still answer our own phones 24/7, and still believe that trust is earned on every job.</p>
                <p>Today, we're a full-service provider handling everything from emergency plumbing repairs to commercial HVAC installations for hospitals, restaurants, and multi-family properties. But whether it's a dripping faucet or a 50-ton chiller replacement, every job gets the same attention to detail and respect for your property.</p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-neutral-100 rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center text-neutral-500 p-8">
                  <Building2 className="w-16 h-16 mx-auto mb-4 text-neutral-300" />
                  <p className="text-lg">Company Photo</p>
                  <p className="text-sm mt-2">Our Columbus Headquarters</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-white rounded-2xl p-6 shadow-xl border border-neutral-200 max-w-xs">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                    <span className="text-xl font-bold">38</span>
                  </div>
                  <div>
                    <p className="font-bold text-neutral-900">Years in Business</p>
                    <p className="text-sm text-neutral-500">Since 1986</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600">
                    <span className="text-xl font-bold">150+</span>
                  </div>
                  <div>
                    <p className="font-bold text-neutral-900">Team Members</p>
                    <p className="text-sm text-neutral-500">Local experts</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <span className="text-xl font-bold">4.8★</span>
                  </div>
                  <div>
                    <p className="font-bold text-neutral-900">Google Rating</p>
                    <p className="text-sm text-neutral-500">4,200+ reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs
        title="Our Core Values"
        subtitle="These principles guide every decision we make and every interaction with our customers."
        features={[
          {
            icon: <Heart className="w-6 h-6" />,
            title: "Integrity First",
            description: "We do the right thing, even when no one's watching. Honest assessments, fair pricing, and transparent communication - always.",
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Quality Workmanship",
            description: "Every job, big or small, meets our exacting standards. We don't cut corners, and we stand behind our work 100%.",
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Customer Obsessed",
            description: "Your satisfaction is our only metric that matters. We're not happy until you're happy - guaranteed.",
          },
          {
            icon: <Home className="w-6 h-6" />,
            title: "Respect Your Home",
            description: "Shoe covers, drop cloths, clean workspaces, and thorough cleanup. We treat your property like our own.",
          },
          {
            icon: <Clock className="w-6 h-6" />,
            title: "Reliable & Responsive",
            description: "We show up on time, communicate clearly, and follow through on every commitment. 24/7/365.",
          },
          {
            icon: <Award className="w-6 h-6" />,
            title: "Continuous Improvement",
            description: "We invest in ongoing training, latest technology, and customer feedback to get better every day.",
          },
        ]}
      />

      <TrustSignals
        title="Our Credentials & Recognition"
        signals={[
          { icon: <Award className="w-6 h-6" />, title: "A+ BBB Accredited", description: "Accredited since 1992" },
          { icon: <Shield className="w-6 h-6" />, title: "Licensed & Insured", description: "OH License #12345" },
          { icon: <Truck className="w-6 h-6" />, title: "80+ Service Vehicles", description: "GPS-tracked for rapid dispatch" },
          { icon: <Star className="w-6 h-6" />, title: "4.8★ Google Rating", description: "4,200+ verified reviews" },
          { icon: <Users className="w-6 h-6" />, title: "150+ Team Members", description: "Background checked & drug tested" },
          { icon: <Heart className="w-6 h-6" />, title: "Community Focused", description: "Local charity partnerships" },
        ]}
      />

      <section className="py-20 md:py-24 bg-neutral-50" aria-labelledby="team-heading">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="team-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Meet Our Leadership</h2>
            <p className="text-lg text-neutral-600">The experienced team guiding HydroSync's mission of exceptional service.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl border border-neutral-200 p-6 text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-neutral-600 text-sm mb-4">{member.bio}</p>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {member.certifications.map((cert) => (
                    <span key={cert} className="px-2 py-1 text-xs bg-neutral-100 text-neutral-700 rounded-full">{cert}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ReviewsCarousel />

      <CTASection
        title="Experience the HydroSync Difference"
        subtitle="Join thousands of satisfied Central Ohio homeowners and businesses who trust us for all their plumbing, HVAC, and drain needs."
        buttons={[
          { text: "Schedule Service", link: "/schedule", variant: "primary" },
          { text: "View Career Opportunities", link: "/careers", variant: "outline" },
        ]}
      />
    </>
  );
}

import { motion } from "framer-motion";