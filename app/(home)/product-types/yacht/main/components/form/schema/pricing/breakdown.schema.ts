import { z } from "zod";
import { yachtExtraFeeSchema } from "./extra-fee.type";

export const YachtPriceBreakdownSchema = z.object({
  basePrice: z.number(),

  originalPrice: z.number().nullable().optional(),

  taxes: z.number(),

  serviceFee: z.number(),

  bookingFee: z.number(),

  discount: z.number(),

  finalPrice: z.number(),

  includedItems: z.array(z.string()),

  extraFees: z.array(yachtExtraFeeSchema),
});

export type YachtPriceBreakdownFormValues = z.infer<
  typeof YachtPriceBreakdownSchema
>;
