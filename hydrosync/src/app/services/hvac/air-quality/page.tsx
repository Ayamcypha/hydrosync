import { ServiceHero, ServiceBenefits, ServiceCTA, ServiceContent } from "@/components/service";
import { Shield, Truck, Star, Clock, Users, Home, Wind, Zap, Sparkles, Droplets, Cpu, Thermometer } from "lucide-react";

export default function AirQualityPage() {
  return (
    <>
      <ServiceHero
        title="Indoor Air Quality"
        description="Breathe easier with HydroSync's comprehensive indoor air quality solutions. From whole-house purification and humidification to smart thermostats and UV sanitization, we create healthier home environments."
        category={{ title: "HVAC", slug: "hvac" }}
        backgroundImage="/pics/pexels-jose-andres-pacheco-cortes-3641213-5463587.jpg"
        features={[
          "Certified IAQ specialists",
          "Whole-house & portable solutions",
          "Health-focused improvements",
          "Energy-efficient operation",
          "Professional installation & setup",
          "Ongoing maintenance available",
        ]}
        ctaText="Schedule IAQ Assessment"
        ctaLink="/schedule"
      />

      <ServiceBenefits
        title="Why Choose HydroSync for Air Quality?"
        benefits={[
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Health-First Approach",
            description: "We prioritize solutions that genuinely improve health outcomes - reducing allergens, pathogens, and pollutants.",
          },
          {
            icon: <Truck className="w-6 h-6" />,
            title: "Custom Solutions",
            description: "Every home is different. We assess your specific needs and recommend tailored IAQ packages.",
          },
          {
            icon: <Star className="w-6 h-6" />,
            title: "Proven Technology",
            description: "We use only EPA-registered and ASHRAE-compliant air purification technologies.",
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Energy Efficient",
            description: "Our IAQ systems integrate with your HVAC for minimal energy impact and maximum effectiveness.",
          },
          {
            icon: <Clock className="w-6 h-6" />,
            title: "Professional Installation",
            description: "Proper sizing, placement, and integration ensure your IAQ investment delivers real results.",
          },
          {
            icon: <Home className="w-6 h-6" />,
            title: "Ongoing Support",
            description: "Filter replacements, UV bulb changes, and system check-ups keep your air clean year-round.",
          },
        ]}
      />

      <ServiceContent
        title="Our Air Quality Solutions"
        content={(
          <>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Whole-House Air Purification</h3>
            <p className="mb-6">Integrated with your HVAC system, these systems clean the air throughout your entire home every time your system runs.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Media air cleaners (MERV 11-16 filtration)</li>
              <li>Electronic air cleaners with washable cells</li>
              <li>HEPA bypass filtration systems</li>
              <li>Activated carbon for odor & VOC removal</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">UV Germicidal Lights</h3>
            <p className="mb-6">Installed in your ductwork or air handler, UV-C lights neutralize airborne pathogens, mold, and bacteria.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Coil sterilization lights (prevent mold growth)</li>
              <li>Air stream disinfection lights</li>
              <li>Dual-wavelength systems for maximum effectiveness</li>
              <li>Annual bulb replacement service</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Humidity Control</h3>
            <p className="mb-6">Proper humidity (30-50%) prevents mold growth, reduces virus transmission, and improves comfort.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Whole-house steam humidifiers</li>
              <li>Bypass & fan-powered humidifiers</li>
              <li>Whole-house dehumidifiers</li>
              <li>Automatic humidity control integration</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Ventilation Systems</h3>
            <p className="mb-6">Fresh air exchange without energy loss - essential for modern, tight homes.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Heat Recovery Ventilators (HRV)</li>
              <li>Energy Recovery Ventilators (ERV)</li>
              <li>Balanced ventilation with filtration</li>
              <li>Bathroom & kitchen exhaust integration</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Smart Controls & Monitoring</h3>
            <p className="mb-6">Intelligent thermostats and IAQ monitors give you visibility and control over your home's air quality.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Smart thermostat installation & setup</li>
              <li>IAQ monitors (PM2.5, VOC, CO2, humidity)</li>
              <li>Mobile app integration & alerts</li>
              <li>Automated ventilation & purification control</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Carbon Monoxide Protection</h3>
            <p className="mb-6">Critical safety devices for every home with fuel-burning appliances.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Low-level CO detectors (alarm at 30-50 ppm)</li>
              <li>Combination smoke/CO alarms</li>
              <li>Interconnected wireless systems</li>
              <li>Annual testing & replacement service</li>
            </ul>
          </>
        )}
      />

      <ServiceCTA
        title="Breathe Healthier Air Today"
        description="Schedule a comprehensive indoor air quality assessment and discover how we can make your home's air cleaner and healthier."
        primaryCta={{ text: "Schedule IAQ Assessment", link: "/schedule" }}
        secondaryCta={{ text: "Call (614) 232-2222", link: "tel:6142322222" }}
      />
    </>
  );
}