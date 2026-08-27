import { z } from "zod";

export const schema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().trim().min(1, "Fuel type name is required"),

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

export type FuelTypeFormSchema = z.infer<typeof schema>;
