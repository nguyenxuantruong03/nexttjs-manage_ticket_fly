import { z } from "zod";

import { BusPriceBreakdownSchema } from "./breakdown.schema";
import { BusPriceRuleSchema } from "./rule.schema";

export const BusPriceSchema = z.object({
  // ======================================================
  // PRICE
  // ======================================================

  fromPrice: z.number(),

  toPrice: z.number().nullable().optional(),

  originalFromPrice: z.number().nullable().optional(),

  originalToPrice: z.number().nullable().optional(),

  // ======================================================
  // RELATIONS
  // ======================================================

  breakdown: BusPriceBreakdownSchema,

  priceRules: z.array(BusPriceRuleSchema),

  // ======================================================
  // EFFECTIVE PERIOD
  // ======================================================

  effectiveFrom: z.date().nullable().optional(),
  effectiveTo: z.date().nullable().optional(),
});

export type BusPriceFormValues = z.infer<typeof BusPriceSchema>;
