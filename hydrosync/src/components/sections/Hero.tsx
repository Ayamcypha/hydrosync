"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui";
import { Container, Flex } from "@/components/ui/Layout";
import { Calendar, Phone, CheckCircle, ChevronRight } from "lucide-react";

interface HeroProps {
  headline?: string;
  subheadline?: string;
  primaryCta?: { text: string; link: string };
  secondaryCta?: { text: string; link: string };
  trustBadges?: { icon: React.ReactNode; label: string; value: string }[];
  backgroundImage?: string;
  className?: string;
}

export function Hero({
  headline = "Trusted Plumbing & HVAC Services in Columbus, Ohio",
  subheadline = "Reliable Service Since 1986. Licensed, insured, and available 24/7 for all your heating, cooling, and plumbing needs.",
  primaryCta = { text: "Schedule Service", link: "/schedule" },
  secondaryCta = { text: "Call Now", link: "tel:6142322222" },
  trustBadges,
  backgroundImage,
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28",
        className
      )}
      aria-labelledby="hero-heading"
    >
      {backgroundImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute inset-0 -z-10"
          aria-hidden="true"
        >
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/60 via-neutral-900/30 to-transparent" />
        </motion.div>
      )}

      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium">
              <CheckCircle className="w-4 h-4" aria-hidden="true" />
              Locally Owned & Operated Since 1986
            </span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6",
              backgroundImage ? "text-white" : "text-neutral-900"
            )}
          >
            {headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className={cn(
              "text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed",
              backgroundImage ? "text-white" : "text-neutral-600"
            )}
          >
            {subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button size="xl" animateIcon iconLeft={<Calendar className="w-5 h-5" />} iconRightHover={<ChevronRight className="w-5 h-5" />} className="w-full sm:w-auto">
              <Link href={primaryCta.link}>
                {primaryCta.text}
              </Link>
            </Button>
            <Button size="xl" variant="outline" animateIcon iconLeft={<Phone className="w-5 h-5" />} iconRightHover={<ChevronRight className="w-5 h-5" />} className="w-full sm:w-auto">
              <Link href={secondaryCta.link}>
                {secondaryCta.text}
              </Link>
            </Button>
          </motion.div>

          {trustBadges && trustBadges.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
              role="list"
              aria-label="Trust badges"
            >
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex flex-col items-center gap-1"
                  role="listitem"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600">
                    {badge.icon}
                  </div>
                  <div>
                    <p className="font-bold text-neutral-900 text-sm">{badge.value}</p>
                    <p className="text-neutral-500 text-xs">{badge.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}

interface ServiceCardProps {
  title: string;
  description?: string;
  icon: React.ReactNode;
  href: string;
  image?: string;
  featured?: boolean;
}

export function ServiceCard({ title, description, icon, href, image, featured = false }: ServiceCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group"
    >
      <Link
        href={href}
        className="block h-full bg-white rounded-2xl border border-neutral-200 overflow-hidden transition-all duration-300 hover:border-primary-200"
      >
        {image && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            {featured && (
              <span className="absolute top-3 left-3 px-2 py-1 bg-secondary-500 text-white text-xs font-medium rounded-full">
                Popular
              </span>
            )}
          </div>
        )}
        <div className={cn("p-6", image ? "pt-6" : "pt-8")}>
          <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
            {title}
          </h3>
          {description && (
            <p className="text-neutral-600 leading-relaxed">{description}</p>
          )}
          <div className="mt-4 flex items-center gap-2 text-primary-600 font-medium text-sm group-hover:gap-3 transition-all">
            <span>Learn More</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

interface ServiceGridProps {
  title: string;
  subtitle?: string;
  services: ServiceCardProps[];
  viewAllLink?: string;
  viewAllText?: string;
  className?: string;
}

export function ServiceGrid({ title, subtitle, services, viewAllLink, viewAllText = "View All Services", className }: ServiceGridProps) {
  return (
    <section className={cn("py-20 md:py-24 bg-white", className)} aria-labelledby="services-heading">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-neutral-600">{subtitle}</p>
          )}
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Services"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              role="listitem"
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>

        {viewAllLink && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg">
              <Link href={viewAllLink}>
                {viewAllText}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </Button>
          </motion.div>
        )}
      </Container>
    </section>
  );
}