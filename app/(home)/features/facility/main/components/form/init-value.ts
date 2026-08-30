import { FacilityFormSchema } from "./schema";

import { facilityDefaultValues } from "./default-values";

import { Facility } from "@/types/common/features/facility/facility";

export function initFacilityFormValues(
  facility?: Facility,
): FacilityFormSchema {
  if (!facility) {
    return structuredClone(facilityDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    name: facility.name ?? "",
    description: facility.description ?? null,
    icon: facility.icon ?? null,

    // ======================================================
    // CATEGORY
    // ======================================================

    categoryId: facility.categoryId ?? null,

    bookingTypeIds:
      facility.bookingTypes?.map((bookingType) => bookingType.id) ?? [],

    // ======================================================
    // STATUS
    // ======================================================

    active: facility.active ?? true,
    sortOrder: facility.sortOrder ?? 0,
  };
}
