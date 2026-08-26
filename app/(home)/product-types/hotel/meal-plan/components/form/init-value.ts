import { MealPlan } from "@/types/product-types/hotel/pricing/rate-plan.types";
import { mealPlanDefaultValues } from "./default-values";
import { MealPlanFormSchema } from "./schema";

export function initMealPlanFormValues(
  mealPlan: MealPlan,
): MealPlanFormSchema {
  if (!mealPlan) {
    return structuredClone(mealPlanDefaultValues);
  }

  return structuredClone(mealPlan);
}
