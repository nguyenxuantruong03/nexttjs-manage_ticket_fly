import { z } from "zod";

export const AirportTransferTripPriceSchema = z.object({
  // ======================================================
  // TRIP
  // ======================================================

  tripId: z.string().min(1),

  // ======================================================
  // PRICE
  // ======================================================

  finalPrice: z.number(),

  originalPrice: z.number().optional(),
});

export type AirportTransferTripPriceFormSchema = z.infer<
  typeof AirportTransferTripPriceSchema
>;
