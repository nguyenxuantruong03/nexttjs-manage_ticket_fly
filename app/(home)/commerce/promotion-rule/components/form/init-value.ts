import { PromotionRuleFormSchema } from "./schema";

import { promotionRuleDefaultValues } from "./default-values";
import { PromotionRule } from "@/types/common/commerce/promotion/promotion-rule";

export function initPromotionRuleFormValues(
  promotionRule?: PromotionRule,
): PromotionRuleFormSchema {
  if (!promotionRule) {
    return structuredClone(promotionRuleDefaultValues);
  }

  return structuredClone(promotionRule);
}
