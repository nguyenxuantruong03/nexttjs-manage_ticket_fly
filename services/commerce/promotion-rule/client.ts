import { createCrudApi } from "@/lib/api/createCrudApi";

import { API } from "@/lib/api/endpoints";

import { clientHttp } from "@/lib/http/client";
import { PromotionRule } from "@/types/common/commerce/promotion/promotion-rule";

export const PromotionRuleService = createCrudApi<PromotionRule>(
  clientHttp,
  API.PROMOTION_RULE,
);
