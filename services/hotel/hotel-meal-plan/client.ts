import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { MealPlan } from "@/types/bookings/hotel/pricing/rate-plan.types";

export const HotelMealPlanService = createCrudApi<MealPlan>(
  clientHttp,
  API.HOTEL_MEAL_PLAN,
);
