import { z } from "zod";

export const BusExtraMapperSchema = z.object({
  // ======================================================
  // EXTRA
  // ======================================================

  extraId: z.string(),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean(),

  sortOrder: z.number(),
});

export type BusExtraMapperFormValues = z.infer<typeof BusExtraMapperSchema>;
