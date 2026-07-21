import {
  AirportTransferAdjustmentType,
  AirportTransferPriceRuleType,
} from "@/types/bookings/airport-transfer/enums";
import { z } from "zod";

export const AirportTransferPriceRuleSchema = z.object({
  name: z.string().min(1),

  type: z.nativeEnum(AirportTransferPriceRuleType),

  adjustmentType: z.nativeEnum(AirportTransferAdjustmentType),

  value: z.number(),

  minimumSpend: z.number().optional(),

  maximumDiscount: z.number().optional(),

  couponCode: z.string().optional(),

  validFrom: z.string().optional(),

  validTo: z.string().optional(),

  priority: z.number().default(0),

  combinable: z.boolean().default(false),

  active: z.boolean().default(true),
});
