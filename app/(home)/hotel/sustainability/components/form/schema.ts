import { z } from "zod";

export const SustainabilitySchema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().trim().min(1, "Name is required"),

  description: z.string().trim().nullable().optional(),
});

export type SustainabilityFormSchema = z.infer<
  typeof SustainabilitySchema
>;