import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { HotelStarRating } from "@/types/bookings/hotel/hotel-detail.type";

export const HotelStarRatingServerService =
  createServerCrudApi<HotelStarRating>(API.HOTEL_STAR_RATING);
