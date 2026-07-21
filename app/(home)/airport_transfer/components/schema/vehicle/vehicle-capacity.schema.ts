import { z } from "zod";

export const AirportTransferVehicleCapacitySchema = z.object({
  passengerCount: z.number(),

  luggageCount: z.number().optional(),

  cabinBaggageCount: z.number().optional(),

  oversizedLuggage: z.number().optional(),
});
