import { z } from "zod";

export const BusVehicleFeaturesSchema = z.object({
  airConditioner: z.boolean().optional(),

  wifi: z.boolean().optional(),

  usbCharger: z.boolean().optional(),

  powerOutlet: z.boolean().optional(),

  readingLight: z.boolean().optional(),

  blanket: z.boolean().optional(),

  pillow: z.boolean().optional(),

  drinkingWater: z.boolean().optional(),

  snack: z.boolean().optional(),

  toilet: z.boolean().optional(),

  tv: z.boolean().optional(),

  entertainment: z.boolean().optional(),

  gpsTracking: z.boolean().optional(),

  recliningSeat: z.boolean().optional(),

  massageSeat: z.boolean().optional(),

  wheelchairAccessible: z.boolean().optional(),
});

export type BusVehicleFeaturesFormValues = z.infer<
  typeof BusVehicleFeaturesSchema
>;
