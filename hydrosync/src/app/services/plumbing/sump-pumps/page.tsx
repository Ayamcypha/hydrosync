import { ServiceHero, ServiceBenefits, ServiceCTA, ServiceContent } from "@/components/service";
import { Shield, Truck, Star, Clock, Users, Home, Wrench, Droplets, Zap, Waves, Battery, AlertTriangle, Droplet } from "lucide-react";

export default function SumpPumpPage() {
  return (
    <>
      <ServiceHero
        title="Sump Pump Services"
        description="Professional sump pump installation, repair, and maintenance. Battery backup systems, high-capacity pumps, and preventive maintenance to keep your basement dry."
        category={{ title: "Plumbing Services", slug: "plumbing" }}
        backgroundImage="/pics/pexels-freek-wolsink-508219-31249554.jpg"
        features={[
          "Licensed plumbers with sump expertise",
          "Battery backup & water-powered backup",
          "High-capacity & commercial pumps",
          "Annual maintenance programs",
          "24/7 emergency pump replacement",
          "Alarm & monitoring systems",
        ]}
        ctaText="Schedule Sump Service"
        ctaLink="/schedule"
      />

      <ServiceBenefits
        title="Why Choose HydroSync for Sump Pumps?"
        benefits={[
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Basement Protection Experts",
            description: "Specialized in basement waterproofing and sump systems - we know what keeps basements dry.",
          },
          {
            icon: <Truck className="w-6 h-6" />,
            title: "Right-Sized Systems",
            description: "We calculate your infiltration rate and select the correct pump capacity - no undersized pumps.",
          },
          {
            icon: <Star className="w-6 h-6" />,
            title: "Backup Protection",
            description: "Battery and water-powered backup systems ensure protection during power outages.",
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Proper Installation",
            description: "Correct pit sizing, check valves, discharge routing, and code-compliant electrical.",
          },
          {
            icon: <Clock className="w-6 h-6" />,
            title: "24/7 Emergency Replacement",
            description: "Pump failed during a storm? We'll replace it immediately - day or night.",
          },
          {
            icon: <Home className="w-6 h-6" />,
            title: "Annual Maintenance Plans",
            description: "Inspection, testing, cleaning, and battery replacement to ensure readiness.",
          },
        ]}
      />

      <ServiceContent
        title="Our Sump Pump Services"
        content={(
          <>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Sump Pump Installation</h3>
            <p className="mb-6">Professional installation of primary and backup sump pump systems for new construction and retrofit.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Submersible & pedestal pump options</li>
              <li>Proper pit sizing & liner installation</li>
              <li>Check valve & weep hole installation</li>
              <li>Discharge line routing (exterior or storm)</li>
              <li>Dedicated GFCI circuit & alarm wiring</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Battery Backup Systems</h3>
            <p className="mb-6">Automatic backup protection when power fails - your first line of defense during storms.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>12V & 24V DC backup pumps</li>
              <li>Marine-grade deep cycle batteries</li>
              <li>Smart chargers with auto-testing</li>
              <li>WiFi monitoring & alerts available</li>
              <li>Water-powered backup options (no battery)</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Sump Pump Repair & Replacement</h3>
            <p className="mb-6">Fast diagnosis and repair of failed pumps - we stock common models for same-day replacement.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Motor & impeller replacement</li>
              <li>Float switch repair & upgrade</li>
              <li>Check valve & discharge line repair</li>
              <li>Electrical troubleshooting (GFCI, wiring)</li>
              <li>Complete pump replacement in 1 visit</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Annual Maintenance & Testing</h3>
            <p className="mb-6">Preventive maintenance ensures your sump system works when you need it most.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Pump operation test & amp draw check</li>
              <li>Float switch operation verification</li>
              <li>Check valve & discharge line inspection</li>
              <li>Battery load test & terminal cleaning</li>
              <li>Alarm & backup system testing</li>
              <li>Pit cleaning & debris removal</li>
            </ul>
          </>
        )}
      />

      <ServiceCTA
        title="Keep Your Basement Dry"
        description="Don't wait for the next storm. Schedule sump pump installation, maintenance, or emergency replacement with HydroSync."
        primaryCta={{ text: "Schedule Sump Service", link: "/schedule" }}
        secondaryCta={{ text: "Emergency: Call (614) 232-2222", link: "tel:6142322222" }}
      />
    </>
  );
}