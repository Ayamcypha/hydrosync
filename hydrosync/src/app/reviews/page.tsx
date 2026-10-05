import { ReviewsCarousel } from "@/components/sections";
import { Hero } from "@/components/sections";
import { StatsSection } from "./StatsSection";
import { Star, Shield, Truck, Clock, Quote, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Customer Reviews",
  description: "Read verified customer reviews for HydroSync plumbing, HVAC, and drain services. 4.8★ rating from 4,200+ Google reviews.",
};

export default function ReviewsPage() {
  return (
    <>
      <Hero
        headline="What Our Customers Say"
        subheadline="Since 1986, HydroSync has earned the trust of homeowners and businesses across Central Ohio. Read real reviews from real customers."
        primaryCta={{ text: "Schedule Service", link: "/schedule" }}
        secondaryCta={{ text: "Call (614) 232-2222", link: "tel:6142322222" }}
        trustBadges={[
          { icon: <Star className="w-6 h-6" />, label: "Overall Rating", value: "4.8★" },
          { icon: <Shield className="w-6 h-6" />, label: "Verified Reviews", value: "4,200+" },
          { icon: <Truck className="w-6 h-6" />, label: "Response Time", value: "Under 2 Hours" },
          { icon: <Clock className="w-6 h-6" />, label: "Availability", value: "24/7/365" },
        ]}
      />

      <ReviewsCarousel
        title=""
        subtitle=""
        rating={4.8}
        reviewCount={4261}
      />

      <StatsSection />

      <section className="py-20 md:py-24 bg-primary-600 text-white" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4 text-center">
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience 5-Star Service?
          </h2>
          <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers. Schedule your service today and see why Central Ohio chooses HydroSync.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/schedule"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-primary-600 font-semibold text-lg hover:bg-primary-50 transition-colors shadow-lg"
            >
              Schedule Service
            </a>
            <a
              href="tel:6142322222"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-white text-white font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Call (614) 232-2222
            </a>
          </div>
        </div>
      </section>
    </>
  );
}