import { createCrudApi } from "@/lib/api/createCrudApi";

import { API } from "@/lib/api/endpoints";

import { clientHttp } from "@/lib/http/client";
import { TaxRule } from "@/types/common/commerce/compliance-legal.type";

export const TaxRuleService = createCrudApi<TaxRule>(clientHttp, API.TAX_RULE);
