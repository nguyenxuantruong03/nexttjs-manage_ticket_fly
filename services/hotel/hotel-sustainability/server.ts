import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { Sustainability } from "@/types/bookings/hotel/hotel-detail.type";

export const HotelSustainabilityServerService = createServerCrudApi<Sustainability>(
  API.HOTEL_SUSTAINABILITY,
);
