import { z } from "zod";

import { PackageDurationType } from "@/types/common/commerce/package/package.type";

export const schema = z.object({
  // ======================================================
  // BOOKING TYPE
  // ======================================================

  bookingTypeId: z.string().min(1, "Booking type is required"),

  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().trim().min(1, "Package name is required"),

  description: z.string().trim().nullable().optional(),

  // ======================================================
  // DURATION
  // ======================================================

  duration: z.number().int().positive().nullable().optional(),

  durationType: z.nativeEnum(PackageDurationType).nullable().optional(),

  // ======================================================
  // CAPACITY
  // ======================================================

  maxGuests: z.number().int().positive().nullable().optional(),

  // ======================================================
  // BASE PRICE
  // ======================================================

  price: z.number().min(0, "Price must be greater than or equal to 0"),

  currencyId: z.string().min(1, "Currency is required"),

  // ======================================================
  // CONTENT
  // ======================================================

  includedItems: z.array(z.string().trim()).default([]),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean(),

  sortOrder: z.number().int().min(0),
});

export type PackageFormSchema = z.infer<typeof schema>;
