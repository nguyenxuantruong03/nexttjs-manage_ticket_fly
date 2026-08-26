import { z } from "zod";

export const BusVehicleCapacitySchema = z.object({
  // ======================================================
  // CAPACITY
  // ======================================================

  totalSeats: z.number(),

  sleeperBeds: z.number().nullable().optional(),

  cabinRooms: z.number().nullable().optional(),

  luggageCapacityKg: z.number().nullable().optional(),
});

export type BusVehicleCapacityFormValues = z.infer<
  typeof BusVehicleCapacitySchema
>;
