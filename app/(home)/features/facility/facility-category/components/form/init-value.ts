import { FacilityCategoryFormSchema } from "./schema";
import { facilityCategoryDefaultValues } from "./default-values";
import { FacilityCategory } from "@/types/common/features/facility/facility-category";

export function initFacilityCategoryFormValues(
  facilityCategory?: FacilityCategory,
): FacilityCategoryFormSchema {
  if (!facilityCategory) {
    return structuredClone(facilityCategoryDefaultValues);
  }

  return structuredClone(facilityCategory);
}