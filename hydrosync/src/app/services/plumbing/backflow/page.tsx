import { ServiceHero, ServiceBenefits, ServiceCTA, ServiceContent } from "@/components/service";
import { Shield, Truck, Star, Clock, Users, Home, Wrench, Droplets, Zap, Search, Camera, Waves, ArrowDownUp, Building2, CheckCircle } from "lucide-react";

export default function BackflowPage() {
  return (
    <>
      <ServiceHero
        title="Backflow Testing & Certification"
        description="Annual backflow prevention testing and certification required by Ohio law. Certified testers, fast turnaround, and digital reporting for compliance."
        category={{ title: "Plumbing Services", slug: "plumbing" }}
        backgroundImage="/pics/pexels-jose-andres-pacheco-cortes-3641213-5463587.jpg"
        features={[
          "Ohio EPA certified backflow testers",
          "Annual testing & certification",
          "Repair & replacement of failed assemblies",
          "Digital test reports submitted to water authority",
          "Commercial, residential & irrigation systems",
          "Reminder service for annual compliance",
        ]}
        ctaText="Schedule Backflow Test"
        ctaLink="/schedule"
      />

      <ServiceBenefits
        title="Why Choose HydroSync for Backflow Testing?"
        benefits={[
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Certified Testers",
            description: "Ohio EPA certified backflow prevention assembly testers - fully licensed and insured.",
          },
          {
            icon: <Truck className="w-6 h-6" />,
            title: "Fast Turnaround",
            description: "Same-week scheduling available. Digital reports submitted to water authority within 24 hours.",
          },
          {
            icon: <Star className="w-6 h-6" />,
            title: "Full Service",
            description: "Test, repair, and replace - we handle it all. No need to coordinate multiple contractors.",
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Compliance Management",
            description: "We track your due dates and send reminders - never miss a deadline or face fines.",
          },
          {
            icon: <Clock className="w-6 h-6" />,
            title: "Flexible Scheduling",
            description: "Early morning, evening, and weekend appointments to minimize business disruption.",
          },
          {
            icon: <Home className="w-6 h-6" />,
            title: "All Assembly Types",
            description: "RP, DC, PVB, SVB, AVB - residential, commercial, industrial, and irrigation systems.",
          },
        ]}
      />

      <ServiceContent
        title="Backflow Prevention Services"
        content={(
          <>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Annual Testing & Certification</h3>
            <p className="mb-6">Ohio law requires annual testing of all backflow prevention assemblies by a certified tester.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Reduced Pressure (RP) assemblies</li>
              <li>Double Check (DC) assemblies</li>
              <li>Pressure Vacuum Breakers (PVB/SVB)</li>
              <li>Atmospheric Vacuum Breakers (AVB)</li>
              <li>Digital test reports filed with water authority</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Backflow Assembly Repair & Replacement</h3>
            <p className="mb-6">When assemblies fail testing, we repair or replace them promptly to restore protection.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Check valve & relief valve replacement</li>
              <li>Full assembly replacement (all brands)</li>
              <li>Retrofit for code compliance</li>
              <li>Freeze-damaged assembly replacement</li>
              <li>Post-repair re-testing & certification</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">New Installation</h3>
            <p className="mb-6">New backflow prevention assembly installation for new construction, remodels, and system upgrades.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Proper sizing & selection for hazard level</li>
              <li>Permits & inspections coordinated</li>
              <li>Proper orientation & clearances</li>
              <li>Freeze protection for outdoor assemblies</li>
              <li>Documentation for permits & records</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Compliance Management</h3>
            <p className="mb-6">We handle the paperwork so you don't have to worry about deadlines or fines.</p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Automated annual test reminders</li>
              <li>Digital submission to water authority</li>
              <li>Record keeping for insurance & audits</li>
              <li>Multi-property portfolio management</li>
              <li>Emergency testing for violations</li>
            </ul>
          </>
        )}
      />

      <ServiceCTA
        title="Stay Compliant, Stay Protected"
        description="Don't risk fines or water contamination. Schedule your annual backflow test with HydroSync's certified testers."
        primaryCta={{ text: "Schedule Backflow Test", link: "/schedule" }}
        secondaryCta={{ text: "Call (614) 232-2222", link: "tel:6142322222" }}
      />
    </>
  );
}