import { z } from "zod";

export const schema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().trim().min(1, "Policy name is required"),

  description: z.string().trim().nullable().optional(),

  icon: z.string().trim().nullable().optional(),
  // ======================================================
  // POLICY TYPE
  // ======================================================

  typeId: z.string().min(1, "Policy type is required"),

  // ======================================================
  // BOOKING TYPE
  // ======================================================

  bookingTypeIds: z.array(z.string()).default([]),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean(),

  sortOrder: z.number().int().min(0),
});

export type PolicyFormSchema = z.infer<typeof schema>;
