import { createServerCrudApi } from "@/lib/api/createServerCrudApi";

import { API } from "@/lib/api/endpoints";
import { TaxRule } from "@/types/common/commerce/compliance-legal.type";


export const TaxRuleServerService = createServerCrudApi<TaxRule>(
  API.TAX_RULE,
);