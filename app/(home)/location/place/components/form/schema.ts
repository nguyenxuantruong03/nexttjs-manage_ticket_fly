import { z } from "zod";

export const PlaceSchema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().trim().min(1, "Place name is required"),

  nativeName: z.string().trim().nullable().optional(),

  subtitle: z.string().trim().nullable().optional(),

  shortDescription: z.string().trim().nullable().optional(),

  description: z.string().trim().nullable().optional(),

  // ======================================================
  // LOCATION
  // ======================================================

  addressId: z.string().trim().nullable().optional(),

  latitude: z.coerce.number().nullable().optional(),

  longitude: z.coerce.number().nullable().optional(),

  // ======================================================
  // PLACE TYPE
  // ======================================================

  placeTypeId: z
    .string()
    .trim()
    .min(1, "Place type is required"),

  // ======================================================
  // SEARCH / FEATURE
  // ======================================================

  featured: z.boolean().default(false),

  searchable: z.boolean().default(true),

  searchPriority: z.coerce.number().int().default(0),

  // ======================================================
  // MEDIA
  // ======================================================

  thumbnail: z.string().trim().nullable().optional(),

  coverImage: z.string().trim().nullable().optional(),

  images: z.array(z.string().trim()).default([]),

  // ======================================================
  // TAGS
  // ======================================================

  tagIds: z.array(z.string()).default([]),

  // ======================================================
  // STATUS
  // ======================================================

  verified: z.boolean().default(false),

  active: z.boolean().default(true),
});

export type PlaceFormSchema = z.infer<typeof PlaceSchema>;