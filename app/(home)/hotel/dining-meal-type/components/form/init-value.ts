import { DiningMealType } from "@/types/bookings/hotel/service/dinner-option.type";
import { diningMealTypeDefaultValues } from "./default-values";
import { DiningMealTypeFormSchema } from "./schema";

export function initDiningMealTypeFormValues(
  dinningMealType: DiningMealType,
): DiningMealTypeFormSchema {
  if (!dinningMealType) {
    return structuredClone(diningMealTypeDefaultValues);
  }

  return structuredClone(dinningMealType);
}
