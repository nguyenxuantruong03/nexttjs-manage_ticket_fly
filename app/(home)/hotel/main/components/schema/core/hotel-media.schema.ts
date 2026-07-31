import { z } from "zod";

// ======================================================
// HOTEL MEDIA CATEGORY
// ======================================================

export const hotelMediaCategorySchema = z.object({
  name: z.string(),

  description: z.string().nullable().optional(),

  icon: z.string().nullable().optional(),

  sortOrder: z.number().int().default(0),

  active: z.boolean().default(true),
});

// ======================================================
// HOTEL MEDIA
// ======================================================

export const hotelMediaSchema = z.object({
  // ======================================================
  // RELATION
  // ======================================================

  hotelId: z.string(),

  mediaAssetId: z.string(),

  categoryId: z.string().nullable().optional(),

  // ======================================================
  // BASIC
  // ======================================================

  isPrimary: z.boolean().default(false),

  sortOrder: z.number().int().default(0),

  category: hotelMediaCategorySchema.nullable().optional(),
});

// ======================================================
// TYPE
// ======================================================

export type HotelMediaCategorySchema = z.infer<typeof hotelMediaCategorySchema>;

export type HotelMediaSchema = z.infer<typeof hotelMediaSchema>;
