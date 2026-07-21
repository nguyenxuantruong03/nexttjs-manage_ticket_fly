import { z } from "zod";

export const AirportTransferVehicleSpecificationSchema = z.object({
  engineSizeCc: z.number().optional(),

  fuelCapacity: z.number().optional(),

  mileageKm: z.number().optional(),

  vin: z.string().optional(),
});
