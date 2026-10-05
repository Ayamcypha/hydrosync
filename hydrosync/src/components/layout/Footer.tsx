"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Globe,
  MessageSquare,
  Send,
  Link as LinkIcon,
  Video,
  MapPin,
  Phone,
  Mail,
  Clock,
  Zap,
  Award,
  Shield,
  Truck,
  Star,
} from "lucide-react";

const footerLinks = {
  services: [
    { title: "Heating Services", href: "/services/hvac/heating" },
    { title: "Cooling Services", href: "/services/hvac/cooling" },
    { title: "Air Quality", href: "/services/hvac/air-quality" },
    { title: "Drain Cleaning", href: "/services/sewer-drains/drain-cleaning" },
    { title: "Emergency Plumbing", href: "/services/plumbing/emergency" },
    { title: "Water Heaters", href: "/services/plumbing/water-heaters" },
    { title: "Water Treatment", href: "/services/plumbing/water-treatment" },
    { title: "Commercial HVAC", href: "/services/commercial-hvac" },
    { title: "Commercial Plumbing", href: "/services/commercial-plumbing" },
  ],
  company: [
    { title: "About Us", href: "/about" },
    { title: "Our Team", href: "/about#team" },
    { title: "Careers", href: "/careers" },
    { title: "Apprenticeships", href: "/careers/apprenticeships" },
    { title: "Blog", href: "/blog" },
    { title: "Service Area", href: "/service-area" },
    { title: "Energy Savings Plan", href: "/energy-savings-plan" },
    { title: "Financing", href: "/financing" },
    { title: "Coupons", href: "/coupons" },
  ],
  support: [
    { title: "Contact Us", href: "/contact" },
    { title: "Schedule Service", href: "/schedule" },
    { title: "FAQs", href: "/faq" },
    { title: "Reviews", href: "/reviews" },
    { title: "Backflow Testing", href: "/services/plumbing/backflow" },
  ],
};

const trustBadges = [
  { icon: Award, title: "A+ BBB Rating", desc: "Accredited since 1986" },
  { icon: Shield, title: "Licensed & Insured", desc: "Fully certified technicians" },
  { icon: Truck, title: "80+ Service Vehicles", desc: "Rapid response times" },
  { icon: Star, title: "4.8★ Google Rating", desc: "4,200+ verified reviews" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300" role="contentinfo">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <Link href="/" className="flex items-center gap-2" aria-label="HydroSync Home">
              <div className="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" aria-hidden="true" />
              </div>
              <span className="font-bold text-2xl text-white">HydroSync</span>
            </Link>
            <p className="text-neutral-400 max-w-xs leading-relaxed">
              Central Ohio&apos;s trusted plumbing, HVAC, and drain experts since 1986.
              Licensed, insured, and available 24/7 for all your home service needs.
            </p>
            <div className="flex items-center gap-6 pt-4 border-t border-neutral-800">
              <a href="tel:6142322222" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span>(614) 232-2222</span>
              </a>
              <a href="mailto:info@hydrosync.com" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" aria-hidden="true" />
                <span>info@hydrosync.com</span>
              </a>
            </div>
            <div className="flex gap-4">
              {[
                { icon: Globe, href: "https://facebook.com", label: "Facebook" },
                { icon: MessageSquare, href: "https://instagram.com", label: "Instagram" },
                { icon: Send, href: "https://twitter.com", label: "Twitter" },
                { icon: LinkIcon, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Video, href: "https://youtube.com", label: "YouTube" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-primary-600 hover:text-white transition-all duration-200"
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            aria-label="Services"
          >
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.services.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-neutral-400 hover:text-white transition-colors text-sm">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            aria-label="Company"
          >
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.company.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-neutral-400 hover:text-white transition-colors text-sm">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            aria-label="Support"
          >
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.support.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-neutral-400 hover:text-white transition-colors text-sm">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-white mb-4">Contact Info</h3>
            <address className="not-italic space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-medium text-white">Main Office</p>
                  <p className="text-neutral-400">123 Service Drive, Columbus, OH 43215</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" aria-hidden="true" />
                <a href="tel:6142322222" className="text-neutral-400 hover:text-white transition-colors">(614) 232-2222</a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary-400 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-medium text-white">Hours</p>
                  <p className="text-neutral-400">Mon-Fri: 7am-7pm | Sat: 8am-4pm | Sun: Emergency Only</p>
                </div>
              </div>
            </address>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-neutral-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-neutral-500">
              <p>&copy; {currentYear} HydroSync. All rights reserved.</p>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span className="text-neutral-700">|</span>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <span className="text-neutral-700">|</span>
              <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-6">
              {trustBadges.map((badge) => (
                <div key={badge.title} className="flex items-center gap-2 text-sm text-neutral-400">
                  <badge.icon className="w-4 h-4 text-primary-400" aria-hidden="true" />
                  <span>{badge.title}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}