import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { DiningMealType } from "@/types/product-types/hotel/service/dinner-option.type";

export const HotelDiningMealTypeServerService =
  createServerCrudApi<DiningMealType>(API.HOTEL_DINING_MEAL_TYPE);
