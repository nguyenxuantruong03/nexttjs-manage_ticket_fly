import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { FlyMealType } from "@/types/product-types/ticket-fly/fly-meal-type";

export const FlyMealTypeServerService = createServerCrudApi<FlyMealType>(
  API.FLY_MEAL_TYPE,
);
