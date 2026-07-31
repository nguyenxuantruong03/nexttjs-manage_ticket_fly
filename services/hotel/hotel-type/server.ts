import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { HotelType } from "@/types/bookings/hotel/core/hotel-information.types";

export const HotelTypeServerService = createServerCrudApi<HotelType>(
  API.HOTEL_TYPE,
);
