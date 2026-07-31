import { z } from "zod";

// ======================================================
// ROOM MEDIA CATEGORY
// ======================================================

export const roomMediaCategorySchema = z.object({
  name: z.string(),

  description: z.string().nullable().optional(),

  icon: z.string().nullable().optional(),

  active: z.boolean().default(true),

  sortOrder: z.number().int().default(0),
});

// ======================================================
// ROOM MEDIA
// ======================================================

export const roomMediaSchema = z.object({
  // ======================================================
  // RELATION
  // ======================================================

  roomTypeId: z.string(),

  mediaId: z.string(),

  categoryId: z.string().nullable().optional(),

  // ======================================================
  // BASIC
  // ======================================================

  isPrimary: z.boolean().default(false),

  sortOrder: z.number().int().default(0),
});

// ======================================================
// TYPES
// ======================================================

export type RoomMediaCategorySchema = z.infer<typeof roomMediaCategorySchema>;

export type RoomMediaSchema = z.infer<typeof roomMediaSchema>;
