import { z } from "zod";

export const CarRentalVehicleFeaturesSchema = z.object({
  vehicleId: z.string(),

  airConditioner: z.boolean().nullable().optional(),

  bluetooth: z.boolean().nullable().optional(),

  gps: z.boolean().nullable().optional(),

  usbCharger: z.boolean().nullable().optional(),

  wirelessCharging: z.boolean().nullable().optional(),

  appleCarPlay: z.boolean().nullable().optional(),

  androidAuto: z.boolean().nullable().optional(),

  cruiseControl: z.boolean().nullable().optional(),

  reverseCamera: z.boolean().nullable().optional(),

  parkingSensor: z.boolean().nullable().optional(),

  dashCamera: z.boolean().nullable().optional(),

  sunroof: z.boolean().nullable().optional(),

  leatherSeats: z.boolean().nullable().optional(),

  heatedSeats: z.boolean().nullable().optional(),

  childSeatAvailable: z.boolean().nullable().optional(),

  phoneHolder: z.boolean().nullable().optional(),

  helmetIncluded: z.boolean().nullable().optional(),

  raincoatIncluded: z.boolean().nullable().optional(),

  luggageRack: z.boolean().nullable().optional(),

  skiRack: z.boolean().nullable().optional(),
});
