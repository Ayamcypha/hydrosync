import { ServiceHero, ServiceBenefits, ServiceCTA, ServiceContent } from "@/components/service";
import { Shield, Truck, Star, Clock, Users, Home, Search, Camera, Waves, ArrowDownUp, Zap } from "lucide-react";

export default function CameraInspectionPage() {
  return (
    <>
      <ServiceHero
        title="Camera Line Inspection"
        description="HD video pipe inspection identifies the exact location and nature of sewer and drain problems without guesswork. Real-time video with digital reporting."
        category={{ title: "Sewer & Drains", slug: "sewer-drains" }}
        backgroundImage="/pics/camera line inspect.jpg"
        features={[
          "Real-time HD video with recording",
          "Locates clogs, breaks, offsets & bellies",
          "Identifies root intrusion & pipe material",
          "Pre-purchase sewer inspections",
          "Post-repair verification",
          "Digital report with findings & recommendations",
        ]}
        ctaText="Schedule Inspection"
        ctaLink="/schedule"
      />

      <ServiceBenefits
        title="Why Choose HydroSync for Camera Inspection?"
        benefits={[
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Accurate Diagnosis",
            description: "See exactly what's wrong without guesswork - eliminates unnecessary repairs and targeted solutions.",
          },
          {
            icon: <Truck className="w-6 h-6" />,
            title: "State-of-the-Art Equipment",
            description: "HD color cameras with self-leveling heads, built-in locators, and digital recording.",
          },
          {
            icon: <Star className="w-6 h-6" />,
            title: "Transparent Reporting",
            description: "Digital report with video clips, photos, measurements, and clear recommendations.",
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Pre-Purchase Peace of Mind",
            description: "Sewer scope inspections for home buyers - know the condition before you buy.",
          },
          {
            icon: <Clock className="w-6 h-6" />,
            title: "Post-Repair Verification",
            description: "Confirm repairs were completed correctly with follow-up camera inspection.",
          },
          {
            icon: <Home className="w-6 h-6" />,
            title: "Non-Invasive",
            description: "Access through existing cleanouts - no digging or property damage required.",
          },
        ]}
      />

      <ServiceContent
        title="Camera Inspection Services"
        content={(
          <>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Residential Sewer Inspection</h3>
            <p className="mb-6">Comprehensive camera inspection of your home's main sewer line and lateral connections.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Main line from house to city connection</li>
              <li>Identify root intrusion, cracks, offsets</li>
              <li>Locate buried cleanouts & access points</li>
              <li>Measure pipe depth & length</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Commercial & Multi-Family Inspection</h3>
            <p className="mb-6">Large-scale camera inspection for commercial properties, apartment complexes, and municipal systems.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Large diameter pipe inspection (up to 12\")</li>
              <li>Lateral mapping for property management</li>
              <li>Compliance documentation for regulations</li>
              <li>Preventive maintenance scheduling</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Pre-Purchase Sewer Inspection</h3>
            <p className="mb-6">Don't buy a home without knowing the condition of the sewer line - costly repairs can exceed $10,000.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Performed during home inspection period</li>
              <li>Digital report delivered same day</li>
              <li>Negotiate repairs or price reduction</li>
              <li>Peace of mind for major investment</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Post-Repair Verification</h3>
            <p className="mb-6">Confirm that sewer repairs were completed correctly before backfilling or final payment.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Verify pipe lining adhesion & coverage</li>
              <li>Confirm blockage fully cleared</li>
              <li>Document for warranty & insurance</li>
              <li>Before/after comparison reporting</li>
            </ul>
          </>
        )}
      />

      <ServiceCTA
        title="See What's in Your Pipes"
        description="Schedule a professional camera inspection today and eliminate the guesswork."
        primaryCta={{ text: "Schedule Inspection", link: "/schedule" }}
        secondaryCta={{ text: "Call (614) 232-2222", link: "tel:6142322222" }}
      />
    </>
  );
}