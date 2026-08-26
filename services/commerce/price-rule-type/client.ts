import { createCrudApi } from "@/lib/api/createCrudApi";

import { API } from "@/lib/api/endpoints";

import { clientHttp } from "@/lib/http/client";
import { PriceRuleType } from "@/types/common/commerce/price-rule-type.type";

export const PriceRuleTypeService = createCrudApi<PriceRuleType>(
  clientHttp,
  API.PRICE_RULE_TYPE,
);
