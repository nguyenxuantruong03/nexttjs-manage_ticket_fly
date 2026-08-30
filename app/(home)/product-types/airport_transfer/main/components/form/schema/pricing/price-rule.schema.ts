import { PriceCalculationType } from "@/types/common/enums";
import { z } from "zod";

export const AirportTransferPriceRuleSchema = z.object({
  // ======================================================
  // PRICE RULE TYPE
  // ======================================================

  priceRuleTypeId: z.string().min(1),

  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().min(1),

  // ======================================================
  // ADJUSTMENT
  // ======================================================

  adjustmentType:  z.nativeEnum(PriceCalculationType),

  value: z.number(),

  minimumSpend: z.number().nullable(),

  maximumDiscount: z.number().nullable(),

  // ======================================================
  // COUPON
  // ======================================================

  couponCode: z.string().nullable(),

  // ======================================================
  // VALIDITY
  // ======================================================

  validFrom: z.string().nullable(),

  validTo: z.string().nullable(),

  // ======================================================
  // CONFIGURATION
  // ======================================================

  priority: z.number(),

  combinable: z.boolean(),

  active: z.boolean(),
});

export type AirportTransferPriceRuleFormSchema = z.infer<
  typeof AirportTransferPriceRuleSchema
>;