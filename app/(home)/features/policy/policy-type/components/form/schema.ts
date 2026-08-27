import { z } from "zod";

export const schema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().trim().min(1, "Policy type name is required"),

  description: z.string().trim().nullable().optional(),

  icon: z.string().trim().nullable().optional(),

  bookingTypeIds: z.array(z.string()).default([]),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean(),

  sortOrder: z.number().int().min(0),
});

export type PolicyTypeFormSchema = z.infer<typeof schema>;
