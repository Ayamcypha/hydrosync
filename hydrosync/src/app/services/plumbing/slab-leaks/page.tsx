import { ServiceHero, ServiceBenefits, ServiceCTA, ServiceContent } from "@/components/service";
import { Shield, Truck, Star, Clock, Users, Home, Wrench, Droplets, Zap, Waves, Search, Camera, Thermometer, Droplet, Settings } from "lucide-react";

export default function SlabLeaksPage() {
  return (
    <>
      <ServiceHero
        title="Slab Leak Detection & Repair"
        description="Advanced electronic leak detection pinpoints slab leaks without destructive exploration. Minimally invasive repair options to protect your foundation and property."
        category={{ title: "Plumbing Services", slug: "plumbing" }}
        backgroundImage="/pics/pexels-jose-andres-pacheco-cortes-3641213-5463587.jpg"
        features={[
          "Non-invasive electronic leak detection",
          "Thermal imaging & acoustic correlation",
          "Minimally invasive repair options",
          "Foundation protection priority",
          "Insurance claim assistance",
          "24/7 emergency response",
        ]}
        ctaText="Schedule Leak Detection"
        ctaLink="/schedule"
      />

      <ServiceBenefits
        title="Why Choose HydroSync for Slab Leaks?"
        benefits={[
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Pinpoint Accuracy",
            description: "Electronic leak detection narrows the leak to within inches - no jackhammer guessing.",
          },
          {
            icon: <Truck className="w-6 h-6" />,
            title: "Minimally Invasive Repair",
            description: "Epoxy lining, spot repair, or targeted access - we choose the least invasive effective method.",
          },
          {
            icon: <Star className="w-6 h-6" />,
            title: "Foundation Protection",
            description: "We prioritize methods that protect your slab integrity - no unnecessary jackhammering.",
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Insurance Coordination",
            description: "We work with your insurance - documentation, estimates, and direct billing available.",
          },
          {
            icon: <Clock className="w-6 h-6" />,
            title: "Rapid Emergency Response",
            description: "Active slab leak? We dispatch immediately to minimize water damage and foundation risk.",
          },
          {
            icon: <Home className="w-6 h-6" />,
            title: "Complete Restoration",
            description: "From detection to repair to flooring restoration - we manage the entire process.",
          },
        ]}
      />

      <ServiceContent
        title="Slab Leak Services"
        content={(
          <>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Electronic Leak Detection</h3>
            <p className="mb-6">Advanced technology pinpoints leaks under concrete slabs without destructive exploration.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Acoustic correlation & ground microphone</li>
              <li>Thermal imaging for hot water leaks</li>
              <li>Tracer gas detection (helium/hydrogen)</li>
              <li>Electronic amplification & correlation</li>
              <li>Precise location marking for repair</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Minimally Invasive Repair Options</h3>
            <p className="mb-6">We choose the least invasive effective repair method for your specific situation.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Epoxy pipe lining (no access digging)</li>
              <li>Direct access spot repair (minimal opening)</li>
              <li>Pipe rerouting (bypass damaged section)</li>
              <li>Trenchless pipe bursting (for replacement)</li>
              <li>Epoxy injection for pinhole leaks</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Signs of a Slab Leak</h3>
            <p className="mb-6">Early detection prevents major foundation damage and high water bills.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Unexplained increase in water bill</li>
              <li>Warm spots on floor (hot water leak)</li>
              <li>Sound of running water when fixtures off</li>
              <li>Cracks in walls or foundation</li>
              <li>Mold or mildew smells</li>
              <li>Low water pressure</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Insurance & Restoration</h3>
            <p className="mb-6">We work with your insurance company to minimize out-of-pocket costs and restore your property.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Detailed documentation & photos for claims</li>
              <li>Direct insurance billing available</li>
              <li>Flooring removal & replacement coordination</li>
              <li>Moisture mitigation & mold prevention</li>
              <li>Post-repair leak verification</li>
            </ul>
          </>
        )}
      />

      <ServiceCTA
        title="Suspect a Slab Leak? Don't Wait."
        description="Foundation damage escalates quickly. Schedule electronic leak detection today and protect your home's foundation."
        primaryCta={{ text: "Schedule Leak Detection", link: "/schedule" }}
        secondaryCta={{ text: "Emergency: Call (614) 232-2222", link: "tel:6142322222" }}
      />
    </>
  );
}