import { ServiceHero, ServiceBenefits, ServiceCTA, ServiceContent } from "@/components/service";
import { Shield, Truck, Star, Clock, Users, Home, Wrench, Droplets, Zap, Search, Camera, Waves, ArrowDownUp, MapPin, Building2 } from "lucide-react";

export default function WaterLinePage() {
  return (
    <>
      <ServiceHero
        title="Water Line Services"
        description="Expert water line repair, replacement, and installation. From leak detection to full repiping - we use trenchless technology when possible to minimize disruption."
        category={{ title: "Plumbing Services", slug: "plumbing" }}
        backgroundImage="/pics/pexels-jose-andres-pacheco-cortes-3641213-5463575.jpg"
        features={[
          "Licensed master plumbers",
          "Trenchless & traditional methods",
          "Advanced leak detection technology",
          "PEX & copper repiping options",
          "Permits & inspections handled",
          "100% satisfaction guarantee",
        ]}
        ctaText="Schedule Water Line Service"
        ctaLink="/schedule"
      />

      <ServiceBenefits
        title="Why Choose HydroSync for Water Lines?"
        benefits={[
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Trenchless Technology",
            description: "Pipe bursting & directional boring minimize excavation - save your landscape and driveway.",
          },
          {
            icon: <Truck className="w-6 h-6" />,
            title: "Advanced Leak Detection",
            description: "Acoustic, thermal, and tracer gas detection pinpoints leaks without unnecessary digging.",
          },
          {
            icon: <Star className="w-6 h-6" />,
            title: "Quality Materials",
            description: "Type L copper, PEX-A, and HDPE - materials chosen for longevity and code compliance.",
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Licensed & Insured",
            description: "Master plumbers with specialized water line experience and full insurance.",
          },
          {
            icon: <Clock className="w-6 h-6" />,
            title: "Fast Turnaround",
            description: "Most water line replacements completed in 1-2 days with water restored daily.",
          },
          {
            icon: <Home className="w-6 h-6" />,
            title: "Property Protection",
            description: "Trenchless methods protect landscaping, driveways, and hardscaping.",
          },
        ]}
      />

      <ServiceContent
        title="Our Water Line Services"
        content={(
          <>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Water Line Repair</h3>
            <p className="mb-6">Targeted repair for leaks, corrosion, and damage - often without full replacement.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Leak detection & targeted repair</li>
              <li>Corroded section replacement</li>
              <li>Joint & fitting repair</li>
              <li>Freeze damage repair</li>
              <li>Pressure regulation & PRV installation</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Water Line Replacement</h3>
            <p className="mb-6">Full service line replacement using trenchless or traditional methods based on your property.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Trenchless pipe bursting (HDPE)</li>
              <li>Directional boring for new lines</li>
              <li>Traditional open-cut when needed</li>
              <li>PEX-A & Type L copper options</li>
              <li>Meter to house & meter to curb</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Repiping Services</h3>
            <p className="mb-6">Whole-house repiping for aging galvanized, polybutylene, or lead lines - modern materials for lasting reliability.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Whole-house PEX repiping (Uponor/Wirsbo)</li>
              <li>Copper repiping (Type L)</li>
              <li>Manifold & home-run systems</li>
              <li>Fixture supply line updates</li>
              <li>Drywall repair coordination</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Leak Detection & Location</h3>
            <p className="mb-6">Advanced technology pinpoints leaks without destructive exploration.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Acoustic leak correlation</li>
              <li>Thermal imaging</li>
              <li>Tracer gas detection</li>
              <li>Video camera inspection</li>
              <li>Electronic leak location</li>
            </ul>
          </>
        )}
      />

      <ServiceCTA
        title="Water Line Issues? We'll Find & Fix Them."
        description="From a small leak to full repiping, HydroSync has the technology and expertise to restore your water service with minimal disruption."
        primaryCta={{ text: "Schedule Water Line Service", link: "/schedule" }}
        secondaryCta={{ text: "Emergency: Call (614) 232-2222", link: "tel:6142322222" }}
      />
    </>
  );
}