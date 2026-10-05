import { ServiceHero, ServiceBenefits, ServiceCTA, ServiceContent } from "@/components/service";
import { Shield, Truck, Star, Clock, Users, Home, Building2, Wrench, Droplets, Zap, HardHat, Factory, Briefcase, Cog } from "lucide-react";

export default function CommercialHVACPage() {
  return (
    <>
      <ServiceHero
        title="Commercial HVAC Services"
        description="Comprehensive commercial HVAC solutions for businesses across Central Ohio. From office buildings and restaurants to multi-family housing and industrial facilities - HydroSync keeps your operations running smoothly."
        category={{ title: "Commercial", slug: "commercial" }}
        backgroundImage="/pics/pexels-2157750954-34938439.jpg"
        features={[
          "Commercial licensed & insured",
          "24/7 emergency commercial service",
          "Preventive maintenance programs",
          "Multi-location service agreements",
          "Code compliance & permitting",
          "Dedicated account management",
        ]}
        ctaText="Request Commercial Quote"
        ctaLink="/schedule"
      />

      <ServiceBenefits
        title="Why Choose HydroSync for Commercial HVAC?"
        benefits={[
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Commercial Expertise",
            description: "Decades of experience with commercial HVAC, plumbing, and code requirements across all property types.",
          },
          {
            icon: <Truck className="w-6 h-6" />,
            title: "Minimal Disruption",
            description: "We work around your schedule - nights, weekends, and phased projects to keep your business open.",
          },
          {
            icon: <Star className="w-6 h-6" />,
            title: "Preventive Programs",
            description: "Custom maintenance plans reduce emergency calls by 80% and extend equipment life.",
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Scalable Solutions",
            description: "From single locations to multi-property portfolios - centralized billing and reporting.",
          },
          {
            icon: <Clock className="w-6 h-6" />,
            title: "24/7 Emergency Response",
            description: "Critical system failures get priority dispatch with commercial-grade parts on trucks.",
          },
          {
            icon: <Home className="w-6 h-6" />,
            title: "Compliance & Documentation",
            description: "Full permit handling, inspection coordination, and digital documentation for your records.",
          },
        ]}
      />

      <ServiceContent
        title="Commercial HVAC Installation"
        content={(
          <>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Commercial HVAC Installation</h3>
            <p className="mb-6">Design-build and plan-spec installation for new construction, renovation, and replacement projects.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Rooftop units (RTUs) - gas/electric & heat pump</li>
              <li>VRF/VRV multi-zone systems</li>
              <li>Chillers, boilers & cooling towers</li>
              <li>Make-up air & ventilation systems</li>
              <li>Ductwork design, fabrication & installation</li>
              <li>Building automation system (BAS) integration</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Commercial HVAC Maintenance</h3>
            <p className="mb-6">Proactive maintenance programs tailored to your equipment, usage patterns, and budget.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Quarterly, bi-annual, or monthly visits</li>
              <li>Full system inspection & performance testing</li>
              <li>Filter & belt replacement included</li>
              <li>Coil cleaning & refrigerant analysis</li>
              <li>Economizer & damper calibration</li>
              <li>Priority emergency service & discounts</li>
              <li>Digital maintenance reports & tracking</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Commercial HVAC Repair</h3>
            <p className="mb-6">Rapid response for commercial system failures with fully stocked service vehicles.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>RTU compressor, fan & control board replacement</li>
              <li>VRF system diagnostics & repair</li>
              <li>Chiller & boiler emergency repair</li>
              <li>Refrigerant leak detection & repair</li>
              <li>Ductwork repair & airflow balancing</li>
              <li>BAS troubleshooting & reprogramming</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Commercial Air Purification</h3>
            <p className="mb-6">Healthy building solutions for offices, healthcare, education, and hospitality.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>In-duct UV-C disinfection systems</li>
              <li>HEPA & MERV 13+ filtration upgrades</li>
              <li>Bipolar ionization systems</li>
              <li>Portable commercial air scrubbers</li>
              <li>IAQ monitoring & reporting</li>
            </ul>
          </>
        )}
      />

      <ServiceCTA
        title="Partner with HydroSync for Your Commercial HVAC Needs"
        description="Join hundreds of Central Ohio businesses that trust HydroSync for their commercial HVAC needs. Request a free assessment and quote today."
        primaryCta={{ text: "Request Commercial Quote", link: "/schedule" }}
        secondaryCta={{ text: "Call Commercial Division: (614) 232-2222", link: "tel:6142322222" }}
      />
    </>
  );
}