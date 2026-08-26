import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { HotelBrand } from "@/types/product-types/hotel/hotel-detail";

export const HotelBrandService = createCrudApi<HotelBrand>(
  clientHttp,
  API.HOTEL_BRAND,
);
