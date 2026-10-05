"use client";

import { Hero, CTASection } from "@/components/sections";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Shield, Truck, Star, Clock, CheckCircle, HelpCircle } from "lucide-react";

const faqs = [
  {
    category: "General",
    items: [
      {
        question: "What areas do you serve?",
        answer: "We serve Columbus, Ohio and the surrounding Central Ohio communities including Dublin, Hilliard, Upper Arlington, Worthington, Westerville, Gahanna, Reynoldsburg, Grove City, and more. Check our Service Area page for a complete list or call us to confirm coverage for your address.",
      },
      {
        question: "Are you licensed and insured?",
        answer: "Yes, absolutely. HydroSync is fully licensed, bonded, and insured. All our technicians are licensed journeymen or master tradespeople with appropriate certifications for their specialties. We carry comprehensive liability insurance and workers' compensation coverage.",
      },
      {
        question: "Do you offer emergency services?",
        answer: "Yes, we provide 24/7/365 emergency service for plumbing, heating, and cooling emergencies. Our live operators answer every call - no answering services. Emergency dispatch typically occurs within 2 hours, often much faster.",
      },
      {
        question: "What are your hours of operation?",
        answer: "Our office hours are Monday-Friday 7:00 AM - 7:00 PM, Saturday 8:00 AM - 4:00 PM. However, our emergency line (614) 232-2222 is staffed 24 hours a day, 7 days a week, 365 days a year including all holidays.",
      },
      {
        question: "Do you offer free estimates?",
        answer: "Yes, we offer free in-home estimates for new installations, replacements, and major repairs. For diagnostic visits and emergency calls, there is a standard service call fee that is waived if you proceed with the recommended repair.",
      },
    ],
  },
  {
    category: "HVAC",
    items: [
      {
        question: "How often should I have my HVAC system serviced?",
        answer: "We recommend professional maintenance twice per year - once in spring for cooling and once in fall for heating. Regular maintenance improves efficiency, extends equipment life, prevents breakdowns, and maintains manufacturer warranties.",
      },
      {
        question: "What size HVAC system do I need?",
        answer: "Proper sizing requires a Manual J load calculation that considers your home's square footage, insulation, windows, orientation, and more. We perform this calculation free with every installation estimate to ensure optimal comfort and efficiency.",
      },
      {
        question: "When should I replace vs. repair my furnace/AC?",
        answer: "Consider replacement if: system is 15+ years old, repair costs exceed 50% of replacement cost, energy bills are rising, system needs frequent repairs, or you have uneven heating/cooling. Our technicians provide honest assessments - never push replacement unnecessarily.",
      },
      {
        question: "Do you install smart thermostats?",
        answer: "Yes, we install and configure all major smart thermostat brands (Nest, Ecobee, Honeywell, etc.) and can integrate them with your existing HVAC system and home automation setup.",
      },
      {
        question: "What is a SEER rating?",
        answer: "SEER (Seasonal Energy Efficiency Ratio) measures cooling efficiency. Higher SEER = more efficient. As of 2023, new minimum is 14 SEER2 in our region. We install systems up to 26 SEER2 for maximum energy savings.",
      },
    ],
  },
  {
    category: "Plumbing",
    items: [
      {
        question: "What should I do if I have a burst pipe?",
        answer: "1) Shut off your main water valve immediately. 2) Call our emergency line (614) 232-2222. 3) If safe, turn off electricity to affected areas. 4) Move valuables away from water. Our emergency team will be dispatched immediately.",
      },
      {
        question: "How do I know if I have a slab leak?",
        answer: "Signs include: unexplained increase in water bill, sound of running water when fixtures are off, warm spots on floor, cracks in walls/foundation, mold or mildew smells, low water pressure. We use electronic leak detection for precise location.",
      },
      {
        question: "Do you offer trenchless sewer repair?",
        answer: "Yes, we offer both pipe lining (CIPP) and pipe bursting for trenchless sewer repair. These methods avoid extensive excavation, saving your landscaping and reducing restoration costs. Not all situations qualify - camera inspection determines eligibility.",
      },
      {
        question: "What's the difference between tank and tankless water heaters?",
        answer: "Tank heaters store 40-80 gallons of hot water. Tankless heat water on demand, providing endless hot water and 24-34% energy savings for homes using <41 gallons/day. Tankless costs more upfront but lasts 20+ years vs 10-15 for tanks.",
      },
      {
        question: "Can you help with hard water?",
        answer: "Yes, we install and service water softeners and whole-house filtration systems. We'll test your water hardness and recommend the right system. Benefits include: longer appliance life, softer skin/hair, less soap usage, no scale buildup.",
      },
    ],
  },
  {
    category: "Billing & Service",
    items: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept cash, check, all major credit/debit cards (Visa, MasterCard, Amex, Discover), and offer financing through partnered lenders for larger projects. Payment is due upon completion unless financing is arranged in advance.",
      },
      {
        question: "Do you offer financing?",
        answer: "Yes, we offer flexible financing options through trusted partners for qualifying customers. Options include 0% interest promotional periods and extended payment plans. Apply online or ask your technician during your service call.",
      },
      {
        question: "Is there a service call fee?",
        answer: "For diagnostic visits and emergency calls, there is a standard service call fee ($89) that covers the technician's time to diagnose the issue. This fee is waived if you proceed with the recommended repair on the same visit.",
      },
      {
        question: "Do you offer maintenance plans?",
        answer: "Yes, our Energy Savings Plan includes: bi-annual HVAC tune-ups, annual plumbing inspection, priority scheduling, 15% repair discount, no overtime charges, and more. Plans start at $25/month and can save hundreds annually.",
      },
      {
        question: "What is your satisfaction guarantee?",
        answer: "We offer a 100% satisfaction guarantee. If you're not completely satisfied with our work, we'll make it right at no additional cost. For installations, we offer comprehensive warranties on parts and labor - up to 10 years on select systems.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <Hero
        headline="Frequently Asked Questions"
        subheadline="Quick answers to common questions about our plumbing, HVAC, and drain services. Can't find what you're looking for? Contact us directly."
        primaryCta={{ text: "Contact Us", link: "/contact" }}
        secondaryCta={{ text: "Schedule Service", link: "/schedule" }}
        trustBadges={[
          { icon: <Shield className="w-6 h-6" />, label: "Licensed & Insured", value: "Since 1986" },
          { icon: <Truck className="w-6 h-6" />, label: "24/7 Emergency", value: "Live Answer" },
          { icon: <Star className="w-6 h-6" />, label: "4.8★ Rating", value: "4,200+ Reviews" },
          { icon: <Clock className="w-6 h-6" />, label: "Transparent Pricing", value: "No Surprises" },
        ]}
      />

      <section className="py-20 md:py-24" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, catIndex) => (
              <motion.section
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="mb-16"
              >
                <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                  <HelpCircle className="w-6 h-6 text-primary-600" />
                  {category.category}
                </h2>
                <div className="space-y-3">
                  {category.items.map((faq, index) => (
                    <FAQItem key={`${category.category}-${index}`} question={faq.question} answer={faq.answer} index={index} />
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Still Have Questions?"
        subtitle="Our knowledgeable team is here to help. Call us, schedule a service, or send us a message - we'll get you the answers you need."
        buttons={[
          { text: "Call (614) 232-2222", link: "tel:6142322222", variant: "primary" },
          { text: "Contact Us", link: "/contact", variant: "outline" },
        ]}
      />
    </>
  );
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.details
      className="group bg-white rounded-xl border border-neutral-200 overflow-hidden"
      open={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
    >
      <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
        <span className="font-medium text-neutral-900 pr-10">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-neutral-400"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </summary>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="px-5 pb-5"
      >
        <div className="pt-4 border-t border-neutral-100 text-neutral-600 leading-relaxed">{answer}</div>
      </motion.div>
    </motion.details>
  );
}