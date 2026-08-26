import { HotelStarRating } from "@/types/product-types/hotel/hotel-detail";
import { starRatingDefaultValues } from "./default-values";
import { StarRatingFormSchema } from "./schema";

export function initStarRatingFormValues(
  starRating: HotelStarRating,
): StarRatingFormSchema {
  if (!starRating) {
    return structuredClone(starRatingDefaultValues);
  }

  return structuredClone(starRating);
}
