import { z } from "zod";

// ======================================================
// BUS IMAGE - MANAGE
// ======================================================

export const BusImageSchema = z.object({
  // ====================================================
  // MEDIA
  // ====================================================

  mediaId: z.string(),

  categoryId: z.string().nullable().optional(),

  alt: z.string().trim().nullable().optional(),

  // ====================================================
  // DISPLAY
  // ====================================================

  isPrimary: z.boolean().default(false),

  sortOrder: z.number().int().default(0),
});

export type BusImageFormValues = z.infer<typeof BusImageSchema>;
