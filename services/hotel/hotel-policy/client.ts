import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { HotelPolicy } from "@/types/bookings/hotel/policy.type";

export const HotelPolicyService = createCrudApi<HotelPolicy>(
  clientHttp,
  API.HOTEL_POLICY,
);
