import { z } from "zod";

export const schema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().trim().min(1, "Extra name is required"),

  description: z.string().trim().nullable().optional(),

  icon: z.string().trim().nullable().optional(),

  bookingTypeId: z.string().min(1, "Booking type is required"),

  typeId: z.string().min(1, "Extra type is required"),

  // ======================================================
  // PRICING
  // ======================================================

  price: z.number().min(0, "Price must be greater than or equal to 0"),

  currencyId: z.string().min(1, "Currency is required"),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean(),

  sortOrder: z.number().int().min(0),
});

export type ExtraFormSchema = z.infer<typeof schema>;