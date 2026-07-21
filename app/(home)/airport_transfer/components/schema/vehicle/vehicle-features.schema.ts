import { z } from "zod";

export const AirportTransferVehicleFeaturesSchema = z.object({
  airConditioner: z.boolean().optional(),

  wifi: z.boolean().optional(),

  usbCharger: z.boolean().optional(),

  bottledWater: z.boolean().optional(),

  childSeat: z.boolean().optional(),

  wheelchairAccessible: z.boolean().optional(),

  petFriendly: z.boolean().optional(),

  phoneCharger: z.boolean().optional(),

  music: z.boolean().optional(),

  gpsTracking: z.boolean().optional(),
});
