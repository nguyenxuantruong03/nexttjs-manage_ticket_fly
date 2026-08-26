import { z } from "zod";


export const CarRentalExtraMapperSchema = z.object({

  extraId: z.string(),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean(),

  sortOrder: z.number(),

});

export type CarRentalExtraMapperSchemaType = z.infer<
  typeof CarRentalExtraMapperSchema
>;