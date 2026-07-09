import { z } from "zod";

export const occasions = [
  "No occasion",
  "Birthday",
  "Anniversary",
  "Date Night",
  "Business Dinner",
  "Family Gathering",
  "Special Occasion",
] as const;

export const timeSlots = [
  "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
  "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
  "8:00 PM", "8:30 PM", "9:00 PM",
] as const;

export const reservationSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  email: z.email("Please enter a valid email address"),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(20),
  date: z.string().min(1, "Please select a date"),
  time: z.enum(timeSlots, { error: "Please select a time" }),
  guests: z.number().int().min(1, "At least 1 guest").max(20, "For parties over 20, please call us directly"),
  occasion: z.enum(occasions).default("No occasion"),
  specialRequests: z.string().trim().max(500).optional(),
});

// The schema applies a `.default()` to `occasion`, so the pre-validation
// form shape (input) and the post-validation result (output) differ.
export type ReservationFormValues = z.input<typeof reservationSchema>;
export type ReservationInput = z.output<typeof reservationSchema>;
