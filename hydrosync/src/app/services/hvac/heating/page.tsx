import { ServiceHero, ServiceBenefits, ServiceCTA, ServiceContent } from "@/components/service";
import { Zap, Wrench, Shield, Truck, Star, Clock, Users, Home, Wind, Droplets, Check } from "lucide-react";

const heatingServices = [
  { title: "Furnace Installation", slug: "furnace-installation", description: "High-efficiency furnace installation with full system commissioning" },
  { title: "Furnace Replacement", slug: "furnace-replacement", description: "Complete furnace replacement with proper sizing & disposal of old unit" },
  { title: "Furnace Repair", slug: "furnace-repair", description: "Expert diagnosis & repair of all furnace makes & models" },
  { title: "Furnace Maintenance", slug: "furnace-maintenance", description: "Annual tune-ups for efficiency, safety & longevity" },
  { title: "Ductless Heating", slug: "ductless-heating", description: "Mini-split heat pump installation for zone heating" },
  { title: "Geothermal Heating", slug: "geothermal-heating", description: "Ground-source heat pump systems for maximum efficiency" },
  { title: "Boiler Installation", slug: "boiler-installation", description: "Hydronic boiler systems for radiant heat & domestic hot water" },
  { title: "Boiler Repair", slug: "boiler-repair", description: "Expert boiler diagnostics, repair & maintenance" },
  { title: "Heat Pump Repair", slug: "heat-pump-repair", description: "Year-round comfort system repair & optimization" },
  { title: "Heat Pump Replacement", slug: "heat-pump-replacement", description: "Upgrade to high-efficiency heat pump systems" },
  { title: "Heat Pump Maintenance", slug: "heat-pump-maintenance", description: "Bi-annual maintenance for heating & cooling modes" },
];

export default function HeatingPage() {
  return (
    <>
      <ServiceHero
        title="Heating Services"
        description="Stay warm all winter with HydroSync's expert heating services. From furnace installation and repair to geothermal systems and heat pumps, our certified technicians ensure your home stays comfortable and energy-efficient."
        category={{ title: "HVAC", slug: "hvac" }}
        backgroundImage="/pics/pexels-2157750954-34938439.jpg"
        features={[
          "Licensed & certified heating technicians",
          "All major brands serviced & installed",
          "Energy-efficient ENERGY STAR® options",
          "Flexible financing available",
          "100% satisfaction guarantee",
          "24/7 emergency heating repair",
        ]}
        ctaText="Schedule Heating Service"
        ctaLink="/schedule"
      />

      <ServiceBenefits
        title="Why Choose HydroSync for Heating?"
        benefits={[
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Expert Technicians",
            description: "Our NATE-certified technicians receive ongoing training on the latest heating technologies and safety protocols.",
          },
          {
            icon: <Truck className="w-6 h-6" />,
            title: "Rapid Response",
            description: "With 80+ service vehicles strategically located, we offer same-day service for most heating emergencies.",
          },
          {
            icon: <Star className="w-6 h-6" />,
            title: "Quality Guaranteed",
            description: "All installations include comprehensive warranties and our 100% satisfaction guarantee.",
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Personalized Solutions",
            description: "We perform detailed load calculations to recommend the right system size for your home and budget.",
          },
          {
            icon: <Clock className="w-6 h-6" />,
            title: "24/7 Emergency Service",
            description: "No heat in January? We're there day or night, weekends and holidays included.",
          },
          {
            icon: <Home className="w-6 h-6" />,
            title: "Mess-Free Guarantee",
            description: "Our technicians wear shoe covers, use drop cloths, and clean up completely before leaving.",
          },
        ]}
      />

      <ServiceContent
        title="Our Heating Services"
        content={(
          <>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Furnace Services</h3>
            <p className="mb-6">Your furnace is the heart of your home's heating system. Whether you need a new high-efficiency furnace installed, your existing system repaired, or annual maintenance to keep it running smoothly, our technicians have the expertise to handle any furnace service.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Gas, electric & oil furnace installation</li>
              <li>High-efficiency condensing furnaces (90%+ AFUE)</li>
              <li>Furnace repair for all brands & models</li>
              <li>Annual maintenance & safety inspections</li>
              <li>Heat exchanger inspection & carbon monoxide testing</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Heat Pump Systems</h3>
            <p className="mb-6">Heat pumps provide both heating and cooling in one efficient system. Ideal for our climate, modern heat pumps work effectively even in sub-freezing temperatures.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Air-source heat pump installation & replacement</li>
              <li>Dual-fuel systems (heat pump + gas furnace backup)</li>
              <li>Ductless mini-split heat pumps for zone heating</li>
              <li>Heat pump repair & refrigerant services</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Boiler & Radiant Heat</h3>
            <p className="mb-6">Boiler systems provide comfortable, even heat through radiators, baseboards, or radiant floor systems. We service all types of hydronic heating systems.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Gas & oil boiler installation & replacement</li>
              <li>Condensing boilers for maximum efficiency</li>
              <li>Radiant floor heating installation</li>
              <li>Boiler repair, maintenance & zone valve replacement</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Geothermal Heating</h3>
            <p className="mb-6">Geothermal systems use the earth's constant temperature for incredibly efficient heating and cooling. While upfront costs are higher, the long-term savings are substantial.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Ground-source heat pump design & installation</li>
              <li>Vertical & horizontal loop systems</li>
              <li>Federal tax credits & utility rebates available</li>
              <li>Up to 70% energy savings vs. conventional systems</li>
            </ul>
          </>
        )}
      />

      <ServiceCTA
        title="Stay Warm This Winter"
        description="Don't wait for a breakdown. Schedule your heating service today and ensure your home stays comfortable all season long."
        primaryCta={{ text: "Schedule Heating Service", link: "/schedule" }}
        secondaryCta={{ text: "Call (614) 232-2222", link: "tel:6142322222" }}
      />
    </>
  );
}