import { z } from "zod";

export const CarRentalVehicleLocationSchema = z.object({
  vehicleId: z.string(),

  addressId: z.string().nullable().optional(),
});
