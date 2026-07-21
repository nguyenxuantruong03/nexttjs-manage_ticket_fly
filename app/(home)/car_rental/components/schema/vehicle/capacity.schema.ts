import { z } from "zod";

export const CarRentalVehicleCapacitySchema = z.object({
  vehicleId: z.string(),

  seatCount: z.number().nullable().optional(),

  luggageCount: z.number().nullable().optional(),

  doorCount: z.number().nullable().optional(),
});
