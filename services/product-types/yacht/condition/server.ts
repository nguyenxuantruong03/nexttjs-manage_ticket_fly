import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { YachtCondition } from "@/types/product-types/yacht/yacht-condition";

export const YachtConditionServerService =
  createServerCrudApi<YachtCondition>(API.YACHT_CONDITION);