import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { HotelStarRating } from "@/types/bookings/hotel/hotel-detail.type";

export const HotelStarRatingService = createCrudApi<HotelStarRating>(
  clientHttp,
  API.HOTEL_STAR_RATING,
);
