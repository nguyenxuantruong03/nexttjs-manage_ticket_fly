import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { HotelPolicyType } from "@/types/bookings/hotel/policy.type";
import { HotelRatePlanType } from "@/types/bookings/hotel/pricing/rate-plan.types";

export const HotelRatePlanTypeServerService =
  createServerCrudApi<HotelRatePlanType>(API.HOTEL_RATE_PLAN_TYPE);
