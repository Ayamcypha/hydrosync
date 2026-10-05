import { ServiceHero, ServiceBenefits, ServiceCTA, ServiceContent } from "@/components/service";
import { Shield, Truck, Star, Clock, Users, Home, Wrench, Droplets, Zap, Utensils, ChefHat, Droplet, Settings } from "lucide-react";

export default function KitchenPlumbingPage() {
  return (
    <>
      <ServiceHero
        title="Kitchen Plumbing Services"
        description="Complete kitchen plumbing solutions - from faucet repair to garbage disposal installation and water line connections for appliances."
        category={{ title: "Plumbing Services", slug: "plumbing" }}
        backgroundImage="/pics/pexels-freek-wolsink-508219-31249554.jpg"
        features={[
          "Licensed master plumbers",
          "Same-day service available",
          "Upfront pricing - no surprises",
          "All major brands serviced",
          "100% satisfaction guarantee",
          "Mess-free service guarantee",
        ]}
        ctaText="Schedule Kitchen Service"
        ctaLink="/schedule"
      />

      <ServiceBenefits
        title="Why Choose HydroSync for Kitchen Plumbing?"
        benefits={[
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Licensed & Insured",
            description: "All work performed by licensed journeyman and master plumbers with full liability coverage.",
          },
          {
            icon: <Truck className="w-6 h-6" />,
            title: "Rapid Response",
            description: "Kitchen plumbing emergencies don't wait. Same-day service for most issues.",
          },
          {
            icon: <Star className="w-6 h-6" />,
            title: "Transparent Pricing",
            description: "Flat-rate pricing explained before any work begins. No hidden fees or surprise charges.",
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Respect Your Home",
            description: "Shoe covers, drop cloths, and thorough cleanup - we leave your kitchen cleaner than we found it.",
          },
          {
            icon: <Clock className="w-6 h-6" />,
            title: "Same-Day Service",
            description: "Most non-emergency calls scheduled same day. Emergency calls within 2 hours.",
          },
          {
            icon: <Home className="w-6 h-6" />,
            title: "Complete Kitchen Solutions",
            description: "From dripping faucets to complete kitchen remodel plumbing - one call handles it all.",
          },
        ]}
      />

      <ServiceContent
        title="Our Kitchen Plumbing Services"
        content={(
          <>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Faucet & Fixture Services</h3>
            <p className="mb-6">Expert repair, replacement, and installation of all kitchen faucets and fixtures.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Kitchen faucet repair & replacement (all brands)</li>
              <li>Pull-down & pull-out sprayer repair</li>
              <li>Pot filler & bar faucet installation</li>
              <li>Soap dispenser & instant hot water dispensers</li>
              <li>Water filtration faucet installation</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Garbage Disposal Services</h3>
            <p className="mb-6">Installation, repair, and replacement of garbage disposals for all major brands.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>New disposal installation & wiring</li>
              <li>Jammed disposal clearing & repair</li>
              <li>Leaking disposal repair & replacement</li>
              <li>Batch feed & continuous feed models</li>
              <li>Septic-safe disposal options</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Appliance Water Lines</h3>
            <p className="mb-6">Professional water line installation and repair for kitchen appliances.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Dishwasher water line installation & repair</li>
              <li>Refrigerator ice maker & water dispenser lines</li>
              <li>Coffee maker & filtered water connections</li>
              <li>Pot filler & instant hot water lines</li>
              <li>Shut-off valve installation & replacement</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Sink & Drain Services</h3>
            <p className="mb-6">Complete sink plumbing services for new installation, repair, and drain issues.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Kitchen sink installation (undermount, drop-in, farmhouse)</li>
              <li>Sink drain assembly replacement</li>
              <li>Basket strainer & tailpiece replacement</li>
              <li>P-trap cleaning & replacement</li>
              <li>Air gap installation for dishwashers</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Kitchen Remodel Plumbing</h3>
            <p className="mb-6">Complete plumbing for kitchen renovations - we work with your contractor or designer.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Rough-in plumbing for new layouts</li>
              <li>Gas line for cooktops & ranges</li>
              <li>Water line relocation & additions</li>
              <li>Vent piping for island sinks</li>
              <li>Code-compliant venting & drainage</li>
            </ul>
          </>
        )}
      />

      <ServiceCTA
        title="Kitchen Plumbing Problems? We'll Fix Them."
        description="From a dripping faucet to a complete kitchen remodel, HydroSync handles all your kitchen plumbing needs."
        primaryCta={{ text: "Schedule Kitchen Service", link: "/schedule" }}
        secondaryCta={{ text: "Emergency: Call (614) 232-2222", link: "tel:6142322222" }}
      />
    </>
  );
}