import { ServiceHero, ServiceBenefits, ServiceCTA, ServiceContent } from "@/components/service";
import { Shield, Truck, Star, Clock, Users, Home, Building2, Wrench, Droplets, Zap, HardHat, Factory, Briefcase } from "lucide-react";

export default function CommercialPage() {
  return (
    <>
      <ServiceHero
        title="Commercial Services"
        description="Comprehensive commercial HVAC and plumbing solutions for businesses across Central Ohio. From office buildings and restaurants to multi-family housing and industrial facilities - HydroSync keeps your operations running smoothly."
        category={{ title: "Services", slug: "services" }}
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
        title="Why Choose HydroSync for Commercial?"
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
        title="Commercial HVAC Services"
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

      <ServiceContent
        title="Commercial Plumbing Services"
        content={(
          <>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Commercial Plumbing Installation</h3>
            <p className="mb-6">New construction, tenant build-outs, and major renovation plumbing for all commercial property types.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>ADA-compliant fixture installation</li>
              <li>Commercial water heater systems (tank & tankless)</li>
              <li>Grease interceptors & grease traps</li>
              <li>Backflow prevention assemblies</li>
              <li>Medical gas & specialty piping</li>
              <li>Fire suppression system plumbing</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Commercial Plumbing Maintenance & Repair</h3>
            <p className="mb-6">Keep your facility's plumbing reliable with proactive maintenance and rapid repair response.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Drain & sewer line maintenance programs</li>
              <li>Grease trap pumping & maintenance</li>
              <li>Backflow testing & certification (annual)</li>
              <li>Water heater maintenance & replacement</li>
              <li>Fixture repair & retrofits (water conservation)</li>
              <li>Leak detection & water conservation audits</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Property Types We Serve</h3>
            <p className="mb-6">Our commercial teams have specialized experience across diverse property types.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Office buildings & corporate campuses</li>
              <li>Restaurants & food service</li>
              <li>Multi-family & apartment communities</li>
              <li>Healthcare & medical offices</li>
              <li>Retail centers & shopping malls</li>
              <li>Industrial & manufacturing facilities</li>
              <li>Schools & universities</li>
              <li>Hotels & hospitality</li>
              <li>Government & municipal buildings</li>
            </ul>
          </>
        )}
      />

      <ServiceCTA
        title="Partner with HydroSync for Your Commercial Needs"
        description="Join hundreds of Central Ohio businesses that trust HydroSync for their HVAC and plumbing needs. Request a free assessment and quote today."
        primaryCta={{ text: "Request Commercial Quote", link: "/schedule" }}
        secondaryCta={{ text: "Call Commercial Division: (614) 232-2222", link: "tel:6142322222" }}
      />
    </>
  );
}