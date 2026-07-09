"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import {
  occasions,
  reservationSchema,
  timeSlots,
  type ReservationFormValues,
  type ReservationInput,
} from "@/lib/validation/reservation";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";

const inputClasses =
  "w-full rounded-lg border border-charcoal-700 bg-charcoal-900 px-4 py-3 text-sm text-ivory-100 placeholder:text-stone-500 focus:border-gold-500 focus:outline-none [color-scheme:dark]";
const labelClasses = "mb-2 block text-xs font-medium uppercase tracking-widest text-stone-400";
const errorClasses = "mt-1.5 text-xs text-ember-500";

export function ReservationForm() {
  const [submittedData, setSubmittedData] = useState<ReservationInput | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const today = new Date().toISOString().split("T")[0];
  const reducedMotion = useReducedMotion();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ReservationFormValues, unknown, ReservationInput>({
    resolver: zodResolver(reservationSchema),
    defaultValues: { guests: 2, occasion: "No occasion" },
  });

  async function onSubmit(data: ReservationInput) {
    setSubmitError(null);
    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Request failed");
      setSubmittedData(data);
    } catch {
      setSubmitError("Something went wrong on our end. Please call us to book directly.");
    }
  }

  if (submittedData) {
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
          You&rsquo;re all set, {submittedData.name.split(" ")[0]}.
        </h3>
        <p className="max-w-md text-sm leading-relaxed text-stone-300">
          We&rsquo;ve received your request for {submittedData.guests}{" "}
          {submittedData.guests === 1 ? "guest" : "guests"} on{" "}
          <span className="text-gold-300">{submittedData.date}</span> at{" "}
          <span className="text-gold-300">{submittedData.time}</span>. A
          confirmation will be sent to {submittedData.email} shortly.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmittedData(null);
            reset();
          }}
          className="mt-2 text-xs font-medium uppercase tracking-widest text-gold-300 hover:text-gold-200"
        >
          Make another reservation
        </button>
      </motion.div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.form
        key="form"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="grid grid-cols-1 gap-6 sm:grid-cols-2"
      >
        <div className="sm:col-span-2">
          <label htmlFor="name" className={labelClasses}>
            Full Name
          </label>
          <input id="name" type="text" autoComplete="name" className={inputClasses} {...register("name")} />
          {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input id="email" type="email" autoComplete="email" className={inputClasses} {...register("email")} />
          {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone
          </label>
          <input id="phone" type="tel" autoComplete="tel" className={inputClasses} {...register("phone")} />
          {errors.phone && <p className={errorClasses}>{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="date" className={labelClasses}>
            Date
          </label>
          <input id="date" type="date" min={today} className={inputClasses} {...register("date")} />
          {errors.date && <p className={errorClasses}>{errors.date.message}</p>}
        </div>

        <div>
          <label htmlFor="time" className={labelClasses}>
            Time
          </label>
          <select id="time" defaultValue="" className={inputClasses} {...register("time")}>
            <option value="" disabled>
              Select a time
            </option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          {errors.time && <p className={errorClasses}>{errors.time.message}</p>}
        </div>

        <div>
          <label htmlFor="guests" className={labelClasses}>
            Guests
          </label>
          <input
            id="guests"
            type="number"
            min={1}
            max={20}
            className={inputClasses}
            {...register("guests", { valueAsNumber: true })}
          />
          {errors.guests && <p className={errorClasses}>{errors.guests.message}</p>}
        </div>

        <div>
          <label htmlFor="occasion" className={labelClasses}>
            Occasion
          </label>
          <select id="occasion" className={inputClasses} {...register("occasion")}>
            {occasions.map((occasion) => (
              <option key={occasion} value={occasion}>
                {occasion}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="specialRequests" className={labelClasses}>
            Special Requests
          </label>
          <textarea
            id="specialRequests"
            rows={4}
            placeholder="Allergies, seating preferences, celebrations we should know about..."
            className={cn(inputClasses, "resize-none")}
            {...register("specialRequests")}
          />
          {errors.specialRequests && <p className={errorClasses}>{errors.specialRequests.message}</p>}
        </div>

        <div className="sm:col-span-2">
          {submitError && <p className={cn(errorClasses, "mb-4")}>{submitError}</p>}
          <MagneticButton
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center rounded-full bg-gold-500 px-8 py-4 text-sm font-semibold tracking-wide text-charcoal-950 transition-colors hover:bg-gold-400 sm:w-auto"
          >
            {isSubmitting ? "Sending..." : "Request Reservation"}
          </MagneticButton>
        </div>
      </motion.form>
    </AnimatePresence>
  );
}
