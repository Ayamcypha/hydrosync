import { ServiceHero, ServiceBenefits, ServiceCTA, ServiceContent } from "@/components/service";
import { Shield, Truck, Star, Clock, Users, Home, Wrench, Droplets, Zap, Flame, Waves, Droplet, Settings } from "lucide-react";

export default function PlumbingPage() {
  return (
    <>
      <ServiceHero
        title="Plumbing Services"
        description="Complete residential plumbing solutions from HydroSync. Emergency repairs, installations, water treatment, gas lines, and more - all handled by licensed, background-checked plumbers who respect your home."
        category={{ title: "Services", slug: "services" }}
        backgroundImage="/pics/plumbing.jpg"
        features={[
          "Licensed master plumbers on staff",
          "24/7 emergency plumbing response",
          "Upfront pricing - no surprises",
          "Flexible financing available",
          "100% satisfaction guarantee",
          "Mess-free service guarantee",
        ]}
        ctaText="Schedule Plumbing Service"
        ctaLink="/schedule"
      />

      <ServiceBenefits
        title="Why Choose HydroSync for Plumbing?"
        benefits={[
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Licensed & Insured",
            description: "All work performed by licensed journeyman and master plumbers with full liability coverage.",
          },
          {
            icon: <Truck className="w-6 h-6" />,
            title: "Rapid Emergency Response",
            description: "Burst pipe at 2 AM? Our emergency teams are dispatched immediately, day or night.",
          },
          {
            icon: <Star className="w-6 h-6" />,
            title: "Transparent Pricing",
            description: "Flat-rate pricing explained before any work begins. No hidden fees or surprise charges.",
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Respect Your Home",
            description: "Shoe covers, drop cloths, and thorough cleanup - we leave your home cleaner than we found it.",
          },
          {
            icon: <Clock className="w-6 h-6" />,
            title: "Same-Day Service",
            description: "Most non-emergency calls scheduled same day. Emergency calls within 2 hours.",
          },
          {
            icon: <Home className="w-6 h-6" />,
            title: "Comprehensive Solutions",
            description: "From dripping faucets to whole-house repiping - one call handles it all.",
          },
        ]}
      />

      <ServiceContent
        title="Our Plumbing Services"
        content={(
          <>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Emergency Plumbing</h3>
            <p className="mb-6">Plumbing emergencies don't wait for business hours. Our 24/7 teams handle burst pipes, major leaks, sewer backups, and gas leaks with rapid response.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Burst pipe repair & water damage mitigation</li>
              <li>Major leak detection & repair</li>
              <li>Sewer & drain emergency clearing</li>
              <li>Gas leak emergency response</li>
              <li>Water heater failure & flooding</li>
              <li>No-heat boiler emergencies</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Kitchen & Bathroom Plumbing</h3>
            <p className="mb-6">Remodeling, repairs, and upgrades for the most used plumbing in your home.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Faucet, sink & fixture installation & repair</li>
              <li>Garbage disposal installation & repair</li>
              <li>Dishwasher & ice maker water lines</li>
              <li>Toilet repair, replacement & installation</li>
              <li>Shower & tub valve replacement</li>
              <li>Bathroom remodel plumbing</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Water Treatment Systems</h3>
            <p className="mb-6">Improve water quality throughout your home with professional water treatment installation.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Water softener installation & service</li>
              <li>Whole-house filtration systems</li>
              <li>Reverse osmosis drinking water systems</li>
              <li>Iron, sulfur & manganese removal</li>
              <li>Water testing & analysis</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Water Heaters</h3>
            <p className="mb-6">Expert installation, repair, and maintenance for all types of water heaters.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Tank water heaters (gas, electric, propane)</li>
              <li>Tankless water heater installation</li>
              <li>Hybrid heat pump water heaters</li>
              <li>Expansion tank & pressure relief valve service</li>
              <li>Annual maintenance & anode rod replacement</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Gas Line Services</h3>
            <p className="mb-6">Safe, code-compliant gas line installation and repair for appliances and heating systems.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Gas line installation for ranges, dryers, fireplaces</li>
              <li>Gas leak detection & emergency repair</li>
              <li>Gas line pressure testing & certification</li>
              <li>CSST & black iron pipe installation</li>
              <li>Appliance gas connector replacement</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Specialty Plumbing</h3>
            <p className="mb-6">Advanced plumbing services for specific needs.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Sump pump installation, repair & battery backup</li>
              <li>Slab leak detection & repair</li>
              <li>Water line repair & replacement (trenchless options)</li>
              <li>Whole-house repiping (PEX & copper)</li>
              <li>Backflow testing & certification</li>
              <li>Ejector pump & sewage lift station service</li>
            </ul>
          </>
        )}
      />

      <ServiceCTA
        title="Plumbing Problem? We'll Fix It."
        description="From a dripping faucet to a burst pipe, HydroSync has the expertise to handle any plumbing issue. Schedule service online or call our 24/7 emergency line."
        primaryCta={{ text: "Schedule Plumbing Service", link: "/schedule" }}
        secondaryCta={{ text: "Emergency: Call (614) 232-2222", link: "tel:6142322222" }}
      />
    </>
  );
}