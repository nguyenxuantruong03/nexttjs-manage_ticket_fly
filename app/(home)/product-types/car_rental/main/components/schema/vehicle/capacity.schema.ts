import { z } from "zod";

export const CarRentalVehicleCapacitySchema = z.object({
  // ======================================================
  // VEHICLE
  // ======================================================

  vehicleId: z.string().min(1),

  // ======================================================
  // CAPACITY
  // ======================================================

  seatCount: z.number().nullable().optional(),

  luggageCount: z.number().nullable().optional(),

  doorCount: z.number().nullable().optional(),
});

export type CarRentalVehicleCapacityFormSchema = z.infer<
  typeof CarRentalVehicleCapacitySchema
>;
