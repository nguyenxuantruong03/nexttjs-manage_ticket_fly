// schema/trips/trip-price.schema.ts

import { z } from "zod";

export const YachtTripPriceSchema = z.object({
  tripId: z.string(),

  amount: z.number(),

  originalAmount: z.number().nullable().optional(),

  tax: z.number(),

  serviceFee: z.number(),

  discount: z.number(),

  finalAmount: z.number(),
});

export type YachtTripPriceFormValues = z.infer<typeof YachtTripPriceSchema>;
