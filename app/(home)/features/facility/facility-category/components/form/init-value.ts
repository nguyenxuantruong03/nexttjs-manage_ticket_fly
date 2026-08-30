import { FacilityCategoryFormSchema } from "./schema";

import { facilityCategoryDefaultValues } from "./default-values";

import { FacilityCategory } from "@/types/common/features/facility/facility-category";

export function initFacilityCategoryFormValues(
  facilityCategory?: FacilityCategory,
): FacilityCategoryFormSchema {
  if (!facilityCategory) {
    return structuredClone(facilityCategoryDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    name: facilityCategory.name ?? "",
    description: facilityCategory.description ?? null,
    icon: facilityCategory.icon ?? null,

    bookingTypeIds:
      facilityCategory.bookingTypes?.map((bookingType) => bookingType.id) ?? [],

    // ======================================================
    // STATUS
    // ======================================================

    active: facilityCategory.active ?? true,
    sortOrder: facilityCategory.sortOrder ?? 0,
  };
}
