import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name must be at most 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subject must be at least 3 characters").max(150, "Subject must be at most 150 characters").optional().or(z.literal("")),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000, "Message must be at most 5000 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
