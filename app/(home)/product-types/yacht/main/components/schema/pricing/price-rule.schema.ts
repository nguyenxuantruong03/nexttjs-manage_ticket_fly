import { z } from "zod";

export const YachtPriceRuleSchema = z.object({
  priceId: z.string(),

  percentage: z.number().nullable().optional(),

  amount: z.number().nullable().optional(),

  startDate: z.date().nullable().optional(),

  endDate: z.date().nullable().optional(),

  active: z.boolean(),
});

export type YachtPriceRuleFormValues = z.infer<typeof YachtPriceRuleSchema>;
