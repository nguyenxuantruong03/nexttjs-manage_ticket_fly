import { z } from "zod";

export const FlySeatMapSchema = z.object({
  imageUrl: z.string().optional(),

  svgUrl: z.string().optional(),

  jsonLayout: z.unknown().optional(),
});

export type FlySeatMapFormValues = z.infer<typeof FlySeatMapSchema>;