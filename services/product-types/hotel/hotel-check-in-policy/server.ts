import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { HotelCheckInPolicy } from "@/types/product-types/hotel/hotel-check-in-policy.type";

export const HotelCheckInPolicyServerService =
  createServerCrudApi<HotelCheckInPolicy>(API.HOTEL_CHECK_IN_POLICY);
