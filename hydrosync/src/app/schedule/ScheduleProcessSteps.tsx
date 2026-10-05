"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, Truck } from "lucide-react";

export function ScheduleProcessSteps() {
  const steps = [
    {
      step: "1",
      title: "Confirmation",
      description: "Receive immediate confirmation via text & email with your appointment details and technician info.",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      step: "2",
      title: "Reminder",
      description: "Get a reminder the day before with a 2-hour arrival window and technician tracking link.",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      step: "3",
      title: "Service",
      description: "Technician arrives on time, diagnoses the issue, explains options, and completes the work.",
      icon: <Truck className="w-6 h-6" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {steps.map((item) => (
        <motion.article
          key={item.step}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center p-6 bg-white rounded-2xl border border-neutral-200"
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
            <span className="text-2xl font-bold">{item.step}</span>
          </div>
          <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600">
            {item.icon}
          </div>
          <h3 className="text-xl font-bold text-neutral-900 mb-2">{item.title}</h3>
          <p className="text-neutral-600">{item.description}</p>
        </motion.article>
      ))}
    </div>
  );
}