import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { FlyDelayReason } from "@/types/product-types/ticket-fly/fly-delay-reason";

export const FlyDelayReasonServerService = createServerCrudApi<FlyDelayReason>(
  API.FLY_DELAY_REASON,
);
