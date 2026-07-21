// schema/pricing/price.schema.ts

import { z } from "zod";

import { YachtPricingType } from "@/types/bookings/yacht/enums";

import { YachtPriceFeeSchema } from "./price-fee.schema";
import { YachtPriceOptionSchema } from "./price-option.schema";
import { YachtPriceRuleSchema } from "./price-rule.schema";

export const YachtPriceSchema = z.object({

  pricingType: z.nativeEnum(YachtPricingType),

  basePrices: z.array(YachtPriceOptionSchema).default([]),

  fees: z.array(YachtPriceFeeSchema).default([]),

  discounts: z.array(YachtPriceRuleSchema).default([]),
});

export type YachtPriceFormValues = z.infer<
  typeof YachtPriceSchema
>;