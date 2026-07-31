import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { DiningServiceType } from "@/types/bookings/hotel/service/dinner-option.type";

export const HotelDiningServiceTypeServerService =
  createServerCrudApi<DiningServiceType>(API.HOTEL_DINING_SERVICE_TYPE);
