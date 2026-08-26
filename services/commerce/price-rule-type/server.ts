import { createServerCrudApi } from "@/lib/api/createServerCrudApi";

import { API } from "@/lib/api/endpoints";
import { PriceRuleType } from "@/types/common/commerce/price-rule-type.type";

export const PriceRuleTypeServerService = createServerCrudApi<PriceRuleType>(
  API.PRICE_RULE_TYPE,
);
