import { z } from "zod";

export const AirportTransferVehicleImageSchema = z.object({
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

  alt: z.string().nullable(),
});

export type AirportTransferVehicleImageFormSchema = z.infer<
  typeof AirportTransferVehicleImageSchema
>;
