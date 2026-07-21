import { z } from "zod";

export const AirportTransferTripPriceSchema = z.object({
  tripId: z.string(),

  finalPrice: z.number(),

  originalPrice: z.number().optional(),
});
