import { ratePlanTypeDefaultValues } from "./default-values";
import { HotelRatePlanType } from "@/types/bookings/hotel/pricing/rate-plan.types";
import { RatePlanTypeFormSchema } from "./schema";

export function initRatePlanTypeFormValues(
  ratePlanType: HotelRatePlanType,
): RatePlanTypeFormSchema {
  if (!ratePlanType) {
    return structuredClone(ratePlanTypeDefaultValues);
  }

  return structuredClone(ratePlanType);
}
