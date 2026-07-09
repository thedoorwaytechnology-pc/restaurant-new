import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  email: z.email("Please enter a valid email address"),
  phone: z.string().trim().max(20).optional(),
  subject: z.string().trim().min(2, "Please add a subject").max(120),
  message: z.string().trim().min(10, "Please add a little more detail").max(1000),
});

export type ContactInput = z.infer<typeof contactSchema>;
