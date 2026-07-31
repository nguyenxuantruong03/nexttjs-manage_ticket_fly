import { z } from "zod";

import { CityStatus } from "@/types/bookings/location/city";

export const CitySchema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().trim().min(1, "City name is required"),

  nativeName: z.string().trim().optional(),

  code: z.string().trim().optional(),

  iataCode: z.string().trim().optional(),

  subtitle: z.string().trim().optional(),

  shortDescription: z.string().trim().optional(),

  description: z.string().trim().optional(),

  // ======================================================
  // COUNTRY
  // ======================================================

  countryId: z.string().trim().min(1, "Country is required"),

  administrativeArea: z.string().trim().optional(),

  region: z.string().trim().optional(),

  isCapital: z.boolean().default(false),

  // ======================================================
  // LOCATION
  // ======================================================

  latitude: z.coerce.number().optional(),

  longitude: z.coerce.number().optional(),

  elevation: z.coerce.number().optional(),

  timezoneId: z.string().trim().optional(),

  // ======================================================
  // SEARCH
  // ======================================================

  searchPriority: z.coerce.number().int().default(0),

  displayOrder: z.coerce.number().int().default(0),

  popularityScore: z.coerce.number().default(0),

  featured: z.boolean().default(false),

  popular: z.boolean().default(false),

  searchable: z.boolean().default(true),

  tagIds: z.array(z.string()).default([]),

  // ======================================================
  // MEDIA
  // ======================================================

  thumbnail: z.string().trim().optional(),

  coverImage: z.string().trim().optional(),

  bannerImage: z.string().trim().optional(),

  images: z.array(z.string().trim()).default([]),

  video: z.string().trim().optional(),

  // ======================================================
  // TRAVEL
  // ======================================================

  bestMonths: z.array(z.string().trim()).default([]),

  rainyMonths: z.array(z.string().trim()).default([]),

  // ======================================================
  // STATUS
  // ======================================================

  verified: z.boolean().default(false),

  status: z.nativeEnum(CityStatus).default(CityStatus.ACTIVE),
});

export type CityFormSchema = z.infer<typeof CitySchema>;
