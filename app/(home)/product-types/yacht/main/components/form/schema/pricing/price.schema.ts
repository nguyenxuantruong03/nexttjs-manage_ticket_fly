// schema/pricing/price.schema.ts

import { z } from "zod";


import { YachtPriceOptionSchema } from "./price-option.schema";
import { YachtPriceRuleSchema } from "./price-rule.schema";
import { YachtPricingType } from "@/types/product-types/yacht/enums";

export const YachtPriceSchema = z.object({
  pricingType: z.nativeEnum(YachtPricingType),

  basePrices: z.array(YachtPriceOptionSchema).default([]),

  discounts: z.array(YachtPriceRuleSchema).default([]),
});

export type YachtPriceFormValues = z.infer<typeof YachtPriceSchema>;
