import { ServiceHero, ServiceBenefits, ServiceCTA, ServiceContent } from "@/components/service";
import { Shield, Truck, Star, Clock, Users, Home, Wrench, Droplets, Zap, Waves, Wind, Flame } from "lucide-react";

export default function HydrojettingPage() {
  return (
    <>
      <ServiceHero
        title="Hydrojetting Services"
        description="High-pressure water jetting (up to 4000 PSI) scours pipes clean - the most effective method for stubborn clogs, grease buildup, and preventive maintenance."
        category={{ title: "Sewer & Drains", slug: "sewer-drains" }}
        backgroundImage="/pics/pexels-jose-andres-pacheco-cortes-3641213-5463587.jpg"
        features={[
          "Up to 4000 PSI cleaning power",
          "Removes grease, sludge, scale & roots",
          "Restores full pipe diameter & flow",
          "Environmentally friendly - no chemicals",
          "Ideal for commercial & residential",
          "Preventive maintenance programs",
        ]}
        ctaText="Schedule Hydrojetting"
        ctaLink="/schedule"
      />

      <ServiceBenefits
        title="Why Choose HydroSync for Hydrojetting?"
        benefits={[
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Most Effective Cleaning",
            description: "Hydrojetting restores pipes to like-new condition - more thorough than snaking or chemicals.",
          },
          {
            icon: <Truck className="w-6 h-6" />,
            title: "Commercial-Grade Equipment",
            description: "4000 PSI, 18+ GPM jetters with specialized nozzles for every pipe size and condition.",
          },
          {
            icon: <Star className="w-6 h-6" />,
            title: "Environmentally Safe",
            description: "Water only - no harsh chemicals that damage pipes or the environment.",
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Long-Lasting Results",
            description: "Thorough cleaning prevents recurrence - saves money vs. repeated service calls.",
          },
          {
            icon: <Clock className="w-6 h-6" />,
            title: "Preventive Programs",
            description: "Scheduled hydrojetting for problem lines prevents emergencies and extends pipe life.",
          },
          {
            icon: <Home className="w-6 h-6" />,
            title: "Safe for All Pipes",
            description: "Proper pressure selection protects PVC, cast iron, clay, concrete, and HDPE pipes.",
          },
        ]}
      />

      <ServiceContent
        title="Hydrojetting Services"
        content={(
          <>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Residential Hydrojetting</h3>
            <p className="mb-6">High-pressure water jetting for stubborn residential clogs and preventive maintenance.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Main sewer line hydrojetting</li>
              <li>Kitchen line grease removal</li>
              <li>Root intrusion clearing</li>
              <li>Scale & mineral deposit removal</li>
              <li>Preventive maintenance for older homes</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Commercial Hydrojetting</h3>
            <p className="mb-6">Heavy-duty hydrojetting for commercial and industrial drainage systems.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Restaurant grease line cleaning</li>
              <li>Industrial process line cleaning</li>
              <li>Municipal sewer main cleaning</li>
              <li>Storm drain & catch basin jetting</li>
              <li>Large diameter pipe capability (up to 24\")</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Specialized Nozzles</h3>
            <p className="mb-6">The right nozzle for every job ensures thorough cleaning without pipe damage.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Penetrating nozzles for tough blockages</li>
              <li>Rotary nozzles for 360° cleaning</li>
              <li>Root cutter nozzles for root intrusion</li>
              <li>Descaling nozzles for mineral buildup</li>
              <li>Vacuum recovery for debris removal</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Preventive Hydrojetting Programs</h3>
            <p className="mb-6">Scheduled hydrojetting prevents emergencies and extends drainage system life.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Quarterly restaurant grease line service</li>
              <li>Semi-annual commercial main lines</li>
              <li>Annual residential preventive service</li>
              <li>Custom schedules for problem lines</li>
              <li>Digital service records & scheduling</li>
            </ul>
          </>
        )}
      />

      <ServiceCTA
        title="The Most Thorough Pipe Cleaning Available"
        description="Hydrojetting restores your pipes to like-new condition. Schedule service today."
        primaryCta={{ text: "Schedule Hydrojetting", link: "/schedule" }}
        secondaryCta={{ text: "Emergency: Call (614) 232-2222", link: "tel:6142322222" }}
      />
    </>
  );
}