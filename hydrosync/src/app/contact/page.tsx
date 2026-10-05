import { ContactForm } from "@/components/forms";
import { Hero } from "@/components/sections";
import { MapPin, Phone, Mail, Clock, Map, Shield, Truck, Star } from "lucide-react";

export const metadata = {
  title: "Contact Us",
  description: "Contact HydroSync for plumbing, HVAC, and drain services in Columbus, Ohio. Call (614) 232-2222 or fill out our contact form.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        headline="Contact HydroSync"
        subheadline="Have questions? Need emergency service? Want to schedule an appointment? We're here to help 24/7."
        primaryCta={{ text: "Call Now", link: "tel:6142322222" }}
        secondaryCta={{ text: "Schedule Service", link: "/schedule" }}
        trustBadges={[
          { icon: <Shield className="w-6 h-6" />, label: "Licensed & Insured", value: "Since 1986" },
          { icon: <Clock className="w-6 h-6" />, label: "24/7 Support", value: "Live Answer" },
          { icon: <Truck className="w-6 h-6" />, label: "Rapid Response", value: "80+ Vehicles" },
          { icon: <Star className="w-6 h-6" />, label: "4.8★ Rating", value: "4,200+ Reviews" },
        ]}
      />

      <section className="py-20 md:py-24" aria-labelledby="contact-heading">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white rounded-2xl border border-neutral-200 p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">Main Office</h4>
                      <p className="text-neutral-600">123 Service Drive<br />Columbus, OH 43215</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">Phone</h4>
                      <p className="text-neutral-600">
                        <a href="tel:6142322222" className="hover:text-primary-600 transition-colors">(614) 232-2222</a><br />
                        <span className="text-sm">24/7 Emergency & Scheduling</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">Email</h4>
                      <p className="text-neutral-600">
                        <a href="mailto:info@hydrosync.com" className="hover:text-primary-600 transition-colors">info@hydrosync.com</a><br />
                        <span className="text-sm">General inquiries & billing</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">Hours</h4>
                      <p className="text-neutral-600">
                        Mon-Fri: 7:00 AM - 7:00 PM<br />
                        Saturday: 8:00 AM - 4:00 PM<br />
                        Sunday: Emergency Only
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary-600 text-white rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Emergency Service</h3>
                <p className="text-primary-100 mb-6">Plumbing, heating, or cooling emergency? Our live operators are standing by 24/7/365.</p>
                <a
                  href="tel:6142322222"
                  className="inline-flex items-center justify-center w-full px-6 py-4 rounded-xl bg-white text-primary-600 font-semibold hover:bg-primary-50 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (614) 232-2222 Now
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-neutral-200 p-6 md:p-8">
                <h2 id="contact-heading" className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">Send Us a Message</h2>
                <p className="text-neutral-600 mb-8">Fill out the form below and we'll get back to you within 24 hours. For emergencies, please call us directly.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-neutral-50" aria-labelledby="map-heading">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 id="map-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Service Area</h2>
            <p className="text-lg text-neutral-600">We proudly serve Columbus and the surrounding Central Ohio communities.</p>
          </div>
          <div className="aspect-video bg-neutral-200 rounded-2xl flex items-center justify-center">
            <div className="text-center text-neutral-500 p-8">
              <Map className="w-16 h-16 mx-auto mb-4 text-neutral-300" />
              <p className="text-lg">Interactive Service Area Map</p>
              <p className="text-sm mt-2">Coming Soon - View our service coverage</p>
              <a href="/service-area" className="inline-flex items-center gap-2 mt-4 text-primary-600 hover:text-primary-700 font-medium">
                View Service Areas
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { ChevronRight } from "lucide-react";