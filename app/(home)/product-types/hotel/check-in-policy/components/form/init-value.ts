import { HotelCheckInPolicy } from "@/types/product-types/hotel/hotel-check-in-policy.type";
import { hotelCheckInPolicyDefaultValues } from "./default-values";
import { HotelCheckInPolicySchemaForm } from "./schema";

export function initHotelCheckInPolicyFormValues(
  hotelCheckInPolicy: HotelCheckInPolicy,
): HotelCheckInPolicySchemaForm {
  if (!hotelCheckInPolicy) {
    return structuredClone(hotelCheckInPolicyDefaultValues);
  }

  return structuredClone(hotelCheckInPolicy);
}
