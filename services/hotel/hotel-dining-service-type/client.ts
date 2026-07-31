import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { DiningServiceType } from "@/types/bookings/hotel/service/dinner-option.type";

export const HotelDiningServiceTypeService = createCrudApi<DiningServiceType>(
  clientHttp,
  API.HOTEL_DINING_SERVICE_TYPE,
);
