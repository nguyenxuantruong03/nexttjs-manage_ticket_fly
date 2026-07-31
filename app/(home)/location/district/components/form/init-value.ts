import { District } from "@/types/bookings/location/district";
import { districtDefaultValues } from "./default-values";
import { DistrictFormSchema } from "./schema";

export function initDistrictFormValues(district: District): DistrictFormSchema {
  if (!district) {
    return structuredClone(districtDefaultValues);
  }

  return structuredClone(district);
}
