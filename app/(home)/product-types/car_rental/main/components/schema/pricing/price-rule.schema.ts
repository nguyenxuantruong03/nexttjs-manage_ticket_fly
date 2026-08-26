import { z } from "zod";

export const CarRentalPriceRuleSchema = z.object({
  // ======================================================
  // PRICE RULE TYPE
  // ======================================================

  priceRuleTypeId: z.string().min(1),

  // ======================================================
  // VALUE
  // ======================================================

  percentage: z.number().nullable(),

  amount: z.number().nullable(),

  // ======================================================
  // VALIDITY
  // ======================================================

  startDate: z.string().nullable(),

  endDate: z.string().nullable(),
});

export type CarRentalPriceRuleFormSchema = z.infer<
  typeof CarRentalPriceRuleSchema
>;
