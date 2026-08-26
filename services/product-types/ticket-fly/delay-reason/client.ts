import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { FlyDelayReason } from "@/types/product-types/ticket-fly/fly-delay-reason";

export const FlyDelayReasonService = createCrudApi<FlyDelayReason>(
  clientHttp,
  API.FLY_DELAY_REASON,
);
