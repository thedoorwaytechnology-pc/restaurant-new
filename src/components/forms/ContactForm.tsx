"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { contactSchema, type ContactInput } from "@/lib/validation/contact";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";

const inputClasses =
  "w-full rounded-lg border border-charcoal-700 bg-charcoal-900 px-4 py-3 text-sm text-ivory-100 placeholder:text-stone-500 focus:border-gold-500 focus:outline-none";
const labelClasses = "mb-2 block text-xs font-medium uppercase tracking-widest text-stone-400";
const errorClasses = "mt-1.5 text-xs text-ember-500";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactInput) {
    setSubmitError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong on our end. Please call or email us directly.");
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reducedMotion ? 0.05 : 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center gap-5 rounded-2xl border border-gold-500/30 bg-charcoal-900/60 p-10 text-center"
      >
        <motion.div
          initial={reducedMotion ? false : { scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: reducedMotion ? 0 : 0.15, duration: reducedMotion ? 0.05 : 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <CheckCircle2 className="h-12 w-12 text-gold-400" aria-hidden="true" />
        </motion.div>
        <h3 className="font-display text-3xl font-light text-ivory-100">
          Message sent.
        </h3>
        <p className="max-w-md text-sm leading-relaxed text-stone-300">
          Thanks for reaching out — our team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            reset();
          }}
          className="mt-2 text-xs font-medium uppercase tracking-widest text-gold-300 hover:text-gold-200"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div>
        <label htmlFor="contact-name" className={labelClasses}>
          Full Name
        </label>
        <input id="contact-name" type="text" autoComplete="name" className={inputClasses} {...register("name")} />
        {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClasses}>
          Email
        </label>
        <input id="contact-email" type="email" autoComplete="email" className={inputClasses} {...register("email")} />
        {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="contact-phone" className={labelClasses}>
          Phone <span className="normal-case text-stone-400">(optional)</span>
        </label>
        <input id="contact-phone" type="tel" autoComplete="tel" className={inputClasses} {...register("phone")} />
        {errors.phone && <p className={errorClasses}>{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="contact-subject" className={labelClasses}>
          Subject
        </label>
        <input id="contact-subject" type="text" className={inputClasses} {...register("subject")} />
        {errors.subject && <p className={errorClasses}>{errors.subject.message}</p>}
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="contact-message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="contact-message"
          rows={5}
          className={cn(inputClasses, "resize-none")}
          {...register("message")}
        />
        {errors.message && <p className={errorClasses}>{errors.message.message}</p>}
      </div>

      <div className="sm:col-span-2">
        {submitError && <p className={cn(errorClasses, "mb-4")}>{submitError}</p>}
        <MagneticButton
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center rounded-full bg-gold-500 px-8 py-4 text-sm font-semibold tracking-wide text-charcoal-950 transition-colors hover:bg-gold-400 sm:w-auto"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </MagneticButton>
      </div>
    </form>
  );
}
