import { Hero, CTASection } from "@/components/sections";
import { Shield, Truck, Star, Clock, FileText, CheckCircle, Gavel } from "lucide-react";

export const metadata = {
  title: "Terms of Service",
  description: "HydroSync's terms of service - governing the use of our website and services.",
};

export default function TermsPage() {
  return (
    <>
      <Hero
        headline="Terms of Service"
        subheadline="By using HydroSync's website and services, you agree to these terms. Please read them carefully."
        primaryCta={{ text: "Contact Us", link: "/contact" }}
        secondaryCta={{ text: "Schedule Service", link: "/schedule" }}
        trustBadges={[
          { icon: <Shield className="w-6 h-6" />, label: "Transparent Terms", value: "No Hidden Fees" },
          { icon: <FileText className="w-6 h-6" />, label: "Clear Language", value: "Easy to Read" },
          { icon: <Gavel className="w-6 h-6" />, label: "Fair Terms", value: "Consumer Friendly" },
          { icon: <CheckCircle className="w-6 h-6" />, label: "Your Rights", value: "Protected" },
        ]}
      />

      <section className="py-20 md:py-24" aria-labelledby="terms-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Acceptance of Terms</h2>
              <p className="text-neutral-600 mb-4">By accessing or using HydroSync's website, scheduling services, or engaging our services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Services Provided</h2>
              <p className="text-neutral-600 mb-4">HydroSync provides plumbing, HVAC, drain cleaning, and related services as described on our website and in service agreements. We reserve the right to modify or discontinue services with notice.</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Services performed by licensed, insured professionals</li>
                <li>Work performed to industry standards and local codes</li>
                <li>Warranties as specified in service agreements</li>
                <li>Emergency services available 24/7/365</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Scheduling & Cancellations</h2>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Appointments scheduled online or by phone</li>
                <li>24-hour notice required for cancellations without fee</li>
                <li>Emergency services dispatched immediately</li>
                <li>Arrival windows provided (typically 2 hours)</li>
                <li>Text/email reminders sent before appointments</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Pricing & Payment</h2>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Upfront pricing provided before work begins</li>
                <li>No hidden fees - flat rate or time & materials as agreed</li>
                <li>Payment due upon completion unless financing arranged</li>
                <li>Accepted: cash, check, all major credit cards, financing</li>
                <li>Emergency service call fee waived if repair proceeds</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Warranties & Guarantees</h2>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Workmanship guaranteed - we'll make it right</li>
                <li>Parts & equipment per manufacturer warranties</li>
                <li>100% satisfaction guarantee on all services</li>
                <li>Extended warranties available on select installations</li>
                <li>Warranty claims handled promptly at no cost</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Limitation of Liability</h2>
              <p className="text-neutral-600 mb-4">HydroSync is not liable for indirect, incidental, or consequential damages. Our total liability is limited to the amount paid for the specific service. We are not responsible for pre-existing conditions, Acts of God, or customer negligence.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Indemnification</h2>
              <p className="text-neutral-600 mb-4">You agree to indemnify HydroSync from claims arising from your use of our services, violation of these terms, or violation of any law or third-party rights.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Governing Law & Disputes</h2>
              <p className="text-neutral-600 mb-4">These terms are governed by Ohio law. Disputes will be resolved through good-faith negotiation, then binding arbitration in Franklin County, Ohio, if necessary.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Changes to Terms</h2>
              <p className="text-neutral-600 mb-4">We may update these terms periodically. Continued use of our services after changes constitutes acceptance. Material changes will be communicated via email or website notice.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Contact Us</h2>
              <p className="text-neutral-600 mb-4">Questions about these terms? Contact us:</p>
              <ul className="space-y-2">
                <li>Email: legal@hydrosync.com</li>
                <li>Phone: (614) 232-2222</li>
                <li>Address: 123 Service Drive, Columbus, OH 43215</li>
              </ul>
            </section>
          </div>
        </div>
      </section>

      <CTASection
        title="Have Questions About Our Terms?"
        subtitle="We're happy to clarify any part of our terms. Contact us for clarification."
        buttons={[
          { text: "Email Legal Team", link: "mailto:legal@hydrosync.com", variant: "primary" },
          { text: "Call (614) 232-2222", link: "tel:6142322222", variant: "outline" },
        ]}
      />
    </>
  );
}