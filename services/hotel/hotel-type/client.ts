import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { HotelType } from "@/types/bookings/hotel/core/hotel-information.types";

export const HotelTypeService = createCrudApi<HotelType>(
  clientHttp,
  API.HOTEL_TYPE,
);
