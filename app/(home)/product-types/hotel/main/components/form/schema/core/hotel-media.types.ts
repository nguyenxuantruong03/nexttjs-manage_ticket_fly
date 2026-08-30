import { z } from "zod";

// ======================================================
// HOTEL MEDIA - MANAGE
// ======================================================

export const hotelMediaSchema = z.object({
  // ====================================================
  // MEDIA
  // ====================================================

  mediaId: z.string(),

  // ====================================================
  // CATEGORY
  // ====================================================

  categoryId: z.string().nullable().optional(),

  // ====================================================
  // DISPLAY
  // ====================================================

  isPrimary: z.boolean(),

  sortOrder: z.number().int(),
});

export type HotelMedia = z.infer<typeof hotelMediaSchema>;
