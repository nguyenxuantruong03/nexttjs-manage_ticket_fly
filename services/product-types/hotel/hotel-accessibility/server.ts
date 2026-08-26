import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { Accessibility } from "@/types/product-types/hotel/hotel-detail";

export const HotelAccessibilityServerService =
  createServerCrudApi<Accessibility>(API.HOTEL_ACCESSIBILITY);
