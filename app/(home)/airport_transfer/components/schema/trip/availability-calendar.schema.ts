import { z } from "zod";

export const AirportTransferAvailabilityCalendarSchema = z.object({
  date: z.string(),

  available: z.boolean().default(true),

  totalVehicles: z.number(),

  remainingVehicles: z.number(),

  stopSell: z.boolean().default(false),

  minimumNoticeMinutes: z.number().optional(),
});
