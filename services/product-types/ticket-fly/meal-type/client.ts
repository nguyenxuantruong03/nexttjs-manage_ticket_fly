import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { FlyMealType } from "@/types/product-types/ticket-fly/fly-meal-type";

export const FlyMealTypeService = createCrudApi<FlyMealType>(
  clientHttp,
  API.FLY_MEAL_TYPE,
);