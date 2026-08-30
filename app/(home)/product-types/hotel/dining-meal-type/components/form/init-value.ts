import { DiningMealType } from "@/types/product-types/hotel/service/dinner-option.type";

import { diningMealTypeDefaultValues } from "./default-values";

import { DiningMealTypeFormSchema } from "./schema";

export function initDiningMealTypeFormValues(
  diningMealType?: DiningMealType,
): DiningMealTypeFormSchema {
  if (!diningMealType) {
    return structuredClone(diningMealTypeDefaultValues);
  }

  return {
    name: diningMealType.name ?? "",
    description: diningMealType.description ?? null,
    icon: diningMealType.icon ?? null,
    active: diningMealType.active ?? true,
    sortOrder: diningMealType.sortOrder ?? 0,
  };
}
