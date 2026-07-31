import { HotelBrand } from "@/types/bookings/hotel/hotel-detail.type";
import { brandDefaultValues } from "./default-values";
import { BrandFormSchema } from "./schema";

export function initHotelBrandFormValues(
  hotelBrand: HotelBrand,
): BrandFormSchema {
  if (!hotelBrand) {
    return structuredClone(brandDefaultValues);
  }

  return structuredClone(hotelBrand);
}
