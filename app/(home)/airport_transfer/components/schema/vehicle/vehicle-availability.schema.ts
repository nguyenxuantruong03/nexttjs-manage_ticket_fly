import { z } from "zod";

export const AirportTransferVehicleAvailabilitySchema = z.object({
  startDate: z.string(),

  endDate: z.string(),

  available: z.boolean().default(true),

  note: z.string().optional(),
});
