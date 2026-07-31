import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { HotelFacility } from "@/types/bookings/hotel/facilities.types";

export const HotelFacilityServerService =
  createServerCrudApi<HotelFacility>(API.HOTEL_FACILITY);
