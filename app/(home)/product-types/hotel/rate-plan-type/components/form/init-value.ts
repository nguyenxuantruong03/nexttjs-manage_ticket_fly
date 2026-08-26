import { HotelRatePlanType } from "@/types/product-types/hotel/pricing/rate-plan.types";
import { ratePlanTypeDefaultValues } from "./default-values";
import { RatePlanTypeFormSchema } from "./schema";

export function initRatePlanTypeFormValues(
  ratePlanType: HotelRatePlanType,
): RatePlanTypeFormSchema {
  if (!ratePlanType) {
    return structuredClone(ratePlanTypeDefaultValues);
  }

  return structuredClone(ratePlanType);
}
