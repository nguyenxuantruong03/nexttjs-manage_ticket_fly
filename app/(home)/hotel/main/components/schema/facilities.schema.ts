import { z } from "zod";

// ======================================================
// FACILITY CATEGORY
// ======================================================

export const facilityCategorySchema = z.object({
  name: z.string(),

  description: z.string().nullable().optional(),

  icon: z.string().nullable().optional(),

  active: z.boolean().default(true),

  sortOrder: z.number().int().default(0),
});

// ======================================================
// HOTEL FACILITY
// ======================================================

export const hotelFacilitySchema = z.object({
  // ======================================================
  // RELATION
  // ======================================================

  categoryId: z.string().nullable().optional(),

  // ======================================================
  // BASIC
  // ======================================================

  name: z.string(),

  description: z.string().nullable().optional(),

  icon: z.string().nullable().optional(),

  active: z.boolean().default(true),

  sortOrder: z.number().int().default(0),
});

// ======================================================
// HOTEL FACILITY MAPPER
// ======================================================

export const hotelFacilityMapperSchema = z.object({
  // ======================================================
  // RELATION
  // ======================================================

  hotelId: z.string(),

  facilityId: z.string(),
});

// ======================================================
// FACILITY MEDIA
// ======================================================

export const facilityMediaSchema = z.object({
  // ======================================================
  // RELATION
  // ======================================================

  facilityId: z.string(),

  mediaId: z.string(),
});

// ======================================================
// TYPES
// ======================================================

export type FacilityCategorySchema = z.infer<typeof facilityCategorySchema>;

export type HotelFacilitySchema = z.infer<typeof hotelFacilitySchema>;

export type HotelFacilityMapperSchema = z.infer<
  typeof hotelFacilityMapperSchema
>;

export type FacilityMediaSchema = z.infer<typeof facilityMediaSchema>;
