import { FacilityFormSchema } from "./schema";
import { facilityDefaultValues } from "./default-values";
import { Facility } from "@/types/common/features/facility/facility";

export function initFacilityFormValues(
  facility?: Facility,
): FacilityFormSchema {
  if (!facility) {
    return structuredClone(facilityDefaultValues);
  }

  return structuredClone(facility);
}