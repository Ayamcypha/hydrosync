"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui";
import { Separator } from "@/components/ui/Layout";
import { useMobileNav } from "@/context/MobileNavContext";
import {
  X,
  Phone,
  Calendar,
  Home,
  Building2,
  Zap,
  Droplets,
  Wrench,
  ChevronDown,
  ChevronRight,
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

interface AccordionProps {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function Accordion({ title, icon: Icon, children, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-neutral-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 px-3 py-3 font-medium text-neutral-900 text-left"
        aria-expanded={isOpen}
        aria-controls={`${title}-content`}
      >
        <Icon className="w-5 h-5 text-primary-600" aria-hidden="true" />
        <span>{title}</span>
        <ChevronDown
          className={cn("ml-auto w-5 h-5 text-neutral-400 transition-transform duration-200", isOpen && "rotate-180")}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`${title}-content`}
            ref={contentRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pl-8 mt-2 space-y-2 border-l border-neutral-200 pb-3 animate-in slide-in-from-top-2">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function MobileNavDrawer() {
  const { isOpen, close } = useMobileNav();
  const touchStartRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/50 md:hidden"
        onClick={close}
        aria-hidden="true"
      />
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed top-0 right-0 bottom-0 w-full max-w-sm md:hidden bg-white z-60 shadow-xl overflow-y-auto"
        role="dialog"
        aria-label="Mobile menu"
        onTouchStart={(e) => { touchStartRef.current = e.touches[0].clientX; }}
        onTouchMove={(e) => {
          if (!touchStartRef.current) return;
          const deltaX = e.touches[0].clientX - touchStartRef.current;
          if (deltaX > 50) {
            close();
            touchStartRef.current = null;
          }
        }}
        onTouchEnd={() => { touchStartRef.current = null; }}
      >
        <div className="p-4 border-b border-neutral-200 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" onClick={close}>
            <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <span className="font-bold text-xl text-neutral-900">HydroSync</span>
          </Link>
          <button
            onClick={close}
            className="p-2 rounded-lg text-neutral-600 hover:bg-neutral-100"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <nav className="p-4 space-y-2" aria-label="Mobile navigation">
          <Button className="w-full justify-start" variant="outline" size="lg" animateIcon iconLeft={<Calendar className="w-5 h-5" />} iconRightHover={<ChevronRight className="w-5 h-5" />} onClick={close}>
            Schedule Service
          </Button>
          <a href="tel:6142322222" className="flex items-center gap-3 px-4 py-3 text-neutral-900 font-medium" onClick={close}>
            <Phone className="w-6 h-6 text-primary-600" aria-hidden="true" />
            (614) 232-2222
          </a>
          <Separator className="my-4" />
          {serviceCategories.map((cat) => (
            <Accordion key={cat.title} title={cat.title} icon={cat.icon}>
              {cat.services.map((svc) => (
                <Link key={svc.title} href={svc.href} className="block px-3 py-2 text-sm text-neutral-600 hover:text-primary-600 rounded-lg hover:bg-neutral-50 transition-colors" onClick={close}>
                  {svc.title}
                </Link>
              ))}
            </Accordion>
          ))}
          <Accordion title="Commercial" icon={Building2}>
            <Link href="/services/commercial-hvac" className="block px-3 py-2 text-sm text-neutral-600 hover:text-primary-600 rounded-lg hover:bg-neutral-50 transition-colors" onClick={close}>Commercial HVAC</Link>
            <Link href="/services/commercial-plumbing" className="block px-3 py-2 text-sm text-neutral-600 hover:text-primary-600 rounded-lg hover:bg-neutral-50 transition-colors" onClick={close}>Commercial Plumbing</Link>
          </Accordion>
          <Separator className="my-4" />
          <Link href="/about" className="block px-3 py-2 text-neutral-600 hover:text-primary-600 rounded-lg hover:bg-neutral-50 transition-colors" onClick={close}>About Us</Link>
          <Link href="/contact" className="block px-3 py-2 text-neutral-600 hover:text-primary-600 rounded-lg hover:bg-neutral-50 transition-colors" onClick={close}>Contact</Link>
          <Link href="/reviews" className="block px-3 py-2 text-neutral-600 hover:text-primary-600 rounded-lg hover:bg-neutral-50 transition-colors" onClick={close}>Reviews</Link>
          <Link href="/financing" className="block px-3 py-2 text-neutral-600 hover:text-primary-600 rounded-lg hover:bg-neutral-50 transition-colors" onClick={close}>Financing</Link>
          <Link href="/coupons" className="block px-3 py-2 text-neutral-600 hover:text-primary-600 rounded-lg hover:bg-neutral-50 transition-colors" onClick={close}>Coupons</Link>
          <Link href="/careers" className="block px-3 py-2 text-neutral-600 hover:text-primary-600 rounded-lg hover:bg-neutral-50 transition-colors" onClick={close}>Careers</Link>
        </nav>
      </motion.aside>
    </>
  );
}