import { z } from "zod";

export const BusPriceRuleSchema = z.object({
  // ======================================================
  // RELATIONS
  // ======================================================

  priceRuleTypeId: z.string(),

  // ======================================================
  // RULE
  // ======================================================

  name: z.string(),

  priority: z.number(),

  combinable: z.boolean(),

  percentage: z.number().nullable(),

  amount: z.number().nullable(),

  minimumSpend: z.number().nullable(),

  maximumDiscount: z.number().nullable(),

  couponCode: z.string().nullable(),

  startDate: z.string().nullable(),

  endDate: z.string().nullable(),

  active: z.boolean(),
});

export type BusPriceRuleFormValues = z.infer<typeof BusPriceRuleSchema>;
