import { PromotionRuleFormSchema } from "./schema";

import { PriceCalculationType } from "@/types/common/enums";

export const promotionRuleDefaultValues: PromotionRuleFormSchema = {
  // ======================================================
  // PROMOTION
  // ======================================================

  promotionId: "",

  // ======================================================
  // BOOKING TYPE
  // ======================================================

  bookingTypeIds: [],

  // ======================================================
  // DISCOUNT
  // ======================================================

  discountType: PriceCalculationType.PERCENTAGE,

  value: 0,

  maxDiscount: null,

  // ======================================================
  // AMOUNT RANGE
  // ======================================================

  minimumAmount: null,

  maximumAmount: null,
};
