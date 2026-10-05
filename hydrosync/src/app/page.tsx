import { Hero, ServiceGrid, ServiceCard, WhyChooseUs, TrustSignals, CTASection, ReviewsCarousel } from "@/components/sections";
import { Zap, Wrench, Droplets, Wind, Home, Building2, Calendar, Phone, Shield, Clock, Truck, Star } from "lucide-react";

const services = [
  {
    title: "Heating Services",
    description: "Furnace, boiler, heat pump & geothermal installation, repair & maintenance",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2.5-5-2.5-5 0C7 16 12 16 12 16s5-3 5-7.343" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    href: "/services/hvac/heating",
    featured: true,
  },
  {
    title: "Cooling Services",
    description: "AC installation, replacement, repair & maintenance for all major brands",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    href: "/services/hvac/cooling",
  },
  {
    title: "Indoor Air Quality",
    description: "Air purification, humidification, ventilation & smart thermostat installation",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    href: "/services/hvac/air-quality",
  },
  {
    title: "Plumbing Services",
    description: "Complete plumbing solutions including kitchen, bathroom, water treatment & gas lines",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    href: "/services/plumbing",
    featured: true,
  },
  {
    title: "Sewer & Drains",
    description: "Drain cleaning, hydrojetting, camera inspection & sewer line repair/replacement",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V4" />
      </svg>
    ),
    href: "/services/sewer-drains",
  },
  {
    title: "Commercial Services",
    description: "HVAC & plumbing for businesses, multi-family, restaurants & industrial facilities",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    href: "/services/commercial",
  },
];

const trustBadges = [
  { icon: <Shield className="w-6 h-6" />, label: "Licensed & Insured", value: "Since 1986" },
  { icon: <Clock className="w-6 h-6" />, label: "24/7 Emergency", value: "Live Answer" },
  { icon: <Truck className="w-6 h-6" />, label: "80+ Vehicles", value: "Rapid Response" },
  { icon: <Star className="w-6 h-6" />, label: "4.8★ Rating", value: "4,200+ Reviews" },
];

export default function HomePage() {
  return (
    <>
      <Hero
        headline="Trusted Plumbing & HVAC Services in Columbus, Ohio"
        subheadline="Reliable Service Since 1986. Licensed, insured, and available 24/7 for all your heating, cooling, and plumbing needs."
        primaryCta={{ text: "Schedule Service", link: "/schedule" }}
        secondaryCta={{ text: "Call Now", link: "tel:6142322222" }}
        backgroundImage="/plumbing.jpg"
      />

      <ServiceGrid
        title="Our Comprehensive Services"
        subtitle="From emergency repairs to large-scale installations, our licensed professionals deliver efficient, mess-free solutions tailored to your needs."
        services={services}
        viewAllLink="/services"
        viewAllText="View All Services"
      />

      <WhyChooseUs />

      <TrustSignals />

      <ReviewsCarousel />

      <CTASection
        title="Need a Plumbing, Heating or Cooling Expert?"
        subtitle="You're in the right place. Booking your service with HydroSync is simple. Contact us anytime via phone or schedule online. Our 24/7 live answering team ensures you receive prompt, professional assistance whenever you need it."
        buttons={[
          { text: "Schedule Service", link: "/schedule", variant: "primary" },
          { text: "Call (614) 232-2222", link: "tel:6142322222", variant: "outline" },
        ]}
      />
    </>
  );
}