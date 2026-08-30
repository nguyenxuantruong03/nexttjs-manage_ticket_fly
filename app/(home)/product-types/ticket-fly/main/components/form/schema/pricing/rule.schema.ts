import { z } from "zod";

export const FlyFareRuleSchema = z.object({
  typeId: z.string(),

  value: z.string(),
});

export type FlyFareRuleFormValues = z.infer<typeof FlyFareRuleSchema>;

export const FlyPriceRuleSchema = z.object({
  name: z.string().min(1),

  priceRuleTypeId: z.string(),

  percentage: z.number().optional(),

  amount: z.number().optional(),

  couponCode: z.string().optional(),

  minimumSpend: z.number().optional(),

  maximumDiscount: z.number().optional(),

  validFrom: z.date().optional(),

  validTo: z.date().optional(),

  active: z.boolean(),
});

export type FlyPriceRuleFormValues = z.infer<typeof FlyPriceRuleSchema>;
