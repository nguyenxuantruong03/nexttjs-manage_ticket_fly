import { PromotionRuleFormSchema } from "./schema";

import { promotionRuleDefaultValues } from "./default-values";

import { PromotionRule } from "@/types/common/commerce/promotion/promotion-rule";

export function initPromotionRuleFormValues(
  promotionRule?: PromotionRule,
): PromotionRuleFormSchema {
  if (!promotionRule) {
    return structuredClone(promotionRuleDefaultValues);
  }

  return {
    // ======================================================
    // PROMOTION
    // ======================================================

    promotionId: promotionRule.promotionId ?? "",

    // ======================================================
    // BOOKING TYPE
    // ======================================================

    bookingTypeIds:
      promotionRule.bookingTypes?.map((bookingType) => bookingType.id) ?? [],

    // ======================================================
    // DISCOUNT
    // ======================================================

    discountType: promotionRule.discountType,
    value: promotionRule.value ?? 0,
    maxDiscount: promotionRule.maxDiscount ?? null,

    // ======================================================
    // AMOUNT RANGE
    // ======================================================

    minimumAmount: promotionRule.minimumAmount ?? null,
    maximumAmount: promotionRule.maximumAmount ?? null,
  };
}
