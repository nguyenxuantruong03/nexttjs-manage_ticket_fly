import { z } from "zod";

// ======================================================
// HOTEL TYPE - MANAGE
// ======================================================

export const hotelTypeSchema = z.object({
  name: z.string(),
  description: z.string().nullable().optional(),
  icon: z.string().nullable().optional(),
  active: z.boolean(),
  sortOrder: z.number().int(),
});

export type HotelType = z.infer<typeof hotelTypeSchema>;

// ======================================================
// HOTEL INFORMATION - MANAGE
// ======================================================

export const hotelInformationSchema = z.object({
  // ====================================================
  // ADDRESS
  // ====================================================

  addressId: z.string(),

  // ====================================================
  // PROVIDER
  // ====================================================

  providerBookingId: z.string(),

  // ====================================================
  // LOCATION / UNIT
  // ====================================================

  tower: z.string().nullable().optional(),

  floor: z.number().int().nullable().optional(),

  unitNumber: z.string().nullable().optional(),
});

export type HotelInformation = z.infer<typeof hotelInformationSchema>;
