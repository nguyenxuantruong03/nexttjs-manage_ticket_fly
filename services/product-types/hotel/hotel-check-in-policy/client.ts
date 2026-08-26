import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { HotelCheckInPolicy } from "@/types/product-types/hotel/hotel-check-in-policy.type";

export const HotelCheckInPolicyService = createCrudApi<HotelCheckInPolicy>(
  clientHttp,
  API.HOTEL_CHECK_IN_POLICY,
);
