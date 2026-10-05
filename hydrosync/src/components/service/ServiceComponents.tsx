"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/ui";
import { cn } from "@/lib/utils";
import { ChevronRight, Check, Wrench, Home, Building2, Zap, Droplets, Wind, Shield, Truck, Star, Clock, Users, Phone } from "lucide-react";

interface ServiceNavProps {
  currentCategory: string;
  currentService?: string;
  categories: { title: string; slug: string; icon: React.ReactNode; services: { title: string; slug: string }[] }[];
  className?: string;
}

export function ServiceNav({ currentCategory, currentService, categories, className }: ServiceNavProps) {
  return (
    <nav className={cn("sticky top-24 z-40 hidden lg:block", className)} aria-label="Service navigation">
      <div className="bg-white rounded-2xl border border-neutral-200 p-4 shadow-sm">
        <div className="space-y-1">
          {categories.map((cat) => (
            <details key={cat.slug} className="group">
              <summary
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer list-none transition-colors",
                  cat.slug === currentCategory
                    ? "bg-primary-50 text-primary-700"
                    : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                )}
              >
                <span className={cn("w-5 h-5 flex-shrink-0", cat.slug === currentCategory ? "text-primary-600" : "text-neutral-400")}>
                  {cat.icon}
                </span>
                <span className="font-medium flex-1">{cat.title}</span>
                <ChevronRight className={cn("w-4 h-4 transition-transform", cat.slug === currentCategory ? "rotate-90" : "")} />
              </summary>
              <ul className="pl-8 mt-1 space-y-1 border-l border-neutral-200 animate-in slide-in-from-top-2 duration-200">
                {cat.services.map((svc) => (
                  <li key={svc.slug}>
                    <Link
                      href={`/services/${cat.slug}/${svc.slug}`}
                      className={cn(
                        "block px-3 py-1.5 text-sm rounded-lg transition-colors",
                        currentService === svc.slug
                          ? "bg-primary-50 text-primary-700 font-medium"
                          : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                      )}
                      aria-current={currentService === svc.slug ? "page" : undefined}
                    >
                      {svc.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </nav>
  );
}

interface ServiceCardProps {
  title: string;
  description?: string;
  icon: React.ReactNode;
  href: string;
  image?: string;
  featured?: boolean;
  features?: string[];
  className?: string;
}

export function ServiceCard({ title, description, icon, href, image, featured = false, features, className }: ServiceCardProps) {
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
            <p className="text-neutral-600 leading-relaxed mb-4">{description}</p>
          )}
          {features && features.length > 0 && (
            <ul className="space-y-2 mb-4" role="list">
              {features.slice(0, 3).map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-neutral-600">
                  <Check className="w-4 h-4 text-primary-600 flex-shrink-0" />
                  {feature}
                </li>
              ))}
              {features.length > 3 && (
                <li className="text-sm text-primary-600 font-medium">
                  +{features.length - 3} more features
                </li>
              )}
            </ul>
          )}
          <div className="flex items-center gap-2 text-primary-600 font-medium text-sm group-hover:gap-3 transition-all">
            <span>Learn More</span>
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

interface ServiceHeroProps {
  title: string;
  description?: string;
  category?: { title: string; slug: string };
  image?: string;
  backgroundImage?: string;
  features?: string[];
  ctaText?: string;
  ctaLink?: string;
  className?: string;
}

export function ServiceHero({ title, description, category, image, backgroundImage, features, ctaText = "Schedule Service", ctaLink = "/schedule", className }: ServiceHeroProps) {
  return (
    <section
      className={cn(
        "relative py-20 md:py-24 overflow-hidden",
        (image || backgroundImage) ? "" : "bg-neutral-50",
        className
      )}
      aria-labelledby="service-title"
    >
      {(image || backgroundImage) && (
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <img src={backgroundImage || image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 via-neutral-900/40 to-transparent" />
        </div>
      )}

<div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl sm:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
          {category && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
            >
              <Link href={`/services/${category.slug}`} className="hover:underline">
                {category.title}
              </Link>
              <span className="text-neutral-400">/</span>
              <span className="font-medium">{title}</span>
            </motion.div>
          )}

          <motion.h1
            id="service-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center",
              (image || backgroundImage) ? "text-white" : "text-neutral-900"
            )}
          >
            {title}
          </motion.h1>

{description && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={cn(
                "text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed text-center",
                backgroundImage ? "text-white" : "text-neutral-600"
              )}
            >
              {description}
            </motion.p>
          )}

          {features && features.length > 0 && (
            <motion.ul
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
              role="list"
            >
              {features.map((feature, index) => (
                <li key={feature} className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <Check className="w-6 h-6 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">{feature}</span>
                </li>
              ))}
            </motion.ul>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href={ctaLink}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary-600 text-white font-semibold text-lg hover:bg-primary-700 transition-colors shadow-lg"
            >
              {ctaText}
            </Link>
            <a
              href="tel:6142322222"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-primary-600 text-primary-600 font-semibold text-lg hover:bg-primary-50 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (614) 232-2222
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface ServiceContentProps {
  title: string;
  content: React.ReactNode;
  className?: string;
}

export function ServiceContent({ title, content, className }: ServiceContentProps) {
  return (
    <section className={cn("py-20 md:py-24", className)} aria-labelledby={title.toLowerCase().replace(/\s+/g, "-")}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl sm:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
          <motion.h2
            id={title.toLowerCase().replace(/\s+/g, "-")}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8"
          >
            {title}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="prose prose-neutral max-w-none"
          >
            {content}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface ServiceBenefitsProps {
  title?: string;
  benefits: { icon: React.ReactNode; title: string; description: string }[];
  className?: string;
}

export function ServiceBenefits({
  title = "Why Choose HydroSync for This Service?",
  benefits,
  className,
}: ServiceBenefitsProps) {
  return (
    <section className={cn("py-20 md:py-24 bg-neutral-50", className)} aria-labelledby="benefits-heading">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 id="benefits-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            {title}
          </h2>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Service benefits"
        >
          {benefits.map((benefit, index) => (
            <motion.article
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
              role="listitem"
            >
              <Card className="h-full hover:border-primary-200 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{benefit.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{benefit.description}</p>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCTAProps {
  title: string;
  description?: string;
  primaryCta: { text: string; link: string };
  secondaryCta?: { text: string; link: string };
  className?: string;
}

export function ServiceCTA({ title, description, primaryCta, secondaryCta, className }: ServiceCTAProps) {
  return (
    <section className={cn("py-20 md:py-24 bg-primary-600 text-white", className)} aria-labelledby="service-cta-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            id="service-cta-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {title}
          </motion.h2>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-primary-100 mb-8"
            >
              {description}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={primaryCta.link}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-primary-600 font-semibold text-lg hover:bg-primary-50 transition-colors shadow-lg"
            >
              {primaryCta.text}
            </a>
            {secondaryCta && (
              <a
                href={secondaryCta.link}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-white text-white font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                {secondaryCta.text}
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}