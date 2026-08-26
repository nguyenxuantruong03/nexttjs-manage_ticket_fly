import { createServerCrudApi } from "@/lib/api/createServerCrudApi";

import { API } from "@/lib/api/endpoints";
import { PromotionRule } from "@/types/common/commerce/promotion/promotion-rule";

export const PromotionRuleServerService = createServerCrudApi<PromotionRule>(
  API.PROMOTION_RULE,
);
