import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { HotelFacility } from "@/types/bookings/hotel/facilities.types";

export const HotelFacilityService = createCrudApi<HotelFacility>(
  clientHttp,
  API.HOTEL_FACILITY,
);
