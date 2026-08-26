import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { HotelStarRating } from "@/types/product-types/hotel/hotel-detail";

export const HotelStarRatingService = createCrudApi<HotelStarRating>(
  clientHttp,
  API.HOTEL_STAR_RATING,
);
