import { PriceRuleTypeFormSchema } from "./schema";

import { priceRuleTypeDefaultValues } from "./default-values";
import { PriceRuleType } from "@/types/common/commerce/price-rule-type.type";

export function initPriceRuleTypeFormValues(
  priceRuleType?: PriceRuleType,
): PriceRuleTypeFormSchema {
  if (!priceRuleType) {
    return structuredClone(priceRuleTypeDefaultValues);
  }

  return structuredClone(priceRuleType);
}
