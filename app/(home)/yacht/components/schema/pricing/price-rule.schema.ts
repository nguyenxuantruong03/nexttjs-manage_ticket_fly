// schema/pricing/price-rule.schema.ts

import { z } from "zod";

import { YachtDiscountType } from "@/types/bookings/yacht/enums";

export const YachtPriceRuleSchema = z.object({

  type: z.nativeEnum(YachtDiscountType),

  percentage: z.number().nullable().optional(),

  amount: z.number().nullable().optional(),

  startDate: z.date().nullable().optional(),

  endDate: z.date().nullable().optional(),

  active: z.boolean(),
});

export type YachtPriceRuleFormValues = z.infer<typeof YachtPriceRuleSchema>;
