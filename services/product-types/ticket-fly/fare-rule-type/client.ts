import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { FlyFareRuleType } from "@/types/product-types/ticket-fly/pricing/fare-rule-type";

export const FlyFareRuleTypeService = createCrudApi<FlyFareRuleType>(
  clientHttp,
  API.FLY_FARE_RULE_TYPE,
);
