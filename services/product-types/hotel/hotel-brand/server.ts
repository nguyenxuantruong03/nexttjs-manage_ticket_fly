import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { HotelBrand } from "@/types/product-types/hotel/hotel-detail";

export const HotelBrandServerService = createServerCrudApi<HotelBrand>(
  API.HOTEL_BRAND,
);
