import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { DiningMealType } from "@/types/product-types/hotel/service/dinner-option.type";

export const HotelDiningMealTypeService = createCrudApi<DiningMealType>(
  clientHttp,
  API.HOTEL_DINING_MEAL_TYPE,
);
