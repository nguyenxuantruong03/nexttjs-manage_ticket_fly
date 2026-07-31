import { HotelFacility } from "@/types/bookings/hotel/facilities.types";
import { facilityDefaultValues } from "./default-values";
import { FacilityFormSchema } from "./schema";

export function initFacilityFormValues(
  facility: HotelFacility,
): FacilityFormSchema {
  if (!facility) {
    return structuredClone(facilityDefaultValues);
  }

  return structuredClone(facility);
}
