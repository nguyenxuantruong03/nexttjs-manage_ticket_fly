import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { Accessibility } from "@/types/bookings/hotel/hotel-detail.type";

export const HotelAccessibilityService = createCrudApi<Accessibility>(
  clientHttp,
  API.HOTEL_ACCESSIBILITY,
);
