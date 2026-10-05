"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui";
import { Input, Textarea, Select, Checkbox } from "@/components/ui";
import { Mail, Phone, User, MessageSquare, CheckCircle, AlertCircle, Loader2, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const subjectOptions = [
  { value: "", label: "Select a topic" },
  { value: "general", label: "General Inquiry" },
  { value: "service-question", label: "Service Question" },
  { value: "billing", label: "Billing & Payments" },
  { value: "scheduling", label: "Scheduling & Appointments" },
  { value: "emergency", label: "Emergency Follow-up" },
  { value: "careers", label: "Careers & Jobs" },
  { value: "partnership", label: "Partnership Opportunities" },
  { value: "feedback", label: "Feedback & Complaints" },
  { value: "other", label: "Other" },
];

const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(20, "Message must be at least 20 characters"),
  marketingConsent: z.boolean().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  onSuccess?: (data: ContactFormData) => void;
  className?: string;
}

export function ContactForm({ onSuccess, className }: ContactFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      marketingConsent: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitting(true);
    setSubmitStatus("idle");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus("success");
      onSuccess?.(data);
      reset();
    } catch {
      setSubmitStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-6", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
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
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Message Sent Successfully!</h3>
            <p className="text-neutral-600 mb-6 max-w-md mx-auto">
              Thank you for reaching out! We'll get back to you within 24 hours.
            </p>
            <Button onClick={() => setSubmitStatus("idle")} variant="outline">
              Send Another Message
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
              We couldn't send your message. Please try again or call us directly at (614) 232-2222.
            </p>
            <Button onClick={() => setSubmitStatus("idle")}>Try Again</Button>
          </motion.div>
        )}

        {submitStatus === "idle" && (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
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
            <Select
              label="Subject *"
              error={errors.subject?.message}
              options={subjectOptions}
              {...register("subject")}
            />
            <Textarea
              label="Message *"
              placeholder="Please describe your inquiry in detail..."
              rows={5}
              error={errors.message?.message}
              {...register("message")}
            />
            <Checkbox
              label="I agree to receive marketing communications from HydroSync"
              {...register("marketingConsent")}
            />
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-200">
              <div className="flex items-center gap-3 text-sm text-neutral-500">
                <Shield className="w-5 h-5 text-green-500" />
                <span>Secure & confidential • We never share your information</span>
              </div>
              <Button type="submit" loading={submitting} size="lg">
                {submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <MessageSquare className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  );
}