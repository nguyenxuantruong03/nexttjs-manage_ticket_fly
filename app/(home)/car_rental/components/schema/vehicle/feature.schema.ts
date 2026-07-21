import { z } from "zod";

export const CarRentalVehicleFeaturesSchema = z.object({
  vehicleId: z.string(),

  airConditioner: z.boolean().optional(),

  bluetooth: z.boolean().optional(),

  gps: z.boolean().optional(),

  usbCharger: z.boolean().optional(),

  wirelessCharging: z.boolean().optional(),

  appleCarPlay: z.boolean().optional(),

  androidAuto: z.boolean().optional(),

  cruiseControl: z.boolean().optional(),

  reverseCamera: z.boolean().optional(),

  parkingSensor: z.boolean().optional(),

  dashCamera: z.boolean().optional(),

  sunroof: z.boolean().optional(),

  leatherSeats: z.boolean().optional(),

  heatedSeats: z.boolean().optional(),

  childSeatAvailable: z.boolean().optional(),

  phoneHolder: z.boolean().optional(),

  helmetIncluded: z.boolean().optional(),

  raincoatIncluded: z.boolean().optional(),

  luggageRack: z.boolean().optional(),

  skiRack: z.boolean().optional(),
});
