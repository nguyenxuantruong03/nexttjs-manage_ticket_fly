import { PriceRuleTypeFormSchema } from "./schema";

import { priceRuleTypeDefaultValues } from "./default-values";

import { PriceRuleType } from "@/types/common/commerce/price-rule-type.type";

export function initPriceRuleTypeFormValues(
  priceRuleType?: PriceRuleType,
): PriceRuleTypeFormSchema {
  if (!priceRuleType) {
    return structuredClone(priceRuleTypeDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    name: priceRuleType.name ?? "",
    description: priceRuleType.description ?? null,
    icon: priceRuleType.icon ?? null,

    // ======================================================
    // BOOKING TYPE
    // ======================================================

    bookingTypeIds:
      priceRuleType.bookingTypes?.map((bookingType) => bookingType.id) ?? [],

    // ======================================================
    // STATUS
    // ======================================================

    active: priceRuleType.active ?? true,
    sortOrder: priceRuleType.sortOrder ?? 0,
  };
}
