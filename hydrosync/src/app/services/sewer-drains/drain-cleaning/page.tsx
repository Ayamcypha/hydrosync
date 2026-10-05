import { ServiceHero, ServiceBenefits, ServiceCTA, ServiceContent } from "@/components/service";
import { Shield, Truck, Star, Clock, Users, Home, Wrench, Droplets, Zap, Search, Camera, Waves, ArrowDownUp } from "lucide-react";

export default function DrainCleaningPage() {
  return (
    <>
      <ServiceHero
        title="Drain Cleaning Services"
        description="Professional drain clearing for sinks, tubs, showers, laundry lines, and main sewer lines. Fast, effective solutions for slow drains and complete blockages."
        category={{ title: "Sewer & Drains", slug: "sewer-drains" }}
        backgroundImage="/pics/pexels-jose-andres-pacheco-cortes-3641213-5463575.jpg"
        features={[
          "Kitchen sink & garbage disposal drains",
          "Bathroom sink, tub & shower drains",
          "Laundry & floor drain clearing",
          "Main sewer line cleaning",
          "Commercial drain cleaning",
          "Preventative maintenance programs",
        ]}
        ctaText="Schedule Drain Cleaning"
        ctaLink="/schedule"
      />

      <ServiceBenefits
        title="Why Choose HydroSync for Drain Cleaning?"
        benefits={[
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Advanced Technology",
            description: "HD camera inspection, hydrojetting, and state-of-the-art equipment for thorough cleaning.",
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
            title: "Licensed Technicians",
            description: "All work performed by licensed, background-checked professionals.",
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
        title="Our Drain Cleaning Services"
        content={(
          <>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Kitchen & Bathroom Drain Clearing</h3>
            <p className="mb-6">From slow drains to complete blockages, we clear kitchen sinks, bathroom drains, laundry lines, and floor drains quickly and effectively.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Kitchen sink & garbage disposal drains</li>
              <li>Bathroom sink, tub & shower drains</li>
              <li>Laundry & floor drain clearing</li>
              <li>Grease trap cleaning (commercial)</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Main Sewer Line Cleaning</h3>
            <p className="mb-6">When multiple fixtures back up, the issue is often in the main line. We have the equipment to clear even the toughest main line blockages.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>High-pressure hydrojetting (up to 4000 PSI)</li>
              <li>Power augering for tough obstructions</li>
              <li>Root removal & chemical treatment</li>
              <li>Post-cleaning camera verification</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Hydrojetting Services</h3>
            <p className="mb-6">High-pressure water jetting (up to 4000 PSI) scours pipes clean - the most effective method for stubborn clogs and preventive maintenance.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Removes grease, sludge, scale & roots</li>
              <li>Restores full pipe diameter & flow</li>
              <li>Environmentally friendly - no chemicals</li>
              <li>Ideal for commercial & residential lines</li>
              <li>Preventive maintenance for problem lines</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Preventative Maintenance Programs</h3>
            <p className="mb-6">Avoid emergency calls with scheduled drain maintenance tailored to your property's needs.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Annual or semi-annual main line cleaning</li>
              <li>Grease trap maintenance for restaurants</li>
              <li>Commercial property maintenance contracts</li>
              <li>Priority emergency service for plan members</li>
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