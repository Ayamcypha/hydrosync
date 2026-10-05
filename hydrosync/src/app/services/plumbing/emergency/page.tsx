import { ServiceHero, ServiceBenefits, ServiceCTA, ServiceContent } from "@/components/service";
import { Shield, Truck, Star, Clock, Users, Home, Wrench, Droplets, Zap, Flame, Waves, Droplet, Settings, AlertTriangle } from "lucide-react";

export default function EmergencyPlumbingPage() {
  return (
    <>
      <ServiceHero
        title="Emergency Plumbing Services"
        description="24/7/365 emergency plumbing response for burst pipes, major leaks, sewer backups, and gas leaks. Our live operators dispatch technicians immediately - day or night."
        category={{ title: "Plumbing Services", slug: "plumbing" }}
        backgroundImage="/pics/pexels-2157750954-34938439.jpg"
        features={[
          "Licensed master plumbers on staff",
          "24/7 emergency plumbing response",
          "Upfront pricing - no surprises",
          "Flexible financing available",
          "100% satisfaction guarantee",
          "Mess-free service guarantee",
        ]}
        ctaText="Call Emergency Line"
        ctaLink="tel:6142322222"
      />

      <ServiceBenefits
        title="Why Choose HydroSync for Emergency Plumbing?"
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
        title="Our Emergency Plumbing Services"
        content={(
          <>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Burst Pipe & Major Leak Repair</h3>
            <p className="mb-6">Plumbing emergencies don't wait for business hours. Our 24/7 teams handle burst pipes, major leaks, sewer backups, and gas leaks with rapid response.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Burst pipe repair & water damage mitigation</li>
              <li>Major leak detection & repair</li>
              <li>Sewer & drain emergency clearing</li>
              <li>Gas leak emergency response</li>
              <li>Water heater failure & flooding</li>
              <li>No-heat boiler emergencies</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">What to Do in a Plumbing Emergency</h3>
            <p className="mb-6">Quick action can minimize damage before our technicians arrive:</p>
            <ul className="list-decimal list-inside space-y-2 mb-8">
              <li><strong>Shut off main water valve</strong> immediately</li>
              <li><strong>Call our emergency line</strong> (614) 232-2222</li>
              <li>If safe, <strong>turn off electricity</strong> to affected areas</li>
              <li><strong>Move valuables</strong> away from water</li>
              <li>Our emergency team will be dispatched immediately</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Gas Leak Emergencies</h3>
            <p className="mb-6">Gas leaks require immediate professional response. Our technicians are certified for gas line emergency repair.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Gas leak detection & emergency repair</li>
              <li>Gas line pressure testing & certification</li>
              <li>Appliance gas connector replacement</li>
              <li>Coordination with gas utility if needed</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Sewer & Drain Emergencies</h3>
            <p className="mb-6">Sewer backups pose health risks and property damage. We clear them fast with the right equipment.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Main line sewer backup clearing</li>
              <li>Hydrojetting for severe blockages</li>
              <li>Camera inspection to identify cause</li>
              <li>Emergency sewer line repair</li>
            </ul>
          </>
        )}
      />

      <ServiceCTA
        title="Plumbing Emergency? We're Here 24/7."
        description="Don't wait for business hours. Call our emergency line now for immediate dispatch."
        primaryCta={{ text: "Call Emergency: (614) 232-2222", link: "tel:6142322222" }}
        secondaryCta={{ text: "Schedule Non-Emergency Service", link: "/schedule" }}
      />
    </>
  );
}