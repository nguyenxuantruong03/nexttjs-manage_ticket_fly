import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { Promotion } from "@/types/common/commerce/promotion/promotion";

export const PromotionServerService = createServerCrudApi<Promotion>(
  API.PROMOTION,
);
