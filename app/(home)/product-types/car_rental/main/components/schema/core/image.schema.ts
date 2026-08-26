import { z } from "zod";

export const CarRentalMediaSchema = z.object({
  // =====================================================
  // MEDIA
  // =====================================================

  mediaId: z.string().min(1),

  // =====================================================
  // CATEGORY
  // =====================================================

  categoryId: z.string().nullable(),

  // =====================================================
  // DISPLAY
  // =====================================================

  isPrimary: z.boolean().default(false),

  sortOrder: z.coerce.number().default(0),
});

export type CarRentalMediaFormSchema = z.infer<typeof CarRentalMediaSchema>;
