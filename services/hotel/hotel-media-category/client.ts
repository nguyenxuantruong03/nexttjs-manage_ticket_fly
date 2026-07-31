import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { HotelMediaCategory } from "@/types/bookings/hotel/core/hotel-media.types";

export const HotelMediaCategoryService = createCrudApi<HotelMediaCategory>(
  clientHttp,
  API.HOTEL_MEDIA_CATEGORY,
);
