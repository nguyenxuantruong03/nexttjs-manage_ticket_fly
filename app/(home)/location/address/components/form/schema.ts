// schema.ts

import { AddressPrecision } from "@/types/location/address";
import { z } from "zod";

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

  precision: z.nativeEnum(AddressPrecision).default(AddressPrecision.CITY),

  thumbnail: z.string().trim().optional(),
  coverImage: z.string().trim().optional(),
  bannerImage: z.string().trim().optional(),
  images: z.array(z.string().trim()).default([]),
  video: z.string().trim().optional(),

  verified: z.boolean().default(false),
  active: z.boolean().default(false),
});

export type AddressFormSchema = z.infer<typeof AddressSchema>;
