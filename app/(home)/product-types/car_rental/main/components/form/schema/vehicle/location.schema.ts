import { z } from "zod";

export const CarRentalVehicleLocationSchema = z.object({
  addressId: z.string().nullable().optional(),
});
