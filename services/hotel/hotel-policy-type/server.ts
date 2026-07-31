import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { HotelPolicyType } from "@/types/bookings/hotel/policy.type";

export const HotelPolicyTypeServerService =
  createServerCrudApi<HotelPolicyType>(API.HOTEL_POLICY_TYPE);
