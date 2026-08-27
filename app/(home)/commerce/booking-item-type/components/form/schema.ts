import { z } from "zod";

export const schema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().trim().min(1, "Booking item type name is required"),

  description: z.string().trim().nullable().optional(),

  icon: z.string().trim().nullable().optional(),

  // ======================================================
  // BOOKING TYPE
  // ======================================================

  bookingTypeIds: z.array(z.string()).default([]),

  // ======================================================
  // SORTING
  // ======================================================

  sortOrder: z
    .number()
    .int()
    .min(0, "Sort order must be greater than or equal to 0"),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean(),
});

export type BookingItemTypeFormSchema = z.infer<typeof schema>;
