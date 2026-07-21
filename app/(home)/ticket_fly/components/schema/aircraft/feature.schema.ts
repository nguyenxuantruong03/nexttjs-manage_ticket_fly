import { z } from "zod";

export const FlyAircraftFeaturesSchema = z.object({
  wifi: z.boolean().optional(),

  powerOutlet: z.boolean().optional(),

  usbPort: z.boolean().optional(),

  entertainment: z.boolean().optional(),

  liveTV: z.boolean().optional(),

  recliningSeat: z.boolean().optional(),

  lieFlatSeat: z.boolean().optional(),

  mealService: z.boolean().optional(),

  alcoholService: z.boolean().optional(),

  blanket: z.boolean().optional(),

  pillow: z.boolean().optional(),
});

export type FlyAircraftFeaturesFormValues = z.infer<
  typeof FlyAircraftFeaturesSchema
>;
