import { z } from "zod";

export const AirportTransferExtraMapperSchema = z.object({
  // =====================================================
  // EXTRA
  // =====================================================

  extraId: z.string().min(1),

  // =====================================================
  // STATUS
  // =====================================================

  active: z.boolean().default(true),

  // =====================================================
  // SORTING
  // =====================================================

  sortOrder: z.coerce.number().default(0),
});

export type AirportTransferExtraMapperSchemaType = z.infer<
  typeof AirportTransferExtraMapperSchema
>;
