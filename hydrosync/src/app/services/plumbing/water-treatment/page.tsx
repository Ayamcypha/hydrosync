import { ServiceHero, ServiceBenefits, ServiceCTA, ServiceContent } from "@/components/service";
import { Shield, Truck, Star, Clock, Users, Home, Wrench, Droplets, Zap, Droplet, Sparkles, Wind, Settings, Search } from "lucide-react";

export default function WaterTreatmentPage() {
  return (
    <>
      <ServiceHero
        title="Water Treatment Services"
        description="Improve water quality throughout your home with professional water treatment installation. Water softeners, whole-house filtration, reverse osmosis, and specialty systems for healthier, better-tasting water."
        category={{ title: "Plumbing Services", slug: "plumbing" }}
        backgroundImage="/pics/water-treatment.jpg"
        features={[
          "Certified water treatment specialists",
          "Free water testing & analysis",
          "Custom system design for your water",
          "Top brands: Fleck, Clack, Aquasana, etc.",
          "Professional installation & setup",
          "Ongoing maintenance & salt delivery",
        ]}
        ctaText="Schedule Water Test"
        ctaLink="/schedule"
      />

      <ServiceBenefits
        title="Why Choose HydroSync for Water Treatment?"
        benefits={[
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Custom Solutions",
            description: "We test your water first, then design a system for your specific contaminants and usage patterns.",
          },
          {
            icon: <Truck className="w-6 h-6" />,
            title: "Quality Equipment",
            description: "We install only NSF-certified, WQA-validated systems from trusted manufacturers.",
          },
          {
            icon: <Star className="w-6 h-6" />,
            title: "Health-First Focus",
            description: "Removes contaminants like lead, PFAS, chlorine, bacteria, and hardness minerals.",
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Professional Installation",
            description: "Proper sizing, placement, and integration with your plumbing for optimal performance.",
          },
          {
            icon: <Clock className="w-6 h-6" />,
            title: "Ongoing Support",
            description: "Filter replacements, salt delivery, system check-ups, and 24/7 emergency service.",
          },
          {
            icon: <Home className="w-6 h-6" />,
            title: "Whole-Home Protection",
            description: "Point-of-entry systems treat every faucet, shower, and appliance in your home.",
          },
        ]}
      />

      <ServiceContent
        title="Our Water Treatment Solutions"
        content={(
          <>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Water Softeners</h3>
            <p className="mb-6">Hard water damages appliances, leaves spots, and dries skin. Our softeners use ion exchange to remove calcium and magnesium.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>High-efficiency metered regeneration (saves salt & water)</li>
              <li>Smart controls with WiFi monitoring</li>
              <li>Twin-tank systems for continuous soft water</li>
              <li>Iron & manganese removal models available</li>
              <li>Compact cabinet & twin-tank designs</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Whole-House Filtration</h3>
            <p className="mb-6">Remove sediment, chlorine, chemicals, and contaminants at the point of entry - clean water at every tap.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Carbon block & catalytic carbon filters</li>
              <li>Sediment pre-filters (5-20 micron)</li>
              <li>KDF media for heavy metals & bacteria</li>
              <li>Automatic backwashing valves</li>
              <li>Flow rates up to 20+ GPM</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Reverse Osmosis (RO) Systems</h3>
            <p className="mb-6">Point-of-use purification for the purest drinking water - removes 99% of dissolved solids, contaminants, and impurities.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>4-5 stage filtration with remineralization</li>
              <li>Compact under-sink & countertop models</li>
              <li>High-efficiency 1:1 ratio membranes</li>
              <li>Quick-change filter cartridges</li>
              <li>Ice maker & refrigerator line connections</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Specialty Treatment</h3>
            <p className="mb-6">Targeted solutions for specific water problems identified through testing.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Iron, sulfur & manganese removal</li>
              <li>Acid neutralizers for low pH water</li>
              <li>UV disinfection for bacteria & viruses</li>
              <li>Nitrate, arsenic & PFAS reduction</li>
              <li>Chloramine & chloramine reduction</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Maintenance & Service</h3>
            <p className="mb-6">Keep your water treatment system performing at its best with our maintenance programs.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Annual media replacement & sanitization</li>
              <li>Salt delivery service for softeners</li>
              <li>Filter cartridge replacement programs</li>
              <li>Water quality retesting & system optimization</li>
              <li>Emergency repair for all brands</li>
            </ul>
          </>
        )}
      />

      <ServiceCTA
        title="Better Water Starts Here"
        description="Schedule a free water test and discover what's in your water. Our specialists will recommend the right solution for your home and budget."
        primaryCta={{ text: "Schedule Free Water Test", link: "/schedule" }}
        secondaryCta={{ text: "Call (614) 232-2222", link: "tel:6142322222" }}
      />
    </>
  );
}