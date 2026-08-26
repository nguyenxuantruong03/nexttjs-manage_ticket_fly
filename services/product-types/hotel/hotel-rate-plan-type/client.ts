import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { HotelRatePlanType } from "@/types/product-types/hotel/pricing/rate-plan.types";

export const HotelRatePlanTypeService = createCrudApi<HotelRatePlanType>(
  clientHttp,
  API.HOTEL_RATE_PLAN_TYPE,
);
