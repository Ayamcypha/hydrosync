import { ServiceHero, ServiceBenefits, ServiceCTA, ServiceContent } from "@/components/service";
import { Shield, Truck, Star, Clock, Users, Home, Wrench, Droplets, Zap, Flame, Waves, Droplet, Settings } from "lucide-react";

export default function WaterHeatersPage() {
  return (
    <>
      <ServiceHero
        title="Water Heater Services"
        description="Expert installation, repair, and maintenance for all types of water heaters. Tank, tankless, and hybrid systems - we help you choose the right system for your home and budget."
        category={{ title: "Plumbing Services", slug: "plumbing" }}
        backgroundImage="/pics/pexels-freek-wolsink-508219-31249554.jpg"
        features={[
          "Licensed master plumbers on staff",
          "Tank, tankless & hybrid systems",
          "Energy-efficient ENERGY STAR® options",
          "Flexible financing available",
          "100% satisfaction guarantee",
          "Mess-free service guarantee",
        ]}
        ctaText="Schedule Water Heater Service"
        ctaLink="/schedule"
      />

      <ServiceBenefits
        title="Why Choose HydroSync for Water Heaters?"
        benefits={[
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Expert Sizing",
            description: "We calculate your peak demand to recommend the perfect size - no cold showers, no wasted energy.",
          },
          {
            icon: <Truck className="w-6 h-6" />,
            title: "Same-Day Installation",
            description: "In-stock units and flexible scheduling mean hot water restored fast.",
          },
          {
            icon: <Star className="w-6 h-6" />,
            title: "Energy Savings",
            description: "High-efficiency units can save 20-40% on water heating costs vs. older models.",
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Code Compliance",
            description: "All installations meet local codes, permits pulled, inspections scheduled.",
          },
          {
            icon: <Clock className="w-6 h-6" />,
            title: "24/7 Emergency Replacement",
            description: "No hot water? We'll replace your failed unit any hour, any day.",
          },
          {
            icon: <Home className="w-6 h-6" />,
            title: "Clean Installation",
            description: "Shoe covers, drop cloths, and complete cleanup - old unit removed and recycled.",
          },
        ]}
      />

      <ServiceContent
        title="Our Water Heater Services"
        content={(
          <>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Tank Water Heaters</h3>
            <p className="mb-6">Traditional storage tank water heaters remain the most common choice for Central Ohio homes. We install and service gas, electric, and propane models.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Gas, electric & propane tank heaters (40-80 gallon)</li>
              <li>High-efficiency models (0.64+ UEF)</li>
              <li>Power vent & direct vent options</li>
              <li>Expansion tank & pressure relief valve service</li>
              <li>Annual maintenance & anode rod replacement</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Tankless Water Heaters</h3>
            <p className="mb-6">Tankless units heat water on demand - providing endless hot water and 24-34% energy savings for homes using { '<41' } gallons/day. Last 20+ years vs 10-15 for tanks.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Gas & electric tankless installation</li>
              <li>Whole-house & point-of-use models</li>
              <li>Condensing & non-condensing options</li>
              <li>Recirculation pump integration</li>
              <li>Descaling & maintenance service</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Hybrid Heat Pump Water Heaters</h3>
            <p className="mb-6">The most efficient electric option - uses ambient air heat to warm water. Up to 4x more efficient than standard electric tanks.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>ENERGY STAR® certified models</li>
              <li>Up to 75% less energy than standard electric</li>
              <li>Dehumidification benefit in basements</li>
              <li>Smart controls & WiFi monitoring</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Water Heater Maintenance</h3>
            <p className="mb-6">Annual maintenance extends life, improves efficiency, and prevents unexpected failures.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Tank flush & sediment removal</li>
              <li>Anode rod inspection & replacement</li>
              <li>Temperature & pressure relief valve testing</li>
              <li>Burner/element cleaning & inspection</li>
              <li>Gas line & venting safety check</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Signs You Need a New Water Heater</h3>
            <p className="mb-6">Don't wait for a flood or cold shower. Watch for these warning signs:</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Age: 10+ years for tanks, 15+ for tankless</li>
              <li>Rusty or discolored hot water</li>
              <li>Inconsistent water temperature</li>
              <li>Rumbling or popping noises</li>
              <li>Water pooling around base</li>
              <li>Rising energy bills</li>
            </ul>
          </>
        )}
      />

      <ServiceCTA
        title="Ready for Reliable Hot Water?"
        description="From emergency replacement to planned upgrades, HydroSync has the right water heater solution for your home."
        primaryCta={{ text: "Schedule Water Heater Service", link: "/schedule" }}
        secondaryCta={{ text: "Emergency: Call (614) 232-2222", link: "tel:6142322222" }}
      />
    </>
  );
}