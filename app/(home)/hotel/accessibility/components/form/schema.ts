import { z } from "zod";

export const AccessibilitySchema = z.object({
  name: z.string().trim().min(1, "Name is required"),

  description: z.string().trim().nullable().optional(),
});

export type AccessibilityFormSchema = z.infer<typeof AccessibilitySchema>;
