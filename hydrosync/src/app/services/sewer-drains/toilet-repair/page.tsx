import { ServiceHero, ServiceBenefits, ServiceCTA, ServiceContent } from "@/components/service";
import { Shield, Truck, Star, Clock, Users, Home, Wrench, Droplets, Zap, Toilet, Waves, AlertTriangle } from "lucide-react";

export default function ToiletRepairPage() {
  return (
    <>
      <ServiceHero
        title="Clogged Toilet Repairs"
        description="Fast, professional toilet repair and replacement services. From simple clogs to complete toilet replacement - we handle it all with same-day service available."
        category={{ title: "Sewer & Drains", slug: "sewer-drains" }}
        backgroundImage="/pics/pexels-jose-andres-pacheco-cortes-3641213-5463587.jpg"
        features={[
          "24/7 emergency toilet repair",
          "Clog removal with professional equipment",
          "Toilet replacement & installation",
          "Tank & bowl repair",
          "Flapper, fill valve, flush valve replacement",
          "ADA-compliant toilet installation",
        ]}
        ctaText="Schedule Repair"
        ctaLink="/schedule"
      />

      <ServiceBenefits
        title="Why Choose HydroSync for Toilet Repair?"
        benefits={[
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Licensed Plumbers",
            description: "All repairs performed by licensed journeyman and master plumbers.",
          },
          {
            icon: <Truck className="w-6 h-6" />,
            title: "Same-Day Service",
            description: "Most toilet repairs completed on the same day you call.",
          },
          {
            icon: <Star className="w-6 h-6" />,
            title: "Transparent Pricing",
            description: "Upfront flat-rate pricing - no surprises or hidden fees.",
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Quality Parts",
            description: "We use durable, code-approved parts with manufacturer warranties.",
          },
          {
            icon: <Clock className="w-6 h-6" />,
            title: "24/7 Emergency",
            description: "Overflowing toilet at midnight? We're there day or night.",
          },
          {
            icon: <Home className="w-6 h-6" />,
            title: "Clean & Professional",
            description: "Shoe covers, drop cloths, and thorough cleanup included.",
          },
        ]}
      />

      <ServiceContent
        title="Toilet Repair Services"
        content={(
          <>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Clog Removal</h3>
            <p className="mb-6">Professional clog removal using the right tools for the job - no damage to your toilet or pipes.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Professional auger & snake service</li>
              <li>Hydrojetting for severe blockages</li>
              <li>Foreign object retrieval</li>
              <li>Main line vs. fixture diagnosis</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Toilet Repair</h3>
            <p className="mb-6">Expert repair of all toilet components to stop leaks, running water, and poor flushing.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Flapper & flush valve replacement</li>
              <li>Fill valve & float adjustment</li>
              <li>Tank-to-bowl gasket replacement</li>
              <li>Handle & chain repair</li>
              <li>Wax ring & flange repair</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Toilet Replacement & Installation</h3>
            <p className="mb-6">Complete toilet replacement with modern, water-efficient models. Old unit removal and disposal included.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Standard, comfort height, & ADA models</li>
              <li>Dual-flush & pressure-assist options</li>
              <li>One-piece & two-piece designs</li>
              <li>Floor flange repair & leveling</li>
              <li>Old unit removal & responsible disposal</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Signs You Need Toilet Repair</h3>
            <p className="mb-6">Don't ignore these warning signs - small issues become big problems quickly.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Constant running or phantom flushes</li>
              <li>Weak or incomplete flush</li>
              <li>Water around base of toilet</li>
              <li>Cracks in tank or bowl</li>
              <li>Frequent clogs</li>
              <li>Wobbling or rocking toilet</li>
            </ul>
          </>
        )}
      />

      <ServiceCTA
        title="Toilet Problems? Fixed Today."
        description="From a simple flapper replacement to complete toilet replacement, HydroSync has you covered."
        primaryCta={{ text: "Schedule Toilet Repair", link: "/schedule" }}
        secondaryCta={{ text: "Emergency: Call (614) 232-2222", link: "tel:6142322222" }}
      />
    </>
  );
}