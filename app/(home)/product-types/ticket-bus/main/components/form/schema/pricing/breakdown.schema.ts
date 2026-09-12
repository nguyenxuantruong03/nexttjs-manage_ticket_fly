import { z } from "zod";

import { BusExtraFeeSchema } from "./extra-fee.schema";

export const BusPriceBreakdownSchema = z.object({
  // ======================================================
  // RELATIONS
  // ======================================================

  seatTypeId: z.string(),

  extraFees: z.array(BusExtraFeeSchema),

  // ======================================================
  // PRICE
  // ======================================================

  basePrice: z.number(),

  originalPrice: z.number().nullable(),

  taxes: z.number(),

  serviceFee: z.number(),

  bookingFee: z.number(),

  discount: z.number(),

  finalPrice: z.number(),

  availableSeats: z.number().nullable(),

  includedItems: z.array(z.string()),
});

export type BusPriceBreakdownFormValues = z.infer<
  typeof BusPriceBreakdownSchema
>;
