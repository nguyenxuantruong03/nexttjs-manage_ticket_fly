import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { Accessibility } from "@/types/bookings/hotel/hotel-detail.type";

export const HotelAccessibilityServerService =
  createServerCrudApi<Accessibility>(API.HOTEL_ACCESSIBILITY);
