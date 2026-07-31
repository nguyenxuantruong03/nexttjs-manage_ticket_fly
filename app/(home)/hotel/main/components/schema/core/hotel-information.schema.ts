import { z } from "zod";

// ======================================================
// HOTEL TYPE
// ======================================================

export const hotelTypeSchema = z.object({

  name: z.string(),

  description: z.string().nullable().optional(),

  icon: z.string().nullable().optional(),

  active: z.boolean(),

  sortOrder: z.number().int(),
});

// ======================================================
// HOTEL INFORMATION
// ======================================================

export const hotelInformationSchema = z.object({
  hotelId: z.string(),

  // ======================================================
  // ADDRESS
  // ======================================================

  addressId: z.string(),

  // ======================================================
  // PROVIDER
  // ======================================================

  providerBookingId: z.string(),

  // ======================================================
  // BASIC
  // ======================================================

  hotelTypeId: z.string().nullable().optional(),

  hotelType: hotelTypeSchema.nullable().optional(),

  tower: z.string().nullable().optional(),

  floor: z.number().int().nullable().optional(),

  unitNumber: z.string().nullable().optional(),
});

export type HotelType = z.infer<typeof hotelTypeSchema>;

export type HotelInformation = z.infer<typeof hotelInformationSchema>;
