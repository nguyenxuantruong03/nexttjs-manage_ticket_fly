import { z } from "zod";

export const FlyTrackingSchema = z.object({
  latitude: z.number().optional(),

  longitude: z.number().optional(),

  altitudeFt: z.number().optional(),

  speedKmh: z.number().optional(),

  heading: z.number().optional(),

  lastUpdated: z.date().optional(),
});

export type FlyTrackingFormValues = z.infer<typeof FlyTrackingSchema>;
