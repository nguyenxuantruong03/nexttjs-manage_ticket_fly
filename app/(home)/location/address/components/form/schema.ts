// schema.ts

import { z } from "zod";

import { AddressPrecision } from "@/types/bookings/location/address";

export const AddressSchema = z.object({
  // ======================================================
  // ADDRESS
  // ======================================================

  name: z.string().trim().nullable().optional(),

  houseNumber: z.string().trim().nullable().optional(),

  street: z.string().trim().nullable().optional(),

  wardId: z.string().trim().nullable().optional(),

  districtId: z.string().trim().nullable().optional(),

  postcode: z.string().trim().nullable().optional(),

  // ======================================================
  // LOCATION
  // ======================================================

  countryId: z.string().trim().optional(),
  cityId: z.string().trim().min(1, "City is required"),

  latitude: z.coerce.number().nullable().optional(),

  longitude: z.coerce.number().nullable().optional(),

  plusCode: z.string().trim().nullable().optional(),

  precision: z.nativeEnum(AddressPrecision).default(AddressPrecision.ADDRESS),
});

export type AddressFormSchema = z.infer<typeof AddressSchema>;
