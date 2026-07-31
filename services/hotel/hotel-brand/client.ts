import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { HotelBrand } from "@/types/bookings/hotel/hotel-detail.type";

export const HotelBrandService = createCrudApi<HotelBrand>(
  clientHttp,
  API.HOTEL_BRAND,
);
