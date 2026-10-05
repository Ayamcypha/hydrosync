"use client";

import { Hero, CTASection } from "@/components/sections";
import { MapPin, CheckCircle, Truck, Clock, Shield, Map } from "lucide-react";

const serviceCities = [
  { city: "Columbus", zipCodes: ["43201", "43202", "43203", "43204", "43205", "43206", "43207", "43209", "43210", "43211", "43212", "43213", "43214", "43215", "43219", "43220", "43221", "43222", "43223", "43224", "43227", "43228", "43229", "43230", "43231", "43232", "43235", "43240"] },
  { city: "Dublin", zipCodes: ["43016", "43017"] },
  { city: "Hilliard", zipCodes: ["43026"] },
  { city: "Upper Arlington", zipCodes: ["43212", "43220", "43221"] },
  { city: "Worthington", zipCodes: ["43085"] },
  { city: "Westerville", zipCodes: ["43081", "43082"] },
  { city: "Gahanna", zipCodes: ["43230"] },
  { city: "Reynoldsburg", zipCodes: ["43068"] },
  { city: "Grove City", zipCodes: ["43123"] },
  { city: "Pickerington", zipCodes: ["43147"] },
  { city: "Canal Winchester", zipCodes: ["43110"] },
  { city: "New Albany", zipCodes: ["43054"] },
  { city: "Powell", zipCodes: ["43065"] },
  { city: "Lewis Center", zipCodes: ["43035"] },
  { city: "Delaware", zipCodes: ["43015"] },
  { city: "Marysville", zipCodes: ["43040"] },
  { city: "London", zipCodes: ["43140"] },
  { city: "Circleville", zipCodes: ["43113"] },
  { city: "Lancaster", zipCodes: ["43130"] },
  { city: "Newark", zipCodes: ["43055", "43056"] },
];

export default function ServiceAreaPage() {
  return (
    <>
      <Hero
        headline="Our Service Area"
        subheadline="HydroSync proudly serves Columbus and the greater Central Ohio region. With 80+ service vehicles strategically located, we provide rapid response across our entire coverage area."
        primaryCta={{ text: "Check Your Zip Code", link: "#zip-lookup" }}
        secondaryCta={{ text: "Call (614) 232-2222", link: "tel:6142322222" }}
        trustBadges={[
          { icon: <MapPin className="w-6 h-6" />, label: "Cities Served", value: "20+" },
          { icon: <Truck className="w-6 h-6" />, label: "Service Vehicles", value: "80+" },
          { icon: <Clock className="w-6 h-6" />, label: "Avg. Response", value: "< 2 Hours" },
          { icon: <Shield className="w-6 h-6" />, label: "Licensed in OH", value: "Full Coverage" },
        ]}
      />

      <section className="py-20 md:py-24" aria-labelledby="zip-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div id="zip-lookup" className="bg-white rounded-2xl border border-neutral-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">Check If We Serve Your Area</h2>
              <p className="text-neutral-600 mb-6">Enter your ZIP code to confirm service availability and see estimated response times.</p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Enter ZIP Code (e.g., 43215)"
                  className="flex-1 px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 text-lg"
                  pattern="[0-9]{5}"
                  maxLength={5}
                  required
                />
                <button type="submit" className="px-8 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors whitespace-nowrap">
                  Check Availability
                </button>
              </form>
              <p className="text-sm text-neutral-500 mt-4">Don't see your ZIP? Call us at (614) 232-2222 - we may still serve your area!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-neutral-50" aria-labelledby="cities-heading">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 id="cities-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Cities We Serve</h2>
            <p className="text-lg text-neutral-600">Click any city to view specific ZIP codes and services available.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {serviceCities.map((city) => (
              <motion.button
                key={city.city}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="text-left p-4 bg-white rounded-xl border border-neutral-200 hover:border-primary-300 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-neutral-900">{city.city}</h3>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <p className="text-sm text-neutral-500 mt-1">{city.zipCodes.length} ZIP codes</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24" aria-labelledby="map-heading">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 id="map-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Service Coverage Map</h2>
            <p className="text-lg text-neutral-600">Interactive map showing our coverage radius from our Columbus headquarters.</p>
          </div>

          <div className="aspect-video bg-neutral-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
              <Map className="w-24 h-24" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center">
              <p className="text-neutral-600">Interactive Service Area Map</p>
              <p className="text-sm text-neutral-500 mt-1">Coming Soon - View real-time technician locations and coverage</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-primary-600 text-white" aria-labelledby="commercial-heading">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="commercial-heading" className="text-3xl md:text-4xl font-bold mb-4">Commercial & Multi-Location Service</h2>
              <p className="text-lg text-primary-100 mb-6">We serve businesses across Central Ohio with dedicated commercial teams for HVAC, plumbing, and preventive maintenance.</p>
              <ul className="space-y-3 text-primary-100">
                {["Office Buildings & Campuses", "Restaurants & Food Service", "Multi-Family & Apartments", "Healthcare & Medical Offices", "Retail Centers", "Industrial & Manufacturing", "Schools & Universities", "Government & Municipal"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-square bg-white/10 rounded-2xl flex items-center justify-center">
              <Building2 className="w-32 h-32 text-white/30" />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Not Sure If You're Covered?"
        subtitle="Give us a call or enter your ZIP code above. We're expanding our service area all the time!"
        buttons={[
          { text: "Call (614) 232-2222", link: "tel:6142322222", variant: "primary" },
          { text: "Schedule Service", link: "/schedule", variant: "outline" },
        ]}
      />
    </>
  );
}

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";