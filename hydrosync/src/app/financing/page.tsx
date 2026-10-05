"use client";

import { Hero, CTASection } from "@/components/sections";
import { motion } from "framer-motion";
import { useState } from "react";
import { CreditCard, Shield, Clock, CheckCircle, Calculator, Percent, DollarSign, ArrowRight, ChevronDown } from "lucide-react";

const financingOptions = [
  {
    title: "0% Interest Promotional",
    description: "No interest if paid in full during promotional period",
    details: [
      "6, 12, 18, or 24 month terms available",
      "No interest if paid in full during promo period",
      "Minimum purchase $500",
      "Standard APR applies after promo ends",
    ],
    badge: "Most Popular",
    badgeColor: "bg-primary-100 text-primary-700",
  },
  {
    title: "Low Fixed Rate",
    description: "Predictable monthly payments with competitive rates",
    details: [
      "36, 48, 60, 72, or 84 month terms",
      "Fixed rates as low as 5.99% APR",
      "No prepayment penalties",
      "Minimum purchase $1,000",
    ],
    badge: "Best for Large Projects",
    badgeColor: "bg-secondary-100 text-secondary-700",
  },
  {
    title: "Energy Efficiency Loans",
    description: "Special rates for high-efficiency HVAC upgrades",
    details: [
      "Up to 100% financing for qualifying systems",
      "Rates as low as 3.99% APR",
      "Extended terms up to 120 months",
      "May qualify for utility rebates",
    ],
    badge: "Green Upgrade",
    badgeColor: "bg-green-100 text-green-700",
  },
];

const benefits = [
  { icon: <CheckCircle className="w-6 h-6" />, title: "Fast Approval", desc: "Decisions in minutes, not days" },
  { icon: <CheckCircle className="w-6 h-6" />, title: "No Hidden Fees", desc: "Transparent terms, no surprises" },
  { icon: <CheckCircle className="w-6 h-6" />, title: "Flexible Terms", desc: "6 to 120 months available" },
  { icon: <CheckCircle className="w-6 h-6" />, title: "No Prepayment Penalty", desc: "Pay off early anytime" },
  { icon: <CheckCircle className="w-6 h-6" />, title: "Competitive Rates", desc: "As low as 3.99% APR" },
  { icon: <CheckCircle className="w-6 h-6" />, title: "Easy Application", desc: "Online or with your technician" },
];

const faqs = [
  {
    q: "What credit score do I need?",
    a: "Most programs require 600+ FICO, but we work with multiple lenders to find options for various credit profiles. Your technician can help you pre-qualify.",
  },
  {
    q: "Can I apply with my technician?",
    a: "Yes! Our technicians can help you complete the application on-site during your estimate visit. Decisions typically come back within minutes.",
  },
  {
    q: "Are there any fees?",
    a: "No origination fees, no prepayment penalties, no hidden costs. The rate and terms you see are what you get.",
  },
  {
    q: "Can I finance part of the project?",
    a: "Absolutely. You can finance any amount from $500 up to the full project cost. Many customers finance the equipment and pay labor upfront.",
  },
  {
    q: "What if I sell my home?",
    a: "Financing stays with you, not the property. You can pay it off at closing or continue payments - no transfer complications.",
  },
];

export default function FinancingPage() {
  return (
    <>
      <Hero
        headline="Flexible Financing Options"
        subheadline="Don't let budget constraints delay your comfort. HydroSync offers competitive financing with fast approval, transparent terms, and options for every project size."
        primaryCta={{ text: "Get Pre-Qualified", link: "/schedule" }}
        secondaryCta={{ text: "Call (614) 232-2222", link: "tel:6142322222" }}
        trustBadges={[
          { icon: <CreditCard className="w-6 h-6" />, label: "Fast Approval", value: "Minutes" },
          { icon: <Percent className="w-6 h-6" />, label: "Rates As Low As", value: "3.99% APR" },
          { icon: <Clock className="w-6 h-6" />, label: "Terms Up To", value: "120 Months" },
          { icon: <Shield className="w-6 h-6" />, label: "No Hidden Fees", value: "Ever" },
        ]}
      />

      <section className="py-20 md:py-24" aria-labelledby="options-heading">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 id="options-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Choose Your Plan</h2>
            <p className="text-lg text-neutral-600">Select the financing option that best fits your budget and project needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {financingOptions.map((option, index) => (
              <motion.article
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white rounded-2xl border border-neutral-200 p-6 md:p-8"
              >
                {option.badge && (
                  <span className={`absolute -top-3 left-6 px-3 py-1 rounded-full text-sm font-medium ${option.badgeColor}`}>
                    {option.badge}
                  </span>
                )}
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{option.title}</h3>
                <p className="text-neutral-600 mb-6">{option.description}</p>
                <ul className="space-y-3 mb-8" role="list">
                  {option.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 text-neutral-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <a href="/schedule" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium">
                  Learn More & Apply
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-neutral-50" aria-labelledby="benefits-heading">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 id="benefits-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Why Finance with HydroSync?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <p className="text-neutral-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 text-center mb-12">Financing FAQs</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Started?"
        subtitle="Pre-qualification takes minutes and doesn't impact your credit score. Schedule a free estimate and we'll walk you through the best financing options for your project."
        buttons={[
          { text: "Schedule Free Estimate", link: "/schedule", variant: "primary" },
          { text: "Call to Discuss Options", link: "tel:6142322222", variant: "outline" },
        ]}
      />
    </>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
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
        transition={{ duration: 0.3 }}
        className="px-5 pb-5"
      >
        <div className="pt-4 border-t border-neutral-100 text-neutral-600 leading-relaxed">{answer}</div>
      </motion.div>
    </motion.details>
  );
}