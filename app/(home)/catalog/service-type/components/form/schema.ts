import { z } from "zod";

export const schema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z
    .string()
    .trim()
    .min(1, "Service type name is required"),

  description: z
    .string()
    .trim()
    .nullable()
    .optional(),

  icon: z
    .string()
    .trim()
    .nullable()
    .optional(),

  // ======================================================
  // BOOKING TYPE
  // ======================================================

  bookingTypeId: z
    .string()
    .min(1, "Booking type is required"),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean(),

  sortOrder: z
    .number()
    .int()
    .min(0),
});

export type ServiceTypeFormSchema = z.infer<typeof schema>;