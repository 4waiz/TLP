import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.email("Please enter a valid email address."),
  organization: z.string().optional(),
  phone: z.string().optional(),
  category: z.string().min(1, "Please choose an inquiry category."),
  message: z.string().min(20, "Please share a little more detail."),
});

export const eventRegistrationSchema = z.object({
  eventSlug: z.string().min(1),
  name: z.string().min(2, "Please enter your full name."),
  email: z.email("Please enter a valid email address."),
  organization: z.string().optional(),
  phone: z.string().optional(),
  seats: z.number().int().min(1).max(10),
  interestArea: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type EventRegistrationInput = z.infer<typeof eventRegistrationSchema>;
