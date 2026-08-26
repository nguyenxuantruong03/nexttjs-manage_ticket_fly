import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { HotelStarRating } from "@/types/product-types/hotel/hotel-detail";

export const HotelStarRatingServerService =
  createServerCrudApi<HotelStarRating>(API.HOTEL_STAR_RATING);
