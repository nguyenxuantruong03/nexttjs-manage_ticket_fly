import { z } from "zod";

export const RatePlanTypeSchema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().trim().min(1, "Name is required"),

  description: z.string().trim().nullable().optional(),

  icon: z.string().trim().nullable().optional(),

  // ======================================================
  // SETTINGS
  // ======================================================

  active: z.boolean().default(true),

  sortOrder: z.coerce.number().int().min(0).default(0),
});

export type RatePlanTypeFormSchema = z.infer<typeof RatePlanTypeSchema>;
