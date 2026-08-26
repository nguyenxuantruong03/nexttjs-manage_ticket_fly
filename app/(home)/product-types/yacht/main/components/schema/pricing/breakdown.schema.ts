import { z } from "zod";
import { yachtExtraFeeSchema } from "./extra-fee.type";

export const YachtPriceBreakdownSchema = z.object({
  id: z.string(),

  priceId: z.string(),

  basePrice: z.number(),

  originalPrice: z.number().nullable().optional(),

  taxes: z.number(),

  serviceFee: z.number(),

  bookingFee: z.number(),

  discount: z.number(),

  finalPrice: z.number(),

  includedItems: z.array(z.string()),

  extraFees: z.array(yachtExtraFeeSchema),

  createdAt: z.date(),

  updatedAt: z.date(),
});

export type YachtPriceBreakdownFormValues = z.infer<
  typeof YachtPriceBreakdownSchema
>;
