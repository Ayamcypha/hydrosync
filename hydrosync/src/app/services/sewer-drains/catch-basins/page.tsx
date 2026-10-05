import { ServiceHero, ServiceBenefits, ServiceCTA, ServiceContent } from "@/components/service";
import { Shield, Truck, Star, Clock, Users, Home, Wrench, Droplets, Zap, Search, Camera, Waves, ArrowDownUp, Building2 } from "lucide-react";

export default function CatchBasinsPage() {
  return (
    <>
      <ServiceHero
        title="Catch Basin Services"
        description="Professional catch basin cleaning, repair, and installation for commercial and municipal properties. Prevent flooding and maintain proper drainage."
        category={{ title: "Sewer & Drains", slug: "sewer-drains" }}
        backgroundImage="/pics/pexels-jose-andres-pacheco-cortes-3641213-5463587.jpg"
        features={[
          "Commercial & municipal catch basin cleaning",
          "Sediment & debris removal",
          "Structural repair & reconstruction",
          "New catch basin installation",
          "Grates & frames replacement",
          "Compliance documentation",
        ]}
        ctaText="Schedule Service"
        ctaLink="/schedule"
      />

      <ServiceBenefits
        title="Why Choose HydroSync for Catch Basins?"
        benefits={[
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Commercial Expertise",
            description: "Experienced with municipal, commercial, and industrial catch basin systems of all sizes.",
          },
          {
            icon: <Truck className="w-6 h-6" />,
            title: "Vacuum Truck Equipment",
            description: "High-capacity vacuum trucks for efficient sediment and debris removal.",
          },
          {
            icon: <Star className="w-6 h-6" />,
            title: "Code Compliance",
            description: "Services meet EPA, local municipality, and MS4 stormwater requirements.",
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Preventive Programs",
            description: "Scheduled cleaning programs prevent flooding and extend basin life.",
          },
          {
            icon: <Clock className="w-6 h-6" />,
            title: "Emergency Response",
            description: "24/7 response for flooded catch basins and drainage emergencies.",
          },
          {
            icon: <Home className="w-6 h-6" />,
            title: "Documentation & Reporting",
            description: "Digital reports with photos, measurements, and compliance documentation.",
          },
        ]}
      />

      <ServiceContent
        title="Catch Basin Services"
        content={(
          <>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Catch Basin Cleaning</h3>
            <p className="mb-6">Regular cleaning prevents sediment buildup that causes flooding and water quality issues.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Vacuum removal of sediment, debris, hydrocarbons</li>
              <li>High-pressure washing of basin walls</li>
              <li>Outlet pipe inspection & clearing</li>
              <li>Disposal at approved facilities</li>
              <li>Before/after photo documentation</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Catch Basin Repair & Reconstruction</h3>
            <p className="mb-6">Structural repair for deteriorated catch basins to restore function and prevent collapse.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Brick, block, & concrete structure repair</li>
              <li>Frame & grate adjustment & replacement</li>
              <li>Invert reconstruction for proper flow</li>
              <li>Waterproofing & sealing</li>
              <li>ADA-compliant grate installation</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">New Catch Basin Installation</h3>
            <p className="mb-6">New drainage infrastructure for new construction, parking lots, and roadways.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Precast & cast-in-place basins</li>
              <li>Type selection for traffic loads (H-20, H-25)</li>
              <li>Proper sizing for drainage area</li>
              <li>Connection to storm sewer systems</li>
              <li>Permitting & inspection coordination</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Commercial & Municipal Programs</h3>
            <p className="mb-6">Scheduled maintenance programs for property managers, municipalities, and commercial properties.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Quarterly, semi-annual, or annual cleaning</li>
              <li>Priority emergency response</li>
              <li>Digital inspection reports</li>
              <li>Budget planning & cost predictability</li>
              <li>MS4 compliance support</li>
            </ul>
          </>
        )}
      />

      <ServiceCTA
        title="Maintain Your Drainage System"
        description="Schedule catch basin cleaning or repair with HydroSync's commercial drainage experts."
        primaryCta={{ text: "Schedule Service", link: "/schedule" }}
        secondaryCta={{ text: "Call (614) 232-2222", link: "tel:6142322222" }}
      />
    </>
  );
}