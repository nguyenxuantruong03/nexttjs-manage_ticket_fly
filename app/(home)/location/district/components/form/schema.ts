// schema.ts

import { z } from "zod";

export const DistrictSchema = z.object({
  // ======================================================
  // RELATION
  // ======================================================

  cityId: z.string().trim().min(1, "City is required"),

  // ======================================================
  // BASIC
  // ======================================================

  code: z.string().trim().nullable().optional(),

  name: z.string().trim().min(1, "District name is required"),

  nativeName: z.string().trim().nullable().optional(),

  // ======================================================
  // LOCATION
  // ======================================================

  latitude: z.coerce.number().nullable().optional(),

  longitude: z.coerce.number().nullable().optional(),

  searchable: z.boolean().default(true),
  tagIds: z.array(z.string()).default([]),
  searchPriority: z.coerce.number().int().default(0),

  thumbnail: z.string().trim().optional(),
  coverImage: z.string().trim().optional(),
  bannerImage: z.string().trim().optional(),
  images: z.array(z.string().trim()).default([]),
  video: z.string().trim().optional(),

  verified: z.boolean().default(false),
  active: z.boolean().default(false),
});

export type DistrictFormSchema = z.infer<typeof DistrictSchema>;
