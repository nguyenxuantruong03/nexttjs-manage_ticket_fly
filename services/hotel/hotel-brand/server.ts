import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { HotelBrand } from "@/types/bookings/hotel/hotel-detail.type";

export const HotelBrandServerService = createServerCrudApi<HotelBrand>(
  API.HOTEL_BRAND,
);
