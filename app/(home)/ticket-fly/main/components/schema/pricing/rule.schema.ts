import { z } from "zod";

import {
  FlyFareRuleType,
  FlyPriceRuleType,
} from "@/types/bookings/ticket-fly/enums";

export const FlyFareRuleSchema = z.object({
  type: z.nativeEnum(FlyFareRuleType),

  value: z.string(),
});

export const FlyPriceRuleSchema = z.object({
  name: z.string(),

  type: z.nativeEnum(FlyPriceRuleType),

  percentage: z.number().optional(),

  amount: z.number().optional(),

  couponCode: z.string().optional(),

  minimumSpend: z.number().optional(),

  maximumDiscount: z.number().optional(),

  validFrom: z.date().optional(),

  validTo: z.date().optional(),

  active: z.boolean(),
});

export type FlyFareRuleFormValues = z.infer<typeof FlyFareRuleSchema>;

export type FlyPriceRuleFormValues = z.infer<typeof FlyPriceRuleSchema>;
