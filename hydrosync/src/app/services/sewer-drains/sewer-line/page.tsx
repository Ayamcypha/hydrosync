import { ServiceHero, ServiceBenefits, ServiceCTA, ServiceContent } from "@/components/service";
import { Shield, Truck, Star, Clock, Users, Home, Wrench, Droplets, Zap, Search, Camera, Waves, ArrowDownUp, Building2 } from "lucide-react";

export default function SewerLinePage() {
  return (
    <>
      <ServiceHero
        title="Sewer Line Services"
        description="From spot repairs to full replacement, we offer both traditional and trenchless sewer line methods. Advanced camera inspection technology ensures accurate diagnosis."
        category={{ title: "Sewer & Drains", slug: "sewer-drains" }}
        backgroundImage="/pics/pexels-jose-andres-pacheco-cortes-3641213-5463587.jpg"
        features={[
          "Trenchless pipe lining (CIPP)",
          "Pipe bursting for full replacement",
          "Spot repairs for isolated damage",
          "Traditional excavation when needed",
          "Cleanout installation & repair",
          "Permits & inspections handled",
        ]}
        ctaText="Schedule Sewer Inspection"
        ctaLink="/schedule"
      />

      <ServiceBenefits
        title="Why Choose HydroSync for Sewer Lines?"
        benefits={[
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Advanced Technology",
            description: "HD camera inspection, hydrojetting, and trenchless repair minimize disruption and provide lasting results.",
          },
          {
            icon: <Truck className="w-6 h-6" />,
            title: "Rapid Emergency Response",
            description: "Sewer backup? Our emergency teams arrive fast with the equipment to clear any blockage.",
          },
          {
            icon: <Star className="w-6 h-6" />,
            title: "Honest Assessment",
            description: "Camera inspection shows you exactly what's wrong - no guesswork, no unnecessary repairs.",
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Trenchless Options",
            description: "Pipe lining and pipe bursting avoid costly excavation and landscape restoration.",
          },
          {
            icon: <Clock className="w-6 h-6" />,
            title: "24/7 Availability",
            description: "Sewer emergencies don't wait. Neither do we - day, night, weekends, holidays.",
          },
          {
            icon: <Home className="w-6 h-6" />,
            title: "Clean & Professional",
            description: "Containment systems, shoe covers, and thorough cleanup protect your property.",
          },
        ]}
      />

      <ServiceContent
        title="Our Sewer Line Services"
        content={(
          <>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Trenchless Pipe Lining (CIPP)</h3>
            <p className="mb-6">Cured-in-place pipe lining creates a new pipe within the old one - no digging required.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Seals cracks, joints, & minor offsets</li>
              <li>50+ year life expectancy</li>
              <li>Minimal diameter reduction</li>
              <li>Completed in 1-2 days typically</li>
              <li>No landscape restoration needed</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Pipe Bursting</h3>
            <p className="mb-6">Trenchless full replacement - breaks old pipe while pulling new HDPE pipe through.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Upsize pipe diameter if needed</li>
              <li>100+ year HDPE pipe life</li>
              <li>Only two access pits needed</li>
              <li>Faster than traditional replacement</li>
              <li>Less property disruption</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Spot Repairs</h3>
            <p className="mb-6">Targeted repair for isolated damage - cost-effective alternative to full replacement.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Sectional pipe lining for short sections</li>
              <li>Point repair for isolated cracks/offsets</li>
              <li>Joint sealing for infiltration</li>
              <li>Test & seal for joint integrity</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Traditional Excavation</h3>
            <p className="mb-6">When trenchless isn't feasible, we provide professional excavation with full restoration.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Full depth sewer replacement</li>
              <li>Proper bedding & backfill</li>
              <li>Landscape & hardscape restoration</li>
              <li>Permits & inspections handled</li>
              <li>Traffic control for street work</li>
            </ul>
          </>
        )}
      />

      <ServiceCTA
        title="Sewer Line Problems? We Have the Solution."
        description="From camera inspection to trenchless repair, HydroSync has the expertise and equipment for any sewer line issue."
        primaryCta={{ text: "Schedule Sewer Inspection", link: "/schedule" }}
        secondaryCta={{ text: "Emergency: Call (614) 232-2222", link: "tel:6142322222" }}
      />
    </>
  );
}