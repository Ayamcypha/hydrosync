"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Layout";
import { cn } from "@/lib/utils";
import { CheckCircle, Shield, Truck, Star, Clock, Award, Users, Wrench, Heart } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const defaultFeatures: Feature[] = [
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Rapid Response",
    description: "With over 80 service vehicles and 150+ employees, we ensure prompt service to address your needs swiftly.",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Expert Technicians",
    description: "Our team comprises highly trained, certified, and licensed professionals dedicated to delivering top-notch service.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Comprehensive Guarantees",
    description: "We offer robust guarantees on select installations, providing you with peace of mind.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Exceptional Service",
    description: "Committed to excellence, we support you before, during, and after the job is completed.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "One-Stop Convenience",
    description: "As a full-service provider, we handle all your plumbing and HVAC needs under one roof.",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Customer Satisfaction",
    description: "With over 4,200 reviews and a 4.8★ rating, our customers' feedback speaks to our dedication.",
  },
];

interface WhyChooseUsProps {
  title?: string;
  subtitle?: string;
  features?: Feature[];
  className?: string;
}

export function WhyChooseUs({
  title = "Why Choose HydroSync?",
  subtitle = "Better care. Better value. Better results.™",
  features = defaultFeatures,
  className,
}: WhyChooseUsProps) {
  return (
    <section className={cn("py-20 md:py-24 bg-neutral-50", className)} aria-labelledby="why-choose-heading">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 id="why-choose-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-neutral-600">{subtitle}</p>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Why choose us features"
        >
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
              role="listitem"
            >
              <div className="bg-white rounded-2xl p-6 border border-neutral-200 hover:border-primary-200 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{feature.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

interface TrustSignal {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const defaultTrustSignals: TrustSignal[] = [
  { icon: <Award className="w-6 h-6" />, title: "A+ BBB Rating", description: "Accredited business since 1986" },
  { icon: <Shield className="w-6 h-6" />, title: "Licensed & Insured", description: "Fully certified technicians" },
  { icon: <Truck className="w-6 h-6" />, title: "80+ Service Vehicles", description: "Rapid response across Central Ohio" },
  { icon: <Star className="w-6 h-6" />, title: "4.8★ Google Rating", description: "4,200+ verified customer reviews" },
  { icon: <Clock className="w-6 h-6" />, title: "24/7 Emergency Service", description: "Live operators, day or night" },
  { icon: <Users className="w-6 h-6" />, title: "150+ Team Members", description: "Local experts you can trust" },
];

interface TrustSignalsProps {
  title?: string;
  signals?: TrustSignal[];
  className?: string;
}

export function TrustSignals({
  title = "Trusted by Central Ohio Since 1986",
  signals = defaultTrustSignals,
  className,
}: TrustSignalsProps) {
  return (
    <section className={cn("py-20 md:py-24 bg-white", className)} aria-labelledby="trust-heading">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 id="trust-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            {title}
          </h2>
        </motion.div>

        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
          role="list"
          aria-label="Trust signals"
        >
          {signals.map((signal, index) => (
            <motion.div
              key={signal.title}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="text-center p-4 md:p-6"
              role="listitem"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600">
                {signal.icon}
              </div>
              <h3 className="font-semibold text-neutral-900 mb-1">{signal.title}</h3>
              <p className="text-sm text-neutral-500">{signal.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

interface CTASectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  buttons: { text: string; link: string; variant?: "primary" | "secondary" | "outline" }[];
  className?: string;
}

export function CTASection({
  title,
  subtitle,
  backgroundImage,
  buttons,
  className,
}: CTASectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden py-20 md:py-24",
        backgroundImage ? "text-white" : "bg-primary-600 text-white",
        className
      )}
      aria-labelledby="cta-heading"
    >
      {backgroundImage && (
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <img src={backgroundImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary-900/80" />
        </div>
      )}

      <Container>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.h2
            id="cta-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {title}
          </motion.h2>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-primary-100 mb-8 max-w-2xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {buttons.map((btn, index) => (
              <motion.button
                key={btn.text}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
                onClick={() => window.location.href = btn.link}
              >
                <a
                  href={btn.link}
                  className={cn(
                    "inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200",
                    btn.variant === "primary"
                      ? "bg-white text-primary-600 hover:bg-primary-50 shadow-lg"
                      : btn.variant === "secondary"
                      ? "bg-secondary-500 text-white hover:bg-secondary-600"
                      : "border-2 border-white text-white hover:bg-white/10"
                  )}
                >
                  {btn.text}
                </a>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}