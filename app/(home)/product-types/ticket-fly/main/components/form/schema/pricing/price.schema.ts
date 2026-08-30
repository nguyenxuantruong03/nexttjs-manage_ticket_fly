import { z } from "zod";

import { FlyFareSchema } from "./fare.schema";
import { FlyPriceRuleSchema } from "./rule.schema";

export const FlyPriceSchema = z.object({
  // ======================================================
  // PRICE
  // ======================================================

  fromPrice: z.number(),

  toPrice: z.number().optional(),

  originalFromPrice: z.number().optional(),

  originalToPrice: z.number().optional(),

  // ======================================================
  // FARES
  // ======================================================

  fares: z.array(FlyFareSchema).optional(),

  // ======================================================
  // PRICE RULES
  // ======================================================

  priceRules: z.array(FlyPriceRuleSchema).optional(),
});

export type FlyPriceFormValues = z.infer<typeof FlyPriceSchema>;
