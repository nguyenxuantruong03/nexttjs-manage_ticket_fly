import { PromotionFormSchema } from "./schema";

import { promotionDefaultValues } from "./default-values";

import { Promotion } from "@/types/common/commerce/promotion/promotion";

export function initPromotionFormValues(
  promotion?: Promotion,
): PromotionFormSchema {
  if (!promotion) {
    return structuredClone(promotionDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    name: promotion.name ?? "",
    description: promotion.description ?? null,
    code: promotion.code ?? null,

    // ======================================================
    // STATUS
    // ======================================================

    status: promotion.status,

    // ======================================================
    // BOOKING TYPE
    // ======================================================

    bookingTypeIds:
      promotion.bookingTypes?.map((bookingType) => bookingType.id) ?? [],

    // ======================================================
    // DATE
    // ======================================================

    startDate: promotion.startDate,
    endDate: promotion.endDate,

    // ======================================================
    // USAGE
    // ======================================================

    usageLimit: promotion.usageLimit ?? null,
    usedCount: promotion.usedCount ?? 0,
  };
}
