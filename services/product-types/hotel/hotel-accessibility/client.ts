import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { Accessibility } from "@/types/product-types/hotel/hotel-detail";

export const HotelAccessibilityService = createCrudApi<Accessibility>(
  clientHttp,
  API.HOTEL_ACCESSIBILITY,
);
