import { HotelMediaCategory } from "@/types/bookings/hotel/core/hotel-media.types";
import { mediaCategoryDefaultValues } from "./default-values";
import { MediaCategoryFormSchema } from "./schema";

export function initMediaCategoryFormValues(
  mediaCategory: HotelMediaCategory,
): MediaCategoryFormSchema {
  if (!mediaCategory) {
    return structuredClone(mediaCategoryDefaultValues);
  }

  return structuredClone(mediaCategory);
}
