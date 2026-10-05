import { Hero, CTASection } from "@/components/sections";
import { Shield, Truck, Star, Clock, FileText, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Privacy Policy",
  description: "HydroSync's privacy policy - how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Hero
        headline="Privacy Policy"
        subheadline="Your privacy is important to us. This policy explains how we collect, use, and protect your personal information when you use our services."
        primaryCta={{ text: "Contact Us", link: "/contact" }}
        secondaryCta={{ text: "Schedule Service", link: "/schedule" }}
        trustBadges={[
          { icon: <Shield className="w-6 h-6" />, label: "Data Protection", value: "GDPR Compliant" },
          { icon: <FileText className="w-6 h-6" />, label: "Transparent", value: "Clear Policy" },
          { icon: <CheckCircle className="w-6 h-6" />, label: "Your Rights", value: "Full Control" },
          { icon: <Clock className="w-6 h-6" />, label: "Data Retention", value: "Minimal Period" },
        ]}
      />

      <section className="py-20 md:py-24" aria-labelledby="privacy-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Information We Collect</h2>
              <p className="text-neutral-600 mb-4">We collect information you provide directly to us when you schedule service, request a quote, or contact us.</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Name, phone number, email address</li>
                <li>Property address & service details</li>
                <li>Payment information (processed securely by our payment processor)</li>
                <li>Communication preferences</li>
              </ul>
              <p className="text-neutral-600">We also collect usage data automatically when you visit our website, including IP address, browser type, and pages visited.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>To provide, schedule, and improve our services</li>
                <li>To communicate with you about appointments, promotions, and updates</li>
                <li>To process payments and send invoices</li>
                <li>To comply with legal obligations</li>
                <li>To protect against fraud and improve security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Information Sharing</h2>
              <p className="text-neutral-600 mb-4">We do not sell your personal information. We may share information with:</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Service technicians assigned to your job</li>
                <li>Payment processors (encrypted, PCI-compliant)</li>
                <li>Legal authorities when required by law</li>
                <li>Insurance companies (with your consent for claims)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Your Rights</h2>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Access and obtain a copy of your data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data (subject to legal requirements)</li>
                <li>Opt out of marketing communications at any time</li>
                <li>Request data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Data Security & Retention</h2>
              <p className="text-neutral-600 mb-4">We implement appropriate technical and organizational measures to protect your data. We retain personal information only as long as necessary for the purposes described in this policy or as required by law.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Contact Us</h2>
              <p className="text-neutral-600 mb-4">If you have questions about this policy or want to exercise your rights, contact us:</p>
              <ul className="space-y-2">
                <li>Email: privacy@hydrosync.com</li>
                <li>Phone: (614) 232-2222</li>
                <li>Address: 123 Service Drive, Columbus, OH 43215</li>
              </ul>
            </section>
          </div>
        </div>
      </section>

      <CTASection
        title="Questions About Your Privacy?"
        subtitle="We're here to help. Contact our privacy team for any questions about your data."
        buttons={[
          { text: "Email Privacy Team", link: "mailto:privacy@hydrosync.com", variant: "primary" },
          { text: "Call (614) 232-2222", link: "tel:6142322222", variant: "outline" },
        ]}
      />
    </>
  );
}