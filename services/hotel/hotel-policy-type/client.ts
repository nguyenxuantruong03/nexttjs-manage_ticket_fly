import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { HotelPolicyType } from "@/types/bookings/hotel/policy.type";

export const HotelPolicyTypeService = createCrudApi<HotelPolicyType>(
  clientHttp,
  API.HOTEL_POLICY_TYPE,
);
