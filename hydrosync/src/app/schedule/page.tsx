import { BookingForm } from "@/components/forms";
import { Hero } from "@/components/sections";
import { ScheduleProcessSteps } from "./ScheduleProcessSteps";
import { Calendar, Clock, Shield, Truck, Star, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Schedule Service",
  description: "Book your plumbing, HVAC, or drain service online with HydroSync. 24/7 scheduling available. Fast, easy, and secure.",
};

export default function SchedulePage() {
  return (
    <>
      <Hero
        headline="Schedule Your Service"
        subheadline="Booking your plumbing, HVAC, or drain service with HydroSync is simple. Choose your service, pick a time, and we'll handle the rest."
        primaryCta={{ text: "", link: "" }}
        secondaryCta={{ text: "", link: "" }}
        trustBadges={[
          { icon: <Shield className="w-6 h-6" />, label: "Licensed Techs", value: "Background Checked" },
          { icon: <Clock className="w-6 h-6" />, label: "24/7 Scheduling", value: "Book Anytime" },
          { icon: <Truck className="w-6 h-6" />, label: "Same-Day Service", value: "Available" },
          { icon: <Star className="w-6 h-6" />, label: "Satisfaction", value: "Guaranteed" },
        ]}
      />

      <section className="py-20 md:py-24" aria-labelledby="booking-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <BookingForm />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-neutral-50" aria-labelledby="process-heading">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="process-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              What Happens After You Book
            </h2>
            <p className="text-lg text-neutral-600">
              Our streamlined process ensures a smooth experience from scheduling to completion.
            </p>
          </div>

          <ScheduleProcessSteps />
        </div>
      </section>

      <section className="py-20 md:py-24 bg-primary-600 text-white" aria-labelledby="emergency-heading">
        <div className="container mx-auto px-4 text-center">
          <h2 id="emergency-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Emergency? Don't Wait.
          </h2>
          <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            For urgent issues like burst pipes, no heat in winter, AC out in summer, or gas leaks - call our 24/7 emergency line for immediate dispatch.
          </p>
          <a
            href="tel:6142322222"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-primary-600 font-semibold text-lg hover:bg-primary-50 transition-colors shadow-lg"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Emergency: (614) 232-2222
          </a>
        </div>
      </section>
    </>
  );
}

import { Phone } from "lucide-react";