import { ServiceHero, ServiceBenefits, ServiceCTA, ServiceContent } from "@/components/service";
import { Shield, Truck, Star, Clock, Users, Home, Wrench, Droplets, Zap, Search, Camera, Waves, ArrowDownUp } from "lucide-react";

export default function SewerDrainsPage() {
  return (
    <>
      <ServiceHero
        title="Sewer & Drain Services"
        description="Professional drain cleaning, sewer repair, and hydrojetting from HydroSync. Advanced camera inspection technology, trenchless repair options, and 24/7 emergency response for clogged drains and sewer backups."
        category={{ title: "Services", slug: "services" }}
        features={[
          "State-of-the-art camera inspection",
          "High-pressure hydrojetting (4000 PSI)",
          "Trenchless sewer repair options",
          "24/7 emergency drain service",
          "Upfront pricing & free estimates",
          "Licensed & certified technicians",
        ]}
        ctaText="Schedule Drain Service"
        ctaLink="/schedule"
      />

      <ServiceBenefits
        title="Why Choose HydroSync for Drains & Sewer?"
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
            description: "Drain emergencies don't wait. Neither do we - day, night, weekends, holidays.",
          },
          {
            icon: <Home className="w-6 h-6" />,
            title: "Clean & Professional",
            description: "Containment systems, shoe covers, and thorough cleanup protect your property.",
          },
        ]}
      />

      <ServiceContent
        title="Our Sewer & Drain Services"
        content={(
          <>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Drain Cleaning Services</h3>
            <p className="mb-6">From slow drains to complete blockages, we clear kitchen sinks, bathroom drains, laundry lines, and main sewer lines.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Kitchen sink & garbage disposal drains</li>
              <li>Bathroom sink, tub & shower drains</li>
              <li>Laundry & floor drain clearing</li>
              <li>Main sewer line cleaning</li>
              <li>Commercial drain cleaning</li>
              <li>Preventative maintenance programs</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Hydrojetting</h3>
            <p className="mb-6">High-pressure water jetting (up to 4000 PSI) scours pipes clean - the most effective method for stubborn clogs and preventive maintenance.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Removes grease, sludge, scale & roots</li>
              <li>Restores full pipe diameter & flow</li>
              <li>Environmentally friendly - no chemicals</li>
              <li>Ideal for commercial & residential lines</li>
              <li>Preventive maintenance for problem lines</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Camera Line Inspection</h3>
            <p className="mb-6">HD video inspection identifies the exact location and nature of problems without guesswork.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Real-time HD video with recording</li>
              <li>Locates clogs, breaks, offsets & bellies</li>
              <li>Identifies root intrusion & pipe material</li>
              <li>Pre-purchase sewer inspections</li>
              <li>Post-repair verification</li>
              <li>Digital report with findings & recommendations</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Sewer Line Repair & Replacement</h3>
            <p className="mb-6">From spot repairs to full replacement, we offer both traditional and trenchless methods.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Trenchless pipe lining (CIPP)</li>
              <li>Pipe bursting for full replacement</li>
              <li>Spot repairs for isolated damage</li>
              <li>Traditional excavation when needed</li>
              <li>Cleanout installation & repair</li>
              <li>Permits & inspections handled</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Specialty Drain Services</h3>
            <p className="mb-6">Specialized equipment and expertise for unique drainage challenges.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Catch basin cleaning & repair</li>
              <li>Ejector pump & sewage lift station service</li>
              <li>Downspout & footer drain cleaning</li>
              <li>French drain installation & cleaning</li>
              <li>Grease trap cleaning (commercial)</li>
              <li>Root removal & chemical treatment</li>
            </ul>
          </>
        )}
      />

      <ServiceCTA
        title="Clear Drains, Clear Mind"
        description="Don't let a clogged drain disrupt your day. Schedule professional drain cleaning or emergency sewer service with HydroSync today."
        primaryCta={{ text: "Schedule Drain Service", link: "/schedule" }}
        secondaryCta={{ text: "Emergency: Call (614) 232-2222", link: "tel:6142322222" }}
      />
    </>
  );
}