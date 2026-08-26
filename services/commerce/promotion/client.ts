import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { Promotion } from "@/types/common/commerce/promotion/promotion";

export const PromotionService = createCrudApi<Promotion>(
  clientHttp,
  API.PROMOTION,
);
