"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui";
import { Separator } from "@/components/ui/Layout";
import {
  Menu,
  X,
  Phone,
  Calendar,
  MapPin,
  Truck,
  Shield,
  Star,
  Clock,
  Wrench,
  Home,
  Building2,
  Zap,
  Droplets,
  Wind,
} from "lucide-react";

interface ServiceItem {
  title: string;
  href: string;
  description?: string;
  slug?: string;
}

interface ServiceCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  services: ServiceItem[];
  subServices?: Record<string, string[]>;
}

const serviceCategories: ServiceCategory[] = [
  {
    title: "HVAC",
    icon: Home,
    description: "Heating, Cooling & Air Quality",
    services: [
      { title: "Heating Services", href: "/services/hvac/heating", slug: "heating", description: "Furnace, boiler, heat pump & geothermal" },
      { title: "Cooling Services", href: "/services/hvac/cooling", slug: "cooling", description: "AC installation, repair & maintenance" },
      { title: "Air Quality", href: "/services/hvac/air-quality", slug: "air-quality", description: "Purification, humidification & ventilation" },
      { title: "Commercial HVAC", href: "/services/commercial-hvac", slug: "commercial-hvac", description: "Business heating & cooling solutions" },
    ],
    subServices: {
      heating: [
        "Furnace Installation",
        "Furnace Replacement",
        "Furnace Repair",
        "Furnace Maintenance",
        "Ductless Heating",
        "Geothermal Heating",
        "Boiler Installation",
        "Boiler Repair",
        "Heat Pump Repair",
        "Heat Pump Replacement",
        "Heat Pump Maintenance",
      ],
      cooling: [
        "AC Replacement/Installation",
        "AC Maintenance",
        "AC Repair",
        "Ductless Air Conditioning",
        "Geothermal Cooling",
        "Heat Pump Installation",
      ],
      airQuality: [
        "Carbon Monoxide Alarms",
        "Smart Thermostat Install",
        "UV Germicidal Lights",
        "Ventilation Install/Repair",
        "Whole-House Humidifier",
      ],
    },
  },
  {
    title: "Sewer & Drains",
    icon: Droplets,
    description: "Drain cleaning & sewer repair",
    services: [
      { title: "Camera Line Inspection", href: "/services/sewer-drains/camera-inspection", slug: "camera-inspection" },
      { title: "Catch Basins Services", href: "/services/sewer-drains/catch-basins", slug: "catch-basins" },
      { title: "Clogged Toilet Repairs", href: "/services/sewer-drains/toilet-repair", slug: "toilet-repair" },
      { title: "Drain Cleaning", href: "/services/sewer-drains/drain-cleaning", slug: "drain-cleaning" },
      { title: "Ejector Pumps", href: "/services/sewer-drains/ejector-pumps", slug: "ejector-pumps" },
      { title: "Hydrojetting", href: "/services/sewer-drains/hydrojetting", slug: "hydrojetting" },
      { title: "Sewer Line Services", href: "/services/sewer-drains/sewer-line", slug: "sewer-line" },
      { title: "Pipe Lining & Patching", href: "/services/sewer-drains/pipe-lining", slug: "pipe-lining" },
    ],
  },
  {
    title: "Plumbing Services",
    icon: Wrench,
    description: "Complete plumbing solutions",
    services: [
      { title: "Emergency Services", href: "/services/plumbing/emergency", slug: "emergency", description: "24/7 emergency plumbing" },
      { title: "Kitchen Plumbing", href: "/services/plumbing/kitchen", slug: "kitchen", description: "Fixtures, disposals & more" },
      { title: "Water Treatment", href: "/services/plumbing/water-treatment", slug: "water-treatment", description: "Softeners & filtration" },
      { title: "Backflow Testing", href: "/services/plumbing/backflow", slug: "backflow", description: "Certification & testing" },
      { title: "Water Line Services", href: "/services/plumbing/water-line", slug: "water-line", description: "Repiping & installation" },
      { title: "Gas Line Services", href: "/services/plumbing/gas-line", slug: "gas-line", description: "Installation & repair" },
      { title: "Sump Pumps", href: "/services/plumbing/sump-pumps", slug: "sump-pumps", description: "Installation & maintenance" },
      { title: "Slab Leak Repairs", href: "/services/plumbing/slab-leaks", slug: "slab-leaks", description: "Detection & repair" },
      { title: "Water Heaters", href: "/services/plumbing/water-heaters", slug: "water-heaters", description: "Tank & tankless" },
    ],
    subServices: {
      emergency: ["Burst Pipe Repair", "Emergency Drain Cleaning", "Gas Leak Response"],
      kitchen: ["Fixture Repair & Replacement", "Garbage Disposal", "Water Line Install"],
      waterTreatment: ["Water Softeners", "Water Filtration Systems"],
      waterLine: ["Repiping", "Water Line Installation", "Water Line Repair"],
      gasLine: ["Gas Line Installation", "Gas Line Repair", "Gas Leak Detection"],
      waterHeaters: ["Storage Tank Water Heater", "Tankless Water Heaters", "Water Heater Repair"],
    },
  },
  {
    title: "Commercial Plumbing",
    icon: Building2,
    description: "Business plumbing solutions",
    services: [
      { title: "Fixture Repair & Replacement", href: "/services/commercial-plumbing/fixtures", slug: "fixtures" },
      { title: "Grease Trap Installation", href: "/services/commercial-plumbing/grease-traps", slug: "grease-traps" },
    ],
  },
];

const trustSignals = [
  { icon: Truck, title: "Rapid Response", desc: "80+ service vehicles" },
  { icon: Shield, title: "Licensed & Insured", desc: "Certified professionals" },
  { icon: Star, title: "4.8★ Rating", desc: "4,200+ reviews" },
  { icon: Clock, title: "24/7 Emergency", desc: "Live answer anytime" },
];

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeCategory: number;
  setActiveCategory: (index: number | ((prev: number) => number)) => void;
}

export function MegaMenu({ isOpen, onClose, activeCategory, setActiveCategory }: MegaMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setActiveCategory((c: number) => (c + 1) % serviceCategories.length);
      if (e.key === "ArrowLeft") setActiveCategory((c: number) => (c - 1 + serviceCategories.length) % serviceCategories.length);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, setActiveCategory]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  const activeCat = serviceCategories[activeCategory];

  if (!isOpen) return null;

  return (
    <motion.div
      ref={menuRef}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="fixed top-full left-0 right-0 z-50 bg-white border-t border-neutral-200 shadow-xl overflow-hidden"
      role="dialog"
      aria-label="Service menu"
    >
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
          <motion.nav
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="lg:col-span-1 border-r lg:border-r-0 lg:border-b-0 pb-6 lg:pb-0 border-neutral-200"
            aria-label="Service categories"
          >
            <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-1" role="listbox" aria-label="Service categories">
              {serviceCategories.map((cat, index) => (
                <li key={cat.title}>
                  <button
                    role="option"
                    aria-selected={index === activeCategory}
                    onClick={() => setActiveCategory(index)}
                    className={cn(
                      "w-full text-left px-3 py-3 rounded-xl transition-all duration-200 flex items-center gap-3",
                      "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
                      index === activeCategory
                        ? "bg-primary-50 text-primary-700 shadow-sm"
                        : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                    )}
                  >
                    <cat.icon className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                    <span className="font-medium">{cat.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h4 className="text-lg font-bold text-neutral-900 mb-2">{activeCat.title}</h4>
              <p className="text-neutral-500 text-sm">{activeCat.description}</p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
              {activeCat.services.map((svc) => (
                <li key={svc.title}>
                  <Link
                    href={svc.href}
                    onClick={onClose}
                    className="block p-4 rounded-xl border border-neutral-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 group"
                  >
                    <h5 className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
                      {svc.title}
                    </h5>
                    {svc.description && (
                      <p className="text-sm text-neutral-500 mt-1">{svc.description}</p>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            {activeCat.subServices && Object.keys(activeCat.subServices).length > 0 && (
              <div className="pt-4 border-t border-neutral-200">
                <h5 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                  Popular Sub-Services
                </h5>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(activeCat.subServices).flatMap(([serviceSlug, subs]) =>
                    subs.slice(0, 8).map((sub) => (
                      <Link
                        key={`${serviceSlug}-${sub}`}
                        href={activeCat.services.find(s => s.slug === serviceSlug)?.href || activeCat.services[0]?.href || "#"}
                        onClick={onClose}
                        className="px-3 py-1.5 text-sm bg-neutral-100 text-neutral-700 rounded-full hover:bg-primary-100 hover:text-primary-700 transition-colors"
                      >
                        {sub}
                      </Link>
                    ))
                  )}
                </div>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="lg:col-span-1 border-l lg:border-l-0 lg:border-t-0 pt-6 lg:pt-0 border-neutral-200 space-y-4"
            aria-label="Trust signals"
          >
            <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">Why Choose Us</h3>
            <ul className="space-y-4" role="list">
              {trustSignals.map((signal) => (
                <li key={signal.title} className="flex items-start gap-3 p-3 rounded-xl hover:bg-neutral-50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <signal.icon className="w-5 h-5 text-primary-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h5 className="font-medium text-neutral-900">{signal.title}</h5>
                    <p className="text-sm text-neutral-500">{signal.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-neutral-200">
              <Button className="w-full" size="lg" onClick={onClose}>
                <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
                Schedule Service
              </Button>
              <Button variant="outline" className="w-full" size="lg" onClick={onClose}>
                <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                Call: (614) 232-2222
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

interface HeaderProps {
  transparent?: boolean;
}

export function Header({ transparent = false }: HeaderProps) {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSolid = !transparent || scrolled;

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isSolid
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-neutral-200"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2" aria-label="HydroSync Home">
            <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <span className="font-bold text-xl text-neutral-900 hidden sm:block">HydroSync</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {serviceCategories.map((cat, index) => (
              <div key={cat.title} className="relative">
                <button
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors rounded-lg",
                    megaMenuOpen && activeCategory === index
                      ? "text-primary-600 bg-primary-50"
                      : "text-neutral-600 hover:text-primary-600 hover:bg-neutral-100"
                  )}
                  onClick={() => { setActiveCategory(index); setMegaMenuOpen(true); }}
                  onFocus={() => { setActiveCategory(index); setMegaMenuOpen(true); }}
                  aria-haspopup="true"
                  aria-expanded={megaMenuOpen && activeCategory === index}
                  aria-controls="mega-menu"
                >
                  <cat.icon className={cn("w-5 h-5", megaMenuOpen && activeCategory === index ? "text-primary-600" : "")} aria-hidden="true" />
                  {cat.title}
                  <svg className={cn("w-4 h-4", megaMenuOpen && activeCategory === index ? "text-primary-600" : "")} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-2 bg-neutral-100 rounded-xl">
              <Phone className="w-5 h-5 text-primary-600" aria-hidden="true" />
              <a href="tel:6142322222" className="font-semibold text-neutral-900 hover:text-primary-600 transition-colors">
                (614) 232-2222
              </a>
            </div>
            <Button size="md" className="hidden sm:inline-flex" onClick={() => setMegaMenuOpen(true)}>
              <Calendar className="w-4 h-4 mr-2" aria-hidden="true" />
              Schedule Service
            </Button>
            <button
              className="md:hidden p-2 rounded-lg text-neutral-600 hover:bg-neutral-100"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {megaMenuOpen && <MegaMenu isOpen={megaMenuOpen} onClose={() => setMegaMenuOpen(false)} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />}
      </AnimatePresence>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm md:hidden bg-white z-50 shadow-xl overflow-y-auto"
            role="dialog"
            aria-label="Mobile menu"
          >
            <div className="p-4 border-b border-neutral-200 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <span className="font-bold text-xl text-neutral-900">HydroSync</span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-neutral-600 hover:bg-neutral-100"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
            <nav className="p-4 space-y-2" aria-label="Mobile navigation">
              <Button className="w-full justify-start" variant="outline" size="lg" onClick={() => setMobileMenuOpen(false)}>
                <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
                Schedule Service
              </Button>
              <a href="tel:6142322222" className="flex items-center gap-3 px-4 py-3 text-neutral-900 font-medium" onClick={() => setMobileMenuOpen(false)}>
                <Phone className="w-6 h-6 text-primary-600" aria-hidden="true" />
                (614) 232-2222
              </a>
              <Separator className="my-4" />
              {serviceCategories.map((cat) => (
                <details key={cat.title} className="group">
                  <summary className="flex items-center gap-3 px-3 py-3 font-medium text-neutral-900 cursor-pointer list-none">
                    <cat.icon className="w-5 h-5 text-primary-600" aria-hidden="true" />
                    {cat.title}
                    <svg className="ml-auto w-5 h-5 text-neutral-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <ul className="pl-8 mt-2 space-y-2 border-l border-neutral-200">
                    {cat.services.map((svc) => (
                      <li key={svc.title}>
                        <Link href={svc.href} className="block px-3 py-2 text-sm text-neutral-600 hover:text-primary-600 rounded-lg hover:bg-neutral-50 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                          {svc.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
              <details className="group">
                <summary className="flex items-center gap-3 px-3 py-3 font-medium text-neutral-900 cursor-pointer list-none">
                  <Building2 className="w-5 h-5 text-primary-600" aria-hidden="true" />
                  Commercial
                  <svg className="ml-auto w-5 h-5 text-neutral-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <ul className="pl-8 mt-2 space-y-2 border-l border-neutral-200">
                  <li><Link href="/services/commercial-hvac" className="block px-3 py-2 text-sm text-neutral-600 hover:text-primary-600 rounded-lg hover:bg-neutral-50" onClick={() => setMobileMenuOpen(false)}>Commercial HVAC</Link></li>
                  <li><Link href="/services/commercial-plumbing" className="block px-3 py-2 text-sm text-neutral-600 hover:text-primary-600 rounded-lg hover:bg-neutral-50" onClick={() => setMobileMenuOpen(false)}>Commercial Plumbing</Link></li>
                </ul>
              </details>
              <Separator className="my-4" />
              <Link href="/about" className="block px-3 py-2 text-neutral-600 hover:text-primary-600 rounded-lg hover:bg-neutral-50 transition-colors" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
              <Link href="/contact" className="block px-3 py-2 text-neutral-600 hover:text-primary-600 rounded-lg hover:bg-neutral-50 transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              <Link href="/reviews" className="block px-3 py-2 text-neutral-600 hover:text-primary-600 rounded-lg hover:bg-neutral-50 transition-colors" onClick={() => setMobileMenuOpen(false)}>Reviews</Link>
              <Link href="/financing" className="block px-3 py-2 text-neutral-600 hover:text-primary-600 rounded-lg hover:bg-neutral-50 transition-colors" onClick={() => setMobileMenuOpen(false)}>Financing</Link>
              <Link href="/coupons" className="block px-3 py-2 text-neutral-600 hover:text-primary-600 rounded-lg hover:bg-neutral-50 transition-colors" onClick={() => setMobileMenuOpen(false)}>Coupons</Link>
              <Link href="/careers" className="block px-3 py-2 text-neutral-600 hover:text-primary-600 rounded-lg hover:bg-neutral-50 transition-colors" onClick={() => setMobileMenuOpen(false)}>Careers</Link>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </motion.header>
  );
}