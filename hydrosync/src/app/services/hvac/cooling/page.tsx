import { ServiceHero, ServiceBenefits, ServiceCTA, ServiceContent } from "@/components/service";
import { Shield, Truck, Star, Clock, Users, Home, Wind, Droplets, Zap, Snowflake, Sun } from "lucide-react";

export default function CoolingPage() {
  return (
    <>
      <ServiceHero
        title="Cooling Services"
        description="Beat the heat with HydroSync's professional cooling services. From AC installation and repair to ductless systems and geothermal cooling, we keep your home comfortable all summer long."
        category={{ title: "HVAC", slug: "hvac" }}
        backgroundImage="/pics/pexels-2157750954-34938439.jpg"
        features={[
          "Licensed & certified cooling technicians",
          "All major brands serviced & installed",
          "High-efficiency SEER2 rated systems",
          "Flexible financing available",
          "100% satisfaction guarantee",
          "24/7 emergency AC repair",
        ]}
        ctaText="Schedule Cooling Service"
        ctaLink="/schedule"
      />

      <ServiceBenefits
        title="Why Choose HydroSync for Cooling?"
        benefits={[
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Expert Technicians",
            description: "Our EPA-certified technicians specialize in modern high-efficiency cooling systems and refrigerants.",
          },
          {
            icon: <Truck className="w-6 h-6" />,
            title: "Same-Day Service",
            description: "With 80+ vehicles, we offer rapid response for AC emergencies during heat waves.",
          },
          {
            icon: <Star className="w-6 h-6" />,
            title: "Quality Installation",
            description: "Proper sizing, installation & commissioning per ACCA Manual J/S/D standards for optimal performance.",
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Energy Savings",
            description: "High-SEER systems can reduce cooling costs by 20-40% vs. older units.",
          },
          {
            icon: <Clock className="w-6 h-6" />,
            title: "24/7 Emergency Repair",
            description: "AC out in July? We're there day or night, weekends and holidays included.",
          },
          {
            icon: <Home className="w-6 h-6" />,
            title: "Mess-Free Guarantee",
            description: "Shoe covers, drop cloths, and complete cleanup - we treat your home like our own.",
          },
        ]}
      />

      <ServiceContent
        title="Our Cooling Services"
        content={(
          <>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Air Conditioning Installation & Replacement</h3>
            <p className="mb-6">Whether you're replacing an old inefficient unit or installing AC for the first time, we'll help you choose the right system for your home and budget.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Central AC systems (14-26 SEER2 ratings)</li>
              <li>Proper sizing via Manual J load calculation</li>
              <li>Ductwork inspection & modification if needed</li>
              <li>Smart thermostat integration included</li>
              <li>Old unit removal & responsible disposal</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">AC Repair Services</h3>
            <p className="mb-6">From minor issues to major breakdowns, our technicians diagnose and repair all makes and models of air conditioning systems.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Refrigerant leak detection & repair</li>
              <li>Compressor & fan motor replacement</li>
              <li>Capacitor, contactor & electrical repairs</li>
              <li>Frozen coil & drainage issues</li>
              <li>Thermostat & control board troubleshooting</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">AC Maintenance & Tune-Ups</h3>
            <p className="mb-6">Annual maintenance extends system life, improves efficiency, and prevents costly breakdowns during peak season.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Complete system inspection & cleaning</li>
              <li>Refrigerant level check & adjustment</li>
              <li>Condenser & evaporator coil cleaning</li>
              <li>Electrical connection tightening</li>
              <li>Thermostat calibration & airflow testing</li>
              <li>Drain line clearing & pan treatment</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Ductless & Specialty Cooling</h3>
            <p className="mb-6">For homes without ductwork or for targeted cooling, we offer flexible ductless and specialty solutions.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Ductless mini-split systems (single & multi-zone)</li>
              <li>Geothermal cooling systems</li>
              <li>Heat pump cooling (dual-purpose systems)</li>
              <li>High-velocity mini-duct systems</li>
            </ul>
          </>
        )}
      />

      <ServiceCTA
        title="Stay Cool This Summer"
        description="Don't suffer through another heat wave. Schedule your AC service today and enjoy reliable, efficient cooling all season."
        primaryCta={{ text: "Schedule AC Service", link: "/schedule" }}
        secondaryCta={{ text: "Emergency: Call (614) 232-2222", link: "tel:6142322222" }}
      />
    </>
  );
}