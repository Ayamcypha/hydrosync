"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui";
import { Input, Select, Textarea, Checkbox } from "@/components/ui";
import { Calendar, Clock, MapPin, User, Mail, Phone, Home, Truck, CheckCircle, AlertCircle, Loader2, Shield, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const serviceTypes = [
  { value: "", label: "Select a service type" },
  { value: "hvac-heating", label: "Heating Services" },
  { value: "hvac-cooling", label: "Cooling Services" },
  { value: "hvac-air-quality", label: "Indoor Air Quality" },
  { value: "sewer-drains", label: "Sewer & Drains" },
  { value: "plumbing-emergency", label: "Emergency Plumbing" },
  { value: "plumbing-kitchen", label: "Kitchen Plumbing" },
  { value: "plumbing-water-treatment", label: "Water Treatment" },
  { value: "plumbing-water-line", label: "Water Line Services" },
  { value: "plumbing-gas-line", label: "Gas Line Services" },
  { value: "plumbing-sump-pump", label: "Sump Pumps" },
  { value: "plumbing-water-heater", label: "Water Heaters" },
  { value: "commercial-hvac", label: "Commercial HVAC" },
  { value: "commercial-plumbing", label: "Commercial Plumbing" },
];

const serviceDetails: Record<string, { value: string; label: string }[]> = {
  "hvac-heating": [
    { value: "", label: "Select a service" },
    { value: "furnace-install", label: "Furnace Installation" },
    { value: "furnace-replace", label: "Furnace Replacement" },
    { value: "furnace-repair", label: "Furnace Repair" },
    { value: "furnace-maintenance", label: "Furnace Maintenance" },
    { value: "ductless-heating", label: "Ductless Heating" },
    { value: "geothermal-heating", label: "Geothermal Heating" },
    { value: "boiler-install", label: "Boiler Installation" },
    { value: "boiler-repair", label: "Boiler Repair" },
    { value: "heat-pump-repair", label: "Heat Pump Repair" },
    { value: "heat-pump-replace", label: "Heat Pump Replacement" },
    { value: "heat-pump-maintenance", label: "Heat Pump Maintenance" },
  ],
  "hvac-cooling": [
    { value: "", label: "Select a service" },
    { value: "ac-install", label: "AC Installation/Replacement" },
    { value: "ac-maintenance", label: "AC Maintenance" },
    { value: "ac-repair", label: "AC Repair" },
    { value: "ductless-ac", label: "Ductless Air Conditioning" },
    { value: "geothermal-cooling", label: "Geothermal Cooling" },
    { value: "heat-pump-install", label: "Heat Pump Installation" },
  ],
  "hvac-air-quality": [
    { value: "", label: "Select a service" },
    { value: "co-alarm", label: "Carbon Monoxide Alarm Installation" },
    { value: "smart-thermostat", label: "Smart Thermostat Installation" },
    { value: "uv-lights", label: "UV Germicidal Lights" },
    { value: "ventilation", label: "Ventilation Install/Repair" },
    { value: "humidifier", label: "Whole-House Humidifier" },
  ],
  "sewer-drains": [
    { value: "", label: "Select a service" },
    { value: "camera-inspection", label: "Camera Line Inspection" },
    { value: "catch-basins", label: "Catch Basins Services" },
    { value: "toilet-repair", label: "Clogged Toilet Repairs" },
    { value: "drain-cleaning", label: "Drain Cleaning" },
    { value: "ejector-pumps", label: "Ejector Pumps" },
    { value: "hydrojetting", label: "Hydrojetting" },
    { value: "sewer-line", label: "Sewer Line Services" },
    { value: "pipe-lining", label: "Pipe Lining & Patching" },
  ],
  "plumbing-emergency": [
    { value: "", label: "Select a service" },
    { value: "burst-pipe", label: "Burst Pipe Repair" },
    { value: "emergency-drain", label: "Emergency Drain Cleaning" },
    { value: "gas-leak", label: "Gas Leak Response" },
  ],
  "plumbing-kitchen": [
    { value: "", label: "Select a service" },
    { value: "fixture-repair", label: "Fixture Repair & Replacement" },
    { value: "disposal", label: "Garbage Disposal" },
    { value: "water-line-kitchen", label: "Water Line Installation" },
  ],
  "plumbing-water-treatment": [
    { value: "", label: "Select a service" },
    { value: "water-softener", label: "Water Softeners" },
    { value: "water-filtration", label: "Water Filtration Systems" },
  ],
  "plumbing-water-line": [
    { value: "", label: "Select a service" },
    { value: "repiping", label: "Repiping" },
    { value: "water-line-install", label: "Water Line Installation" },
    { value: "water-line-repair", label: "Water Line Repair" },
  ],
  "plumbing-gas-line": [
    { value: "", label: "Select a service" },
    { value: "gas-install", label: "Gas Line Installation" },
    { value: "gas-repair", label: "Gas Line Repair" },
    { value: "gas-detection", label: "Gas Leak Detection" },
  ],
  "plumbing-sump-pump": [
    { value: "", label: "Select a service" },
    { value: "sump-install", label: "Sump Pump Installation" },
    { value: "sump-repair", label: "Sump Pump Repair" },
    { value: "sump-maintenance", label: "Sump Pump Maintenance" },
  ],
  "plumbing-water-heater": [
    { value: "", label: "Select a service" },
    { value: "tank-heater", label: "Storage Tank Water Heater" },
    { value: "tankless-heater", label: "Tankless Water Heaters" },
    { value: "heater-repair", label: "Water Heater Repair" },
  ],
  "commercial-hvac": [
    { value: "", label: "Select a service" },
    { value: "comm-hvac-install", label: "Commercial HVAC Installation" },
    { value: "comm-hvac-maintenance", label: "Commercial HVAC Maintenance" },
    { value: "comm-hvac-repair", label: "Commercial HVAC Repair" },
    { value: "comm-air-purification", label: "Commercial Air Purification" },
  ],
  "commercial-plumbing": [
    { value: "", label: "Select a service" },
    { value: "comm-fixture", label: "Fixture Repair & Replacement" },
    { value: "grease-trap", label: "Grease Trap Installation" },
  ],
};

const timeSlots = [
  { value: "", label: "Select a time" },
  { value: "8am-10am", label: "8:00 AM - 10:00 AM" },
  { value: "10am-12pm", label: "10:00 AM - 12:00 PM" },
  { value: "12pm-2pm", label: "12:00 PM - 2:00 PM" },
  { value: "2pm-4pm", label: "2:00 PM - 4:00 PM" },
  { value: "4pm-6pm", label: "4:00 PM - 6:00 PM" },
  { value: "emergency", label: "Emergency - ASAP" },
];

const bookingSchema = z.object({
  serviceType: z.string().min(1, "Please select a service type"),
  serviceDetail: z.string().optional(),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  address: z.string().min(5, "Please enter your street address"),
  city: z.string().min(2, "Please enter your city"),
  zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, "Please enter a valid ZIP code"),
  notes: z.string().optional(),
  marketingConsent: z.boolean().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  onSuccess?: (data: BookingFormData) => void;
  className?: string;
}

export function BookingForm({ onSuccess, className }: BookingFormProps) {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      marketingConsent: false,
    },
  });

  const selectedServiceType = watch("serviceType");
  const availableDetails = serviceDetails[selectedServiceType] || [{ value: "", label: "Select a service type first" }];

  const nextStep = () => {
    if (step === 1) {
      const serviceErrors = [];
      if (!watch("serviceType")) serviceErrors.push("serviceType");
      if (availableDetails.length > 1 && !watch("serviceDetail")) serviceErrors.push("serviceDetail");
      if (!watch("preferredDate")) serviceErrors.push("preferredDate");
      if (!watch("preferredTime")) serviceErrors.push("preferredTime");

      if (serviceErrors.length > 0) {
        serviceErrors.forEach((field) => {
          // Trigger validation for each field
        });
        return;
      }
    }
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = async (data: BookingFormData) => {
    setSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In a real app, you would send to your backend here
      // const response = await fetch('/api/book', { method: 'POST', body: JSON.stringify(data) });

      setSubmitStatus("success");
      onSuccess?.(data);
      reset();
      setStep(1);
    } catch {
      setSubmitStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  const steps = [
    { number: 1, label: "Service Details", icon: <Truck className="w-5 h-5" /> },
    { number: 2, label: "Contact Info", icon: <User className="w-5 h-5" /> },
    { number: 3, label: "Location", icon: <MapPin className="w-5 h-5" /> },
  ];

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-8", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2 mb-4" role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={3}>
        {steps.map((s, index) => (
          <motion.div key={s.number} layout>
            <div
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-full font-semibold text-sm transition-all duration-300",
                index + 1 < step
                  ? "bg-primary-600 text-white"
                  : index + 1 === step
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-600/25"
                  : "bg-neutral-200 text-neutral-500"
              )}
            >
              {index + 1 < step ? <CheckCircle className="w-5 h-5" /> : s.icon}
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "flex-1 h-1.5 mx-2 rounded transition-colors duration-300",
                  index + 1 < step ? "bg-primary-600" : "bg-neutral-200"
                )}
              />
            )}
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {step === 1 && (
            <fieldset className="space-y-6">
              <legend className="text-xl font-bold text-neutral-900">What service do you need?</legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Select
                  label="Service Category *"
                  error={errors.serviceType?.message}
                  options={serviceTypes}
                  {...register("serviceType")}
                />
                <Select
                  label="Specific Service"
                  error={errors.serviceDetail?.message}
                  options={availableDetails}
                  disabled={availableDetails.length <= 1}
                  {...register("serviceDetail")}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Preferred Date *"
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  error={errors.preferredDate?.message}
                  iconLeft={<Calendar className="w-5 h-5" />}
                  {...register("preferredDate")}
                />
                <Select
                  label="Preferred Time *"
                  error={errors.preferredTime?.message}
                  options={timeSlots}
                  {...register("preferredTime")}
                />
              </div>
            </fieldset>
          )}

          {step === 2 && (
            <fieldset className="space-y-6">
              <legend className="text-xl font-bold text-neutral-900">Your Contact Information</legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="First Name *"
                  placeholder="John"
                  error={errors.firstName?.message}
                  iconLeft={<User className="w-5 h-5" />}
                  {...register("firstName")}
                />
                <Input
                  label="Last Name *"
                  placeholder="Doe"
                  error={errors.lastName?.message}
                  {...register("lastName")}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Email Address *"
                  type="email"
                  placeholder="john@example.com"
                  error={errors.email?.message}
                  iconLeft={<Mail className="w-5 h-5" />}
                  {...register("email")}
                />
                <Input
                  label="Phone Number *"
                  type="tel"
                  placeholder="(614) 555-0123"
                  error={errors.phone?.message}
                  iconLeft={<Phone className="w-5 h-5" />}
                  {...register("phone")}
                />
              </div>
            </fieldset>
          )}

          {step === 3 && (
            <fieldset className="space-y-6">
              <legend className="text-xl font-bold text-neutral-900">Service Location</legend>
              <Input
                label="Street Address *"
                placeholder="123 Main Street"
                error={errors.address?.message}
                iconLeft={<Home className="w-5 h-5" />}
                {...register("address")}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="City *"
                  placeholder="Columbus"
                  error={errors.city?.message}
                  {...register("city")}
                />
                <Input
                  label="ZIP Code *"
                  placeholder="43215"
                  error={errors.zipCode?.message}
                  {...register("zipCode")}
                />
              </div>
              <Textarea
                label="Additional Notes"
                placeholder="Any details about the issue, access instructions, etc."
                rows={3}
                {...register("notes")}
              />
              <Checkbox
                label="I agree to receive marketing communications from HydroSync"
                {...register("marketingConsent")}
              />
            </fieldset>
          )}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-12"
          >
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Appointment Request Submitted!</h3>
            <p className="text-neutral-600 mb-6 max-w-md mx-auto">
              Thank you! Our team will contact you within 15 minutes to confirm your appointment.
            </p>
            <Button onClick={() => setSubmitStatus("idle")} variant="outline">
              Schedule Another Appointment
            </Button>
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-12"
          >
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
              <AlertCircle className="w-10 h-10 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Something Went Wrong</h3>
            <p className="text-neutral-600 mb-6 max-w-md mx-auto">
              We couldn't submit your request. Please try again or call us directly at (614) 232-2222.
            </p>
            <Button onClick={() => setSubmitStatus("idle")}>Try Again</Button>
          </motion.div>
        )}
      </AnimatePresence>

      {submitStatus === "idle" && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-200">
          <div className="flex items-center gap-3 text-sm text-neutral-500">
            <Shield className="w-5 h-5 text-green-500" />
            <span>Secure & confidential • No spam • Cancel anytime</span>
          </div>
          <div className="flex gap-3">
            {step > 1 && (
              <Button type="button" variant="outline" onClick={prevStep}>
                Back
              </Button>
            )}
            {step < 3 ? (
              <Button type="button" onClick={nextStep}>
                Continue
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            ) : (
              <Button type="submit" loading={submitting} size="lg">
                {submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Request
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      )}
    </motion.form>
  );
}

const prevStep = () => {
  // This is a placeholder - the actual prevStep is defined in the component
};