import { z } from "zod";

export const FlyFarePriceBreakdownSchema = z.object({
  baseFare: z.number(),

  taxes: z.number(),

  airportFee: z.number(),

  fuelSurcharge: z.number(),

  serviceFee: z.number(),

  bookingFee: z.number(),

  discount: z.number(),

  finalPrice: z.number(),
});

export type FlyFarePriceBreakdownFormValues = z.infer<
  typeof FlyFarePriceBreakdownSchema
>;
