import { z } from "zod";

export const AirportTransferCapacitySchema = z.object({

  // ======================================================
  // DAILY CAPACITY
  // ======================================================

  maxTripsPerDay: z.number().optional(),

  maxVehiclesPerDay: z.number().optional(),

  // ======================================================
  // OVERBOOKING
  // ======================================================

  overbookingAllowed: z.boolean(),

});

export type AirportTransferCapacityFormSchema =
  z.infer<typeof AirportTransferCapacitySchema>;