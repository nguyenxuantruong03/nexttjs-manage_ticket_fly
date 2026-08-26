import { z } from "zod";

export const FlyRouteSegmentSchema = z.object({
  segmentOrder: z.number(),

  estimatedDuration: z.number().optional(),

  distanceKm: z.number().optional(),
});

export type FlyRouteSegmentFormValues = z.infer<
  typeof FlyRouteSegmentSchema
>;