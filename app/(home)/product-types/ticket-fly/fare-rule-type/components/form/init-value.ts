import { FlyFareRuleTypeFormSchema } from "./schema";

import { flyFareRuleTypeDefaultValues } from "./default-values";

import { FlyFareRuleType } from "@/types/product-types/ticket-fly/pricing/fare-rule-type";

export function initFlyFareRuleTypeFormValues(
  flyFareRuleType?: FlyFareRuleType,
): FlyFareRuleTypeFormSchema {
  if (!flyFareRuleType) {
    return structuredClone(flyFareRuleTypeDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    name: flyFareRuleType.name ?? "",

    description: flyFareRuleType.description ?? "",

    icon: flyFareRuleType.icon ?? "",

    // ======================================================
    // STATUS
    // ======================================================

    sortOrder: flyFareRuleType.sortOrder ?? 0,

    active: flyFareRuleType.active ?? true,
  };
}
