import { z } from "zod";

import { FlyExtraFeeSchema } from "./extra-fee.schema";

export const FlyFarePriceBreakdownSchema = z.object({
  // ======================================================
  // FARE
  // ======================================================

  baseFare: z.number(),

  taxes: z.number(),

  airportFee: z.number(),

  fuelSurcharge: z.number(),

  serviceFee: z.number(),

  bookingFee: z.number(),

  // ======================================================
  // EXTRA FEES
  // ======================================================

  extraFees: z.array(FlyExtraFeeSchema).optional(),

  // ======================================================
  // DISCOUNT
  // ======================================================

  discount: z.number(),

  finalPrice: z.number(),
});

export type FlyFarePriceBreakdownFormValues = z.infer<
  typeof FlyFarePriceBreakdownSchema
>;
