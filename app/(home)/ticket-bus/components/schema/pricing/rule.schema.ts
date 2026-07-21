import { BusPriceRuleType } from "@/types/bookings/bus/enums";
import { z } from "zod";

export const BusPriceRuleSchema = z.object({

  name: z.string(),

  type: z.nativeEnum(BusPriceRuleType),

  priority: z.number(),

  combinable: z.boolean(),

  percentage: z.number().optional(),

  amount: z.number().optional(),

  minimumSpend: z.number().optional(),

  maximumDiscount: z.number().optional(),

  couponCode: z.string().optional(),

  startDate: z.string().optional(),

  endDate: z.string().optional(),

  active: z.boolean(),
});

export type BusPriceRuleFormValues = z.infer<typeof BusPriceRuleSchema>;
