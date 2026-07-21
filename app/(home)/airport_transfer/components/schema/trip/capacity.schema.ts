import { z } from "zod";

export const AirportTransferCapacitySchema = z.object({
  maxTripsPerDay: z.number().optional(),

  maxVehiclesPerDay: z.number().optional(),

  overbookingAllowed: z.boolean().default(false),
});
