import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { HotelMediaCategory } from "@/types/bookings/hotel/core/hotel-media.types";

export const HotelMediaCategoryServerService =
  createServerCrudApi<HotelMediaCategory>(API.HOTEL_MEDIA_CATEGORY);
