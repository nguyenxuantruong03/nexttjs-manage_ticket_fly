import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { HotelPolicy } from "@/types/bookings/hotel/policy.type";

export const HotelPolicyServerService = createServerCrudApi<HotelPolicy>(
  API.HOTEL_POLICY,
);
