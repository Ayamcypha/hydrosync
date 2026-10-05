import { ServiceHero, ServiceBenefits, ServiceCTA, ServiceContent } from "@/components/service";
import { Shield, Truck, Star, Clock, Users, Home, Wrench, Droplets, Zap, Flame, Settings, AlertTriangle, Waves } from "lucide-react";

export default function GasLinePage() {
  return (
    <>
      <ServiceHero
        title="Gas Line Services"
        description="Safe, code-compliant gas line installation, repair, and testing for appliances, heating systems, and generators. Licensed gas fitters with 24/7 emergency response."
        category={{ title: "Plumbing Services", slug: "plumbing" }}
        backgroundImage="/pics/pexels-2157750954-34938439.jpg"
        features={[
          "Licensed gas fitters on staff",
          "24/7 gas leak emergency response",
          "CSST & black iron pipe installation",
          "Pressure testing & certification",
          "Permits & inspections handled",
          "Appliance connection & conversion",
        ]}
        ctaText="Schedule Gas Line Service"
        ctaLink="/schedule"
      />

      <ServiceBenefits
        title="Why Choose HydroSync for Gas Lines?"
        benefits={[
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Licensed Gas Fitters",
            description: "Ohio-licensed gas fitters with specialized training in gas piping systems and safety protocols.",
          },
          {
            icon: <Truck className="w-6 h-6" />,
            title: "Emergency Gas Leak Response",
            description: "24/7 dispatch for gas odors, leaks, and pressure issues. Safety first, always.",
          },
          {
            icon: <Star className="w-6 h-6" />,
            title: "Code Compliance",
            description: "All work meets NFPA 54, IFGC, and local codes. Permits & inspections handled.",
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Quality Materials",
            description: "Corrugated stainless steel (CSST) & Schedule 40 black iron - properly sized & supported.",
          },
          {
            icon: <Clock className="w-6 h-6" />,
            title: "Pressure Testing & Certification",
            description: "Mandatory pressure testing with gauge documentation for every installation and repair.",
          },
          {
            icon: <Home className="w-6 h-6" />,
            title: "Appliance Expertise",
            description: "Proper connections for ranges, dryers, fireplaces, generators, pool heaters, and more.",
          },
        ]}
      />

      <ServiceContent
        title="Our Gas Line Services"
        content={(
          <>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Gas Line Installation</h3>
            <p className="mb-6">New gas line runs for appliances, heating systems, and outdoor applications.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Range, oven, & cooktop connections</li>
              <li>Gas dryer & water heater lines</li>
              <li>Fireplace & gas log installations</li>
              <li>Outdoor grill & fire pit lines</li>
              <li>Generator & pool heater connections</li>
              <li>Multi-appliance manifold systems</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Gas Leak Detection & Repair</h3>
            <p className="mb-6">Advanced electronic detection pinpoints leaks fast - safety is our top priority.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Electronic combustible gas detection</li>
              <li>Soap bubble & pressure decay testing</li>
              <li>Emergency gas shutoff & repair</li>
              <li>Utility coordination for main leaks</li>
              <li>Post-repair pressure verification</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Gas Line Pressure Testing</h3>
            <p className="mb-6">Mandatory pressure testing for new installations, repairs, and system verification.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Low-pressure (3-5 PSI) & high-pressure tests</li>
              <li>Gauge documentation & certification</li>
              <li>Inspector coordination & sign-off</li>
              <li>CSST bonding & grounding verification</li>
              <li>Annual safety inspections available</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Appliance Conversion & Connection</h3>
            <p className="mb-6">Safe conversion between natural gas and propane, plus proper appliance connections.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Natural gas to LP conversion kits</li>
              <li>Orifice & regulator adjustment</li>
              <li>Flexible connector replacement</li>
              <li>Sediment trap & shutoff valve install</li>
              <li>Manufacturer spec compliance</li>
            </ul>
          </>
        )}
      />

      <ServiceCTA
        title="Gas Line Safety Is Our Priority"
        description="Smell gas? Call 911, then call HydroSync at (614) 232-2222. Licensed gas fitters available 24/7."
        primaryCta={{ text: "Schedule Gas Service", link: "/schedule" }}
        secondaryCta={{ text: "Emergency: Call (614) 232-2222", link: "tel:6142322222" }}
      />
    </>
  );
}