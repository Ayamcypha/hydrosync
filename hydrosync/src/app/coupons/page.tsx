"use client";

import { Hero, CTASection } from "@/components/sections";
import { Tag, Clock, Shield, CheckCircle, DollarSign, Percent, Tag as TagIcon, ScanLine, Copy } from "lucide-react";

const coupons = [
  {
    id: "HVAC100",
    title: "$100 Off New HVAC Installation",
    description: "Valid on complete system replacement (furnace + AC or heat pump). Cannot combine with other offers.",
    discountType: "fixed" as const,
    discountValue: 100,
    validUntil: "2026-12-31",
    terms: "New installations only. Must present coupon at time of estimate. Not valid with other promotions or maintenance plans.",
    featured: true,
  },
  {
    id: "MAINT50",
    title: "$50 Off HVAC Maintenance Tune-Up",
    description: "Complete system inspection, cleaning, and safety check for heating or cooling system.",
    discountType: "fixed" as const,
    discountValue: 50,
    validUntil: "2026-12-31",
    terms: "One system per coupon. Additional systems at regular price. Valid for residential customers only.",
  },
  {
    id: "PLUMB75",
    title: "$75 Off Any Plumbing Repair Over $300",
    description: "Applies to drain cleaning, leak repair, fixture installation, water heater service, and more.",
    discountType: "fixed" as const,
    discountValue: 75,
    validUntil: "2026-12-31",
    terms: "Minimum $300 repair. One coupon per service call. Emergency calls eligible.",
  },
  {
    id: "DRAIN99",
    title: "Drain Clearing - $99",
    description: "Main line or branch drain clearing with camera inspection included. Regularly $189+.",
    discountType: "fixed" as const,
    discountValue: 90,
    validUntil: "2026-12-31",
    terms: "Standard residential drains only. Hydrojetting and sewer line repair not included. Camera inspection value $99.",
  },
  {
    id: "WATER15",
    title: "15% Off Water Treatment Systems",
    description: "Water softeners, whole-house filtration, reverse osmosis, and combination systems.",
    discountType: "percentage" as const,
    discountValue: 15,
    validUntil: "2026-12-31",
    terms: "Equipment purchase and installation. Free water test included. Cannot combine with manufacturer rebates.",
  },
  {
    id: "EMERG25",
    title: "$25 Off Emergency Service Call",
    description: "Applied to the diagnostic fee for after-hours, weekend, or holiday emergency calls.",
    discountType: "fixed" as const,
    discountValue: 25,
    validUntil: "2026-12-31",
    terms: "Emergency calls only (outside normal business hours). One per household per year.",
  },
  {
    id: "NEW10",
    title: "10% Off for New Customers",
    description: "Welcome offer for first-time HydroSync customers on any service over $200.",
    discountType: "percentage" as const,
    discountValue: 10,
    validUntil: "2026-12-31",
    terms: "First-time customers only. Minimum $200 service. Must mention when scheduling.",
  },
  {
    id: "SENIOR10",
    title: "10% Senior Discount (65+)",
    description: "Our thanks to senior citizens - 10% off any service, any time.",
    discountType: "percentage" as const,
    discountValue: 10,
    validUntil: "2026-12-31",
    terms: "Age 65+. Must show ID. Cannot combine with other percentage discounts. Valid on labor only.",
  },
  {
    id: "VET10",
    title: "10% Military & First Responder Discount",
    description: "Active duty, veterans, police, fire, EMS - 10% off all services year-round.",
    discountType: "percentage" as const,
    discountValue: 10,
    validUntil: "2026-12-31",
    terms: "Valid ID required. Cannot combine with other percentage discounts. Valid on labor only.",
  },
];

export default function CouponsPage() {
  return (
    <>
      <Hero
        headline="Special Offers & Coupons"
        subheadline="Save on plumbing, HVAC, and drain services with our current promotions. New offers added regularly - bookmark this page!"
        primaryCta={{ text: "Schedule Service", link: "/schedule" }}
        secondaryCta={{ text: "Call (614) 232-2222", link: "tel:6142322222" }}
        trustBadges={[
          { icon: <Tag className="w-6 h-6" />, label: "Active Offers", value: "9+" },
          { icon: <DollarSign className="w-6 h-6" />, label: "Avg. Savings", value: "$75+" },
          { icon: <Shield className="w-6 h-6" />, label: "No Hidden Fees", value: "Transparent" },
          { icon: <Clock className="w-6 h-6" />, label: "Easy Redemption", value: "At Booking" },
        ]}
      />

      <section className="py-20 md:py-24" aria-labelledby="coupons-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coupons.map((coupon, index) => (
                <motion.article
                  key={coupon.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`relative bg-white rounded-2xl border border-neutral-200 p-6 ${coupon.featured ? "border-primary-300 shadow-lg" : ""}`}
                >
                  {coupon.featured && (
                    <span className="absolute -top-3 left-6 px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                      Popular
                    </span>
                  )}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-xs font-medium px-2 py-1 bg-neutral-100 text-neutral-700 rounded-full mb-2 inline-block">
                        {coupon.discountType === "percentage" ? `${coupon.discountValue}% OFF` : `$${coupon.discountValue} OFF`}
                      </span>
                      <h3 className="text-lg font-bold text-neutral-900">{coupon.title}</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-neutral-500">Expires</p>
                      <p className="text-sm font-medium text-neutral-900">{new Date(coupon.validUntil).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <p className="text-neutral-600 mb-4">{coupon.description}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <TagIcon className="w-4 h-4 text-primary-600" />
                    <span className="text-sm font-medium text-primary-600">Code: {coupon.id}</span>
                    <button
                      onClick={() => navigator.clipboard.writeText(coupon.id)}
                      className="ml-auto p-1 text-neutral-400 hover:text-primary-600 transition-colors"
                      aria-label="Copy coupon code"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  <details className="group">
                    <summary className="flex items-center justify-between text-sm text-neutral-500 cursor-pointer list-none">
                      <span>View Terms & Conditions</span>
                      <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="mt-3 pt-3 border-t border-neutral-100 text-sm text-neutral-600">{coupon.terms}</div>
                  </details>
                  <div className="mt-4 pt-4 border-t border-neutral-100">
                    <a
                      href="/schedule"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary-600 text-white font-medium text-sm hover:bg-primary-700 transition-colors"
                    >
                      <ScanLine className="w-4 h-4" />
                      Use This Offer
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-neutral-50" aria-labelledby="how-heading">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 id="how-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">How to Redeem</h2>
            <p className="text-lg text-neutral-600">Redeeming your coupon is easy - no printing required!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Choose Your Offer", description: "Browse our current coupons above and note the code (e.g., HVAC100).", icon: <TagIcon className="w-6 h-6" /> },
              { step: "2", title: "Schedule Service", description: "Book online or call (614) 232-2222. Mention the coupon code when booking.", icon: <Clock className="w-6 h-6" /> },
              { step: "3", title: "Save Automatically", description: "Your technician applies the discount at the time of service. No paper coupons needed!", icon: <CheckCircle className="w-6 h-6" /> },
            ].map((item) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center p-6 bg-white rounded-2xl border border-neutral-200"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600">
                  <span className="text-2xl font-bold">{item.step}</span>
                </div>
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-neutral-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24" aria-labelledby="ongoing-heading">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 id="ongoing-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Ongoing Discount Programs</h2>
            <p className="text-lg text-neutral-600">These discounts are always available - no coupon code needed, just ask!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Senior Discount (65+)", description: "10% off labor on all services, year-round. Must show ID at time of service.", icon: <Shield className="w-6 h-6" /> },
              { title: "Military & First Responders", description: "10% off labor for active duty, veterans, police, fire, EMS. Valid ID required.", icon: <Shield className="w-6 h-6" /> },
              { title: "Energy Savings Plan Members", description: "15% off all repairs, priority scheduling, no overtime charges. Starting at $25/mo.", icon: <Percent className="w-6 h-6" /> },
            ].map((program) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center p-6 bg-white rounded-2xl border border-neutral-200"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600">
                  {program.icon}
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">{program.title}</h3>
                <p className="text-neutral-600 text-sm">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Save?"
        subtitle="Schedule your service today and mention any of the coupons above. Our team will ensure you get the best available discount."
        buttons={[
          { text: "Schedule Service", link: "/schedule", variant: "primary" },
          { text: "Call (614) 232-2222", link: "tel:6142322222", variant: "outline" },
        ]}
      />
    </>
  );
}

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";