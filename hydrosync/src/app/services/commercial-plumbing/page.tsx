import { ServiceHero, ServiceBenefits, ServiceCTA, ServiceContent } from "@/components/service";
import { Shield, Truck, Star, Clock, Users, Home, Building2, Wrench, Droplets, Zap, HardHat, Factory, Briefcase, Cog, Flame } from "lucide-react";

export default function CommercialPlumbingPage() {
  return (
    <>
      <ServiceHero
        title="Commercial Plumbing Services"
        description="Comprehensive commercial plumbing solutions for businesses across Central Ohio. New construction, tenant build-outs, maintenance, and emergency repair - all handled by licensed commercial plumbers."
        category={{ title: "Commercial", slug: "commercial" }}
        backgroundImage="/pics/pexels-jose-andres-pacheco-cortes-3641213-5463587.jpg"
        features={[
          "Commercial plumbing licensed & insured",
          "24/7 emergency commercial plumbing",
          "Preventive maintenance programs",
          "Multi-property service agreements",
          "Code compliance & permitting",
          "Dedicated account management",
        ]}
        ctaText="Request Commercial Quote"
        ctaLink="/schedule"
      />

      <ServiceBenefits
        title="Why Choose HydroSync for Commercial Plumbing?"
        benefits={[
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Commercial Expertise",
            description: "Decades of experience with commercial plumbing codes, ADA requirements, and high-demand systems.",
          },
          {
            icon: <Truck className="w-6 h-6" />,
            title: "Minimal Business Disruption",
            description: "We work nights, weekends, and phased schedules to keep your operations running smoothly.",
          },
          {
            icon: <Star className="w-6 h-6" />,
            title: "Preventive Programs",
            description: "Custom maintenance plans reduce emergency calls and extend system life.",
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Multi-Property Management",
            description: "Centralized billing, reporting, and scheduling for property management companies.",
          },
          {
            icon: <Clock className="w-6 h-6" />,
            title: "24/7 Emergency Response",
            description: "Critical plumbing failures get priority dispatch with commercial-grade parts on trucks.",
          },
          {
            icon: <Home className="w-6 h-6" />,
            title: "Code Compliance & Permits",
            description: "Full permit handling, inspection coordination, and digital documentation for your records.",
          },
        ]}
      />

      <ServiceContent
        title="Commercial Plumbing Installation"
        content={(
          <>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">New Construction & Tenant Build-Outs</h3>
            <p className="mb-6">Complete plumbing systems for new commercial buildings, renovations, and tenant improvements.</p>
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

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Specialty Commercial Services</h3>
            <p className="mb-6">Specialized plumbing services for unique commercial requirements.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>High-pressure water jetting for commercial lines</li>
              <li>Video camera inspection for large-diameter pipes</li>
              <li>Trenchless sewer repair for minimal disruption</li>
              <li>Water conservation retrofits & audits</li>
              <li>Medical gas system installation & testing</li>
              <li>Process piping for industrial facilities</li>
            </ul>
          </>
        )}
      />

      <ServiceCTA
        title="Partner with HydroSync for Your Commercial Plumbing Needs"
        description="Join hundreds of Central Ohio businesses that trust HydroSync for their commercial plumbing needs. Request a free assessment and quote today."
        primaryCta={{ text: "Request Commercial Quote", link: "/schedule" }}
        secondaryCta={{ text: "Call Commercial Division: (614) 232-2222", link: "tel:6142322222" }}
      />
    </>
  );
}