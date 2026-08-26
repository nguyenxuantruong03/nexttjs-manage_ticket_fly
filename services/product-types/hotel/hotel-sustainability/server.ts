import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { Sustainability } from "@/types/product-types/hotel/hotel-detail";

export const HotelSustainabilityServerService =
  createServerCrudApi<Sustainability>(API.HOTEL_SUSTAINABILITY);
