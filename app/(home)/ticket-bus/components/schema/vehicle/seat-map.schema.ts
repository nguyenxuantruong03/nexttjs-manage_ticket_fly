import { z } from "zod";

export const BusSeatMapSchema = z.object({
  imageUrl: z.string().optional(),

  svgUrl: z.string().optional(),

  jsonLayout: z.unknown().optional(),
});

export type BusSeatMapFormValues = z.infer<typeof BusSeatMapSchema>;
