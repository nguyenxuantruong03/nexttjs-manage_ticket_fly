import { FacilityCategory } from "@/types/bookings/hotel/facilities.types";
import { facilityCategoryDefaultValues } from "./default-values";
import { FacilityCategoryFormSchema } from "./schema";

export function initFacilityCategoryFormValues(
  facilityCategory: FacilityCategory,
): FacilityCategoryFormSchema {
  if (!facilityCategory) {
    return structuredClone(facilityCategoryDefaultValues);
  }

  return structuredClone(facilityCategory);
}
