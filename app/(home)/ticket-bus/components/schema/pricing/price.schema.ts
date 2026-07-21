import { z } from "zod";

import { BusPriceBreakdownSchema } from "./breakdown.schema";
import { BusPriceRuleSchema } from "./rule.schema";

export const BusPriceSchema = z.object({
  fromPrice: z.number(),

  toPrice: z.number().optional(),

  originalFromPrice: z.number().optional(),

  originalToPrice: z.number().optional(),

  breakdowns: z.array(BusPriceBreakdownSchema),

  rules: z.array(BusPriceRuleSchema),

  effectiveFrom: z.string().optional(),

  effectiveTo: z.string().optional(),
});

export type BusPriceFormValues = z.infer<typeof BusPriceSchema>;
