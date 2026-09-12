// schema/pricing/price.schema.ts

import { z } from "zod";

import { YachtPriceOptionSchema } from "./price-option.schema";
import { YachtPriceRuleSchema } from "./price-rule.schema";
import { YachtPricingType } from "@/types/product-types/yacht/enums";
import { YachtPriceBreakdownSchema } from "./breakdown.schema";

export const YachtPriceSchema = z.object({
  effectiveFrom: z.date().nullable().optional(),
  effectiveTo: z.date().nullable().optional(),

  pricingType: z.nativeEnum(YachtPricingType),

  basePrices: z.array(YachtPriceOptionSchema).default([]),

  priceRules: z.array(YachtPriceRuleSchema).default([]),

  breakdown: YachtPriceBreakdownSchema.optional(),
});

export type YachtPriceFormValues = z.infer<typeof YachtPriceSchema>;
