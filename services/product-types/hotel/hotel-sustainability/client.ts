import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { Sustainability } from "@/types/product-types/hotel/hotel-detail";

export const HotelSustainabilityService = createCrudApi<Sustainability>(
  clientHttp,
  API.HOTEL_SUSTAINABILITY,
);
