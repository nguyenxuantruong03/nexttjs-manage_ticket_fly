import { z } from "zod";

export const schema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().trim().min(1, "Extra fee type name is required"),

  description: z.string().trim().nullable().optional(),

  icon: z.string().trim().nullable().optional(),

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

export type ExtraFeeTypeFormSchema = z.infer<typeof schema>;
