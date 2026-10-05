"use client";

import { Hero, CTASection } from "@/components/sections";
import { Button } from "@/components/ui";
import { motion } from "framer-motion";
import { useState } from "react";
import { Shield, Truck, Star, Clock, Bolt, PiggyBank, Calendar, CheckCircle, Leaf, Settings, ChevronDown, ChevronRight } from "lucide-react";

const planFeatures = [
  { icon: <Calendar className="w-6 h-6" />, title: "Bi-Annual HVAC Tune-Ups", desc: "Spring AC & Fall heating maintenance - 20+ point inspection" },
  { icon: <CheckCircle className="w-6 h-6" />, title: "Annual Plumbing Inspection", desc: "Water heater, fixtures, supply lines, and water pressure check" },
  { icon: <Bolt className="w-6 h-6" />, title: "15% Repair Discount", desc: "On all parts and labor for plan members" },
  { icon: <Shield className="w-6 h-6" />, title: "Priority Scheduling", desc: "Front-of-line service, even during peak season" },
  { icon: <Clock className="w-6 h-6" />, title: "No Overtime Charges", desc: "Emergency calls at standard rates - nights, weekends, holidays" },
  { icon: <PiggyBank className="w-6 h-6" />, title: "Extended Equipment Life", desc: "Regular maintenance adds years to your HVAC & plumbing systems" },
  { icon: <Leaf className="w-6 h-6" />, title: "Energy Efficiency", desc: "Clean, tuned systems use 15-30% less energy" },
  { icon: <Settings className="w-6 h-6" />, title: "Water Conservation", desc: "Leak detection & fixture optimization saves water & money" },
];

const pricingTiers = [
  {
    name: "Essential",
    price: "$25",
    period: "/month",
    features: [
      "Bi-annual HVAC tune-ups",
      "Annual plumbing inspection",
      "15% repair discount",
      "Priority scheduling",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Premium",
    price: "$35",
    period: "/month",
    features: [
      "Everything in Essential",
      "No overtime charges",
      "Priority emergency dispatch",
      "Annual water heater flush",
      "Drain cleaning (1/year)",
      "Water heater anode rod check",
    ],
    cta: "Most Popular",
    popular: true,
  },
  {
    name: "Ultimate",
    price: "$45",
    period: "/month",
    features: [
      "Everything in Premium",
      "Water heater replacement discount",
      "Sewer line camera inspection (1/year)",
      "Whole-home water test (annual)",
      "Appliance connection checks",
      "Dedicated account manager",
    ],
    cta: "Best Value",
    popular: false,
  },
];

const faqs = [
  { q: "Can I cancel anytime?", a: "Yes, you can cancel anytime with 30 days' notice. No penalties or fees." },
  { q: "What if I sell my home?", a: "The plan is transferable to the new homeowner, adding value to your sale." },
  { q: "Are there any hidden fees?", a: "No hidden fees. The monthly price includes all maintenance visits and discounts." },
  { q: "What's not covered?", a: "Replacement parts for failed equipment (discounted for members), cosmetic issues, and damage from neglect or Acts of God." },
  { q: "Can I upgrade/downgrade?", a: "Yes, you can change your plan tier at any time. Changes take effect next billing cycle." },
  { q: "Is there a contract?", a: "No long-term contract. Month-to-month with 30-day cancellation notice." },
];

function EnergySavingsPlanPage() {
  return (
    <>
      <Hero
        headline="Energy Savings Plan"
        subheadline="Protect your home's vital systems with HydroSync's comprehensive maintenance plan. Prevent breakdowns, save energy, and extend equipment life - all for one low monthly fee."
        primaryCta={{ text: "Enroll Now", link: "/schedule" }}
        secondaryCta={{ text: "Call (614) 232-2222", link: "tel:6142322222" }}
        trustBadges={[
          { icon: <Shield className="w-6 h-6" />, label: "Licensed & Insured", value: "Since 1986" },
          { icon: <Bolt className="w-6 h-6" />, label: "Energy Savings", value: "15-30%" },
          { icon: <PiggyBank className="w-6 h-6" />, label: "Avg. Annual Savings", value: "$400+" },
          { icon: <CheckCircle className="w-6 h-6" />, label: "Satisfaction", value: "Guaranteed" },
        ]}
      />

      <section className="py-20 md:py-24 bg-neutral-50" aria-labelledby="features-heading">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              What's Included
            </h2>
            <p className="text-lg text-neutral-600">Comprehensive coverage for your home's critical systems</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {planFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl border border-neutral-200 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{feature.title}</h3>
                <p className="text-neutral-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24" aria-labelledby="pricing-heading">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="pricing-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-neutral-600">Choose the plan that fits your home and budget. No contracts - cancel anytime.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.article
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl border border-neutral-200 p-6 md:p-8 ${tier.popular ? "border-primary-300 shadow-lg" : ""}`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                    {tier.popular ? "Most Popular" : "Best Value"}
                  </span>
                )}
                <h3 className="text-xl font-bold text-neutral-900 mb-1">{tier.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl font-bold text-neutral-900">{tier.price}</span>
                  <span className="text-neutral-500">{tier.period}</span>
                </div>
                <ul className="space-y-3 mb-8" role="list">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-neutral-600">
                      <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={tier.popular ? "primary" : "outline"} size="lg">
                  {tier.cta}
                </Button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-neutral-50" aria-labelledby="savings-heading">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="savings-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              The HydroSync Difference
            </h2>
            <p className="text-lg text-neutral-600">See what our members save on average</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "$400+", label: "Avg. Annual Savings", icon: <PiggyBank className="w-8 h-8" /> },
              { value: "15-30%", label: "Energy Reduction", icon: <Bolt className="w-8 h-8" /> },
              { value: "2x", label: "Equipment Lifespan", icon: <Leaf className="w-8 h-8" /> },
              { value: "98%", label: "Member Retention", icon: <CheckCircle className="w-8 h-8" /> },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl border border-neutral-200"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600">
                  {stat.icon}
                </div>
                <p className="text-3xl font-bold text-neutral-900 mb-1">{stat.value}</p>
                <p className="text-neutral-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-primary-600 text-white" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-primary-100 mb-8">Everything you need to know about the Energy Savings Plan</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Start Saving?"
        subtitle="Join thousands of Central Ohio homeowners who trust HydroSync to protect their homes and save money."
        buttons={[
          { text: "Enroll Now", link: "/schedule", variant: "primary" },
          { text: "Call (614) 232-2222", link: "tel:6142322222", variant: "outline" },
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
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="px-5 pb-5"
      >
        <div className="pt-4 border-t border-neutral-100 text-neutral-600 leading-relaxed">{answer}</div>
      </motion.div>
    </motion.details>
  );
}

export default EnergySavingsPlanPage;