import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { MealPlan } from "@/types/product-types/hotel/pricing/rate-plan.types";

export const HotelMealPlanServerService = createServerCrudApi<MealPlan>(
  API.HOTEL_MEAL_PLAN,
);
