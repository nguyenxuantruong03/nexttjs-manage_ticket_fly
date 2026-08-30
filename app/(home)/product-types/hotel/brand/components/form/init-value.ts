import { HotelBrand } from "@/types/product-types/hotel/hotel-detail";

import { brandDefaultValues } from "./default-values";

import { BrandFormSchema } from "./schema";

export function initHotelBrandFormValues(
  hotelBrand?: HotelBrand,
): BrandFormSchema {
  if (!hotelBrand) {
    return structuredClone(brandDefaultValues);
  }

  return {
    name: hotelBrand.name ?? "",
    description: hotelBrand.description ?? null,
    logo: hotelBrand.logo ?? null,
    active: hotelBrand.active ?? true,
  };
}
