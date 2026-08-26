import { z } from "zod";

export const BusSeatMapSchema = z.object({
  // ======================================================
  // SEAT MAP
  // ======================================================

  imageUrl: z.string().nullable().optional(),

  svgUrl: z.string().nullable().optional(),

  jsonLayout: z.unknown().nullable().optional(),
});

export type BusSeatMapFormValues = z.infer<typeof BusSeatMapSchema>;
