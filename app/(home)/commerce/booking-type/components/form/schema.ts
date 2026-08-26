import { z } from "zod";

export const schema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  code: z.string().trim().min(1, "Booking type code is required"),

  name: z.string().trim().min(1, "Booking type name is required"),

  description: z.string().trim().nullable().optional(),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean(),

  sortOrder: z.number().int().min(0),
});

export type BookingTypeFormSchema = z.infer<typeof schema>;