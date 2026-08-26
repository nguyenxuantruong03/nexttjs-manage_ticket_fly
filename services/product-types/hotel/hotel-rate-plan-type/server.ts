import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { HotelRatePlanType } from "@/types/product-types/hotel/pricing/rate-plan.types";

export const HotelRatePlanTypeServerService =
  createServerCrudApi<HotelRatePlanType>(API.HOTEL_RATE_PLAN_TYPE);
