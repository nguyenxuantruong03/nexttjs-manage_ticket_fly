import { HotelRatePlanType } from "@/types/product-types/hotel/pricing/rate-plan.types";

import { ratePlanTypeDefaultValues } from "./default-values";

import { RatePlanTypeFormSchema } from "./schema";

export function initRatePlanTypeFormValues(
  ratePlanType?: HotelRatePlanType,
): RatePlanTypeFormSchema {
  if (!ratePlanType) {
    return structuredClone(ratePlanTypeDefaultValues);
  }

  return {
    name: ratePlanType.name ?? "",
    description: ratePlanType.description ?? null,
    icon: ratePlanType.icon ?? null,
    active: ratePlanType.active ?? true,
    sortOrder: ratePlanType.sortOrder ?? 0,
  };
}
