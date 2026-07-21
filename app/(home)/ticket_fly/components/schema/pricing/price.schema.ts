import { z } from "zod";

import { FlyFareSchema } from "./fare.schema";
import { FlyPriceRuleSchema } from "./rule.schema";

export const FlyPriceSchema = z.object({
  fromPrice: z.number(),

  toPrice: z.number().optional(),

  originalFromPrice: z.number().optional(),

  originalToPrice: z.number().optional(),

  fares: z.array(FlyFareSchema).optional(),

  priceRules: z.array(FlyPriceRuleSchema).optional(),
});

export type FlyPriceFormValues = z.infer<typeof FlyPriceSchema>;
