import { z } from "zod";

export const BusVehicleCapacitySchema = z.object({
  totalSeats: z.number(),

  sleeperBeds: z.number().optional(),

  cabinRooms: z.number().optional(),

  luggageCapacityKg: z.number().optional(),
});

export type BusVehicleCapacityFormValues = z.infer<
  typeof BusVehicleCapacitySchema
>;
