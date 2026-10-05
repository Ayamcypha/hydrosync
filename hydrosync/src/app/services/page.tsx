import { ServiceGrid, ServiceCard } from "@/components/sections";
import { Hero } from "@/components/sections";
import { Wrench, Droplets, Wind, Home, Building2, Zap, Calendar, Phone, Shield, Truck, Star, Clock } from "lucide-react";

const serviceCategories = [
  {
    title: "HVAC Services",
    description: "Heating, cooling, and indoor air quality solutions",
    icon: Home,
    href: "/services/hvac",
    services: [
      { title: "Heating Services", href: "/services/hvac/heating", description: "Furnace, boiler, heat pump & geothermal" },
      { title: "Cooling Services", href: "/services/hvac/cooling", description: "AC installation, repair & maintenance" },
      { title: "Air Quality", href: "/services/hvac/air-quality", description: "Purification, humidification & ventilation" },
    ],
  },
  {
    title: "Plumbing Services",
    description: "Complete residential plumbing solutions",
    icon: Wrench,
    href: "/services/plumbing",
    services: [
      { title: "Emergency Plumbing", href: "/services/plumbing/emergency", description: "24/7 burst pipes, leaks & backups" },
      { title: "Kitchen & Bath", href: "/services/plumbing/kitchen", description: "Fixtures, disposals, water lines" },
      { title: "Water Treatment", href: "/services/plumbing/water-treatment", description: "Softeners & filtration systems" },
      { title: "Water Heaters", href: "/services/plumbing/water-heaters", description: "Tank & tankless installation & repair" },
      { title: "Gas Lines", href: "/services/plumbing/gas-line", description: "Installation, repair & leak detection" },
    ],
  },
  {
    title: "Sewer & Drains",
    description: "Professional drain cleaning & sewer repair",
    icon: Droplets,
    href: "/services/sewer-drains",
    services: [
      { title: "Drain Cleaning", href: "/services/sewer-drains/drain-cleaning", description: "Clogged drains & slow drainage" },
      { title: "Hydrojetting", href: "/services/sewer-drains/hydrojetting", description: "High-pressure pipe cleaning" },
      { title: "Camera Inspection", href: "/services/sewer-drains/camera-inspection", description: "Video pipe inspection" },
      { title: "Sewer Line Repair", href: "/services/sewer-drains/sewer-line", description: "Trenchless & traditional repair" },
    ],
  },
  {
    title: "Commercial Services",
    description: "Business HVAC & plumbing solutions",
    icon: Building2,
    href: "/services/commercial",
    services: [
      { title: "Commercial HVAC", href: "/services/commercial/hvac", description: "Installation, maintenance & repair" },
      { title: "Commercial Plumbing", href: "/services/commercial/plumbing", description: "Fixtures, grease traps & more" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        headline="Comprehensive Plumbing, HVAC & Drain Services"
        subheadline="From emergency repairs to large-scale installations, our licensed professionals deliver efficient, mess-free solutions tailored to your needs. We handle it all under one roof."
        primaryCta={{ text: "Schedule Service", link: "/schedule" }}
        secondaryCta={{ text: "Call (614) 232-2222", link: "tel:6142322222" }}
        backgroundImage="/pics/pexels-2157750954-34938439.jpg"
        trustBadges={[
          { icon: <Shield className="w-6 h-6" />, label: "Licensed & Insured", value: "Since 1986" },
          { icon: <Clock className="w-6 h-6" />, label: "24/7 Emergency", value: "Live Answer" },
          { icon: <Truck className="w-6 h-6" />, label: "80+ Vehicles", value: "Rapid Response" },
          { icon: <Star className="w-6 h-6" />, label: "4.8★ Rating", value: "4,200+ Reviews" },
        ]}
      />

      <section className="py-20 md:py-24" aria-labelledby="categories-heading">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="categories-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Explore Our Service Categories
            </h2>
            <p className="text-lg text-neutral-600">
              Click any category to explore specific services and find exactly what you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((category) => (
              <article key={category.title} className="group">
                <a
                  href={category.href}
                  className="block h-full bg-white rounded-2xl border border-neutral-200 p-8 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                    <category.icon className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-neutral-600 mb-6">{category.description}</p>
                  <ul className="space-y-3 mb-6" role="list">
                    {category.services.map((svc) => (
                      <li key={svc.title} className="flex items-start gap-3 text-sm text-neutral-600 hover:text-primary-600 transition-colors">
                        <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{svc.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-primary-600 font-medium text-sm group-hover:gap-3 transition-all">
                    <span>View Services</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-neutral-50" aria-labelledby="all-services-heading">
        <div className="container mx-auto px-4">
          <ServiceGrid
            title="All Services at a Glance"
            subtitle="Browse our complete service offerings. Can't find what you're looking for? Give us a call!"
            services={[
              {
                title: "Furnace Installation",
                description: "High-efficiency furnace installation with full system commissioning",
                icon: <Zap className="w-7 h-7" />,
                href: "/services/hvac/heating/furnace-installation",
              },
              {
                title: "AC Replacement",
                description: "Complete AC system replacement with proper sizing & installation",
                icon: <Wind className="w-7 h-7" />,
                href: "/services/hvac/cooling/ac-replacement",
              },
              {
                title: "Emergency Plumbing",
                description: "24/7 response for burst pipes, major leaks & flooding",
                icon: <Droplets className="w-7 h-7" />,
                href: "/services/plumbing/emergency",
              },
              {
                title: "Drain Cleaning",
                description: "Professional drain clearing for sinks, tubs, showers & main lines",
                icon: <Wind className="w-7 h-7" />,
                href: "/services/sewer-drains/drain-cleaning",
              },
              {
                title: "Water Heater Install",
                description: "Tank & tankless water heater installation & replacement",
                icon: <Zap className="w-7 h-7" />,
                href: "/services/plumbing/water-heaters",
              },
              {
                title: "Commercial HVAC",
                description: "Complete commercial heating & cooling solutions",
                icon: <Building2 className="w-7 h-7" />,
                href: "/services/commercial/hvac",
              },
            ]}
            viewAllLink="/services"
            viewAllText="Browse All Services"
          />
        </div>
      </section>

      <section className="py-20 md:py-24 bg-primary-600 text-white" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4 text-center">
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Schedule Your Service?
          </h2>
          <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Booking with HydroSync is simple. Contact us anytime via phone or schedule online. Our 24/7 live answering team ensures prompt, professional assistance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/schedule"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-primary-600 font-semibold text-lg hover:bg-primary-50 transition-colors shadow-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Service
            </a>
            <a
              href="tel:6142322222"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-white text-white font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (614) 232-2222
            </a>
          </div>
        </div>
      </section>
    </>
  );
}