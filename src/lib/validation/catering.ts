import { z } from "zod";

export const eventTypes = [
  "Wedding",
  "Corporate Event",
  "Birthday Party",
  "Family Gathering",
  "Festival",
  "Private Event",
  "Other",
] as const;

export const serviceTypes = ["Delivery", "Pickup", "Not sure yet"] as const;

export const cateringSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  email: z.email("Please enter a valid email address"),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(20),
  eventDate: z.string().min(1, "Please select a date"),
  eventTime: z.string().optional(),
  eventType: z.enum(eventTypes).default("Private Event"),
  guestCount: z.number().int().min(10, "Catering minimum is 10 guests").max(2000),
  serviceType: z.enum(serviceTypes).default("Not sure yet"),
  details: z.string().trim().max(800).optional(),
});

// The schema applies `.default()` to a couple of fields, so the
// pre-validation form shape (input) and the post-validation result
// (output) differ.
export type CateringFormValues = z.input<typeof cateringSchema>;
export type CateringInput = z.output<typeof cateringSchema>;
