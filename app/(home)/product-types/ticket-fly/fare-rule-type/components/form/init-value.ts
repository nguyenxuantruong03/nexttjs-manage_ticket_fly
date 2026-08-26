import { FlyFareRuleTypeFormSchema } from "./schema";

import { flyFareRuleTypeDefaultValues } from "./default-values";
import { FlyFareRuleType } from "@/types/product-types/ticket-fly/pricing/fare-rule-type";

export function initFlyFareRuleTypeFormValues(
  flyFareRuleType: FlyFareRuleType,
): FlyFareRuleTypeFormSchema {
  if (!flyFareRuleType) {
    return structuredClone(flyFareRuleTypeDefaultValues);
  }

  return structuredClone(flyFareRuleType);
}
