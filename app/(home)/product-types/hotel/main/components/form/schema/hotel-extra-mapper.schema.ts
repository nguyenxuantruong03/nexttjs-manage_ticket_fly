import { z } from "zod";

// ======================================================
// HOTEL EXTRA MAPPER - MANAGE
// ======================================================

export const hotelExtraMapperSchema = z.object({
  // ====================================================
  // EXTRA
  // ====================================================

  extraId: z.string(),

  // ====================================================
  // STATUS
  // ====================================================

  active: z.boolean().default(true),

  sortOrder: z.number().int().default(0),
});

export type HotelExtraMapperInput = z.infer<typeof hotelExtraMapperSchema>;
