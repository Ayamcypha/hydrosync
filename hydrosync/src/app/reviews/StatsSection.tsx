"use client";

import { motion } from "framer-motion";
import { Star, Quote, CheckCircle, Clock } from "lucide-react";

export function StatsSection() {
  const stats = [
    { value: "4.8", label: "Google Rating", icon: <Star className="w-8 h-8" /> },
    { value: "4,200+", label: "Total Reviews", icon: <Quote className="w-8 h-8" /> },
    { value: "98%", label: "Satisfaction Rate", icon: <CheckCircle className="w-8 h-8" /> },
    { value: "< 2 hrs", label: "Avg. Response", icon: <Clock className="w-8 h-8" /> },
  ];

  return (
    <section className="py-20 md:py-24 bg-neutral-50" aria-labelledby="stats-heading">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="stats-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">By the Numbers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center p-6 bg-white rounded-2xl border border-neutral-200"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600">
                {stat.icon}
              </div>
              <p className="text-4xl font-bold text-neutral-900 mb-1">{stat.value}</p>
              <p className="text-neutral-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}