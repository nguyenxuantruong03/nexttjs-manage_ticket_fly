import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { FacilityCategory } from "@/types/bookings/hotel/facilities.types";

export const HotelFacilityCategoryService = createCrudApi<FacilityCategory>(
  clientHttp,
  API.HOTEL_FACILITY_CATEGORY,
);
