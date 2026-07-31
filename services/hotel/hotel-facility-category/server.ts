import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { FacilityCategory } from "@/types/bookings/hotel/facilities.types";

export const HotelFacilityCategoryServerService =
  createServerCrudApi<FacilityCategory>(API.HOTEL_FACILITY_CATEGORY);
