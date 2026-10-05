import { ServiceHero, ServiceBenefits, ServiceCTA, ServiceContent } from "@/components/service";
import { Shield, Truck, Star, Clock, Users, Home, Wrench, Droplets, Zap, Search, Camera, Waves, ArrowDownUp, Building2, Zap as ZapIcon } from "lucide-react";

export default function PipeLiningPage() {
  return (
    <>
      <ServiceHero
        title="Pipe Lining & Patching"
        description="Trenchless pipe rehabilitation using cured-in-place pipe (CIPP) lining and sectional point repair. Fix cracks, leaks, and infiltration without excavation."
        category={{ title: "Sewer & Drains", slug: "sewer-drains" }}
        backgroundImage="/pics/pexels-jose-andres-pacheco-cortes-3641213-5463587.jpg"
        features={[
          "CIPP full-length pipe lining",
          "Sectional point repair (1-10 ft sections)",
          "Lateral & main line applications",
          "Joint sealing & infiltration control",
          "50+ year design life",
          "Minimal diameter loss",
        ]}
        ctaText="Schedule Assessment"
        ctaLink="/schedule"
      />

      <ServiceBenefits
        title="Why Choose HydroSync for Pipe Lining?"
        benefits={[
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Proven Technology",
            description: "CIPP has 50+ years of proven performance - the industry standard for trenchless rehabilitation.",
          },
          {
            icon: <Truck className="w-6 h-6" />,
            title: "Minimal Disruption",
            description: "Access through existing cleanouts - no trenches, no landscape damage, no street cuts.",
          },
          {
            icon: <Star className="w-6 h-6" />,
            title: "Cost Effective",
            description: "Typically 30-50% less than excavation - no restoration costs for landscaping or hardscaping.",
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Fast Completion",
            description: "Most lining projects completed in 1-2 days vs. weeks for excavation.",
          },
          {
            icon: <Clock className="w-6 h-6" />,
            title: "Long-Term Solution",
            description: "50+ year design life with manufacturers' warranties and third-party testing.",
          },
          {
            icon: <Home className="w-6 h-6" />,
            title: "Versatile Application",
            description: "Works in clay, cast iron, concrete, PVC, Orangeburg - diameters 2\" to 48\".",
          },
        ]}
      />

      <ServiceContent
        title="Pipe Lining Services"
        content={(
          <>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Full-Length CIPP Lining</h3>
            <p className="mb-6">Continuous felt liner saturated with epoxy resin, inverted or pulled into place, then cured with hot water, steam, or UV light.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Continuous lengths up to 1,000+ feet</li>
              <li>Diameters 2\" to 48\"</li>
              <li>Navigates bends & offsets</li>
              <li>Steam, hot water, or UV cure</li>
              <li>Post-cure camera verification</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Sectional Point Repair</h3>
            <p className="mb-6">Short structural liners (1-10 ft) for isolated defects - ideal for cracks, holes, offset joints, and lateral connections.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>1-10 ft structural liner sections</li>
              <li>Packer-based installation</li>
              <li>Ideal for localized defects</li>
              <li>Fraction of full-lining cost</li>
              <li>Completed in hours, not days</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Lateral & Connection Lining</h3>
            <p className="mb-6">Specialized lining for service laterals and main-to-lateral connections - prevents root intrusion and infiltration at joints.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Top-hat & full-wrap lateral liners</li>
              <li>Main-to-lateral connection sealing</li>
              <li>Wye & tee connection repair</li>
              <li>Prevents root entry at joints</li>
              <li>Eliminates inflow & infiltration</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Joint Sealing & Infiltration Control</h3>
            <p className="mb-6">Chemical grout injection and mechanical seals for leaking joints without structural lining.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Acrylamide & urethane grouts</li>
              <li>Mechanical joint seals & clamps</li>
              <li>Pressure testing & verification</li>
              <li>Stops groundwater infiltration</li>
              <li>Reduces treatment plant loads</li>
            </ul>
          </>
        )}
      />

      <ServiceCTA
        title="Restore Your Pipes Without Digging"
        description="CIPP lining restores structural integrity and stops leaks at a fraction of excavation cost. Schedule a camera inspection to see if lining is right for your pipes."
        primaryCta={{ text: "Schedule Camera Inspection", link: "/schedule" }}
        secondaryCta={{ text: "Call (614) 232-2222", link: "tel:6142322222" }}
      />
    </>
  );
}