import { z } from "zod";

import { PriceCalculationType } from "@/types/common/enums";

export const schema = z.object({
  // ======================================================
  // PROMOTION
  // ======================================================

  promotionId: z.string().min(1, "Promotion is required"),

  // ======================================================
  // BOOKING TYPE
  // ======================================================

  bookingTypeIds: z.array(z.string()).default([]),

  // ======================================================
  // DISCOUNT
  // ======================================================

  discountType: z.nativeEnum(PriceCalculationType),

  value: z.number().min(0, "Value must be greater than or equal to 0"),

  maxDiscount: z.number().min(0).nullable().optional(),

  // ======================================================
  // AMOUNT RANGE
  // ======================================================

  minimumAmount: z.number().min(0).nullable().optional(),

  maximumAmount: z.number().min(0).nullable().optional(),
});

export type PromotionRuleFormSchema = z.infer<typeof schema>;
