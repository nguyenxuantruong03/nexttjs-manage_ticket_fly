// schema/pricing/price-fee.schema.ts

import { z } from "zod";
import { YachtFeeType } from "@/types/bookings/yacht/enums";

export const YachtPriceFeeSchema = z.object({

  type: z.nativeEnum(YachtFeeType),

  amount: z.number(),

  mandatory: z.boolean(),

  description: z.string().nullable().optional(),
});

export type YachtPriceFeeFormValues = z.infer<
  typeof YachtPriceFeeSchema
>;