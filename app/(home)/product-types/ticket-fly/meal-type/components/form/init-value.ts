import { FlyMealTypeFormSchema } from "./schema";

import { flyMealTypeDefaultValues } from "./default-values";

import { FlyMealType } from "@/types/product-types/ticket-fly/fly-meal-type";

export function initFlyMealTypeFormValues(
  flyMealType?: FlyMealType,
): FlyMealTypeFormSchema {
  if (!flyMealType) {
    return structuredClone(flyMealTypeDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    name: flyMealType.name ?? "",

    description: flyMealType.description ?? "",

    icon: flyMealType.icon ?? "",

    // ======================================================
    // STATUS
    // ======================================================

    sortOrder: flyMealType.sortOrder ?? 0,

    active: flyMealType.active ?? true,
  };
}
