import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { FlyFareRuleType } from "@/types/product-types/ticket-fly/pricing/fare-rule-type";

export const FlyFareRuleTypeServerService =
  createServerCrudApi<FlyFareRuleType>(API.FLY_FARE_RULE_TYPE);
