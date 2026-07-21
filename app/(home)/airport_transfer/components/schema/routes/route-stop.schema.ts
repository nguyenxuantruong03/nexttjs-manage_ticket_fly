import { z } from "zod";

export const AirportTransferRouteStopSchema = z.object({
  addressId: z.string(),

  stopOrder: z.number(),

  estimatedArrival: z.number().optional(),

  waitingMinutes: z.number().optional(),
});
