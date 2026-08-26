import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { YachtCondition } from "@/types/product-types/yacht/yacht-condition";

export const YachtConditionService = createCrudApi<YachtCondition>(
  clientHttp,
  API.YACHT_CONDITION,
);