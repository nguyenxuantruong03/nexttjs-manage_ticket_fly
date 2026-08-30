import { HotelCheckInPolicy } from "@/types/product-types/hotel/hotel-check-in-policy.type";

import { hotelCheckInPolicyDefaultValues } from "./default-values";

import { HotelCheckInPolicySchemaForm } from "./schema";

export function initHotelCheckInPolicyFormValues(
  hotelCheckInPolicy?: HotelCheckInPolicy,
): HotelCheckInPolicySchemaForm {
  if (!hotelCheckInPolicy) {
    return structuredClone(hotelCheckInPolicyDefaultValues);
  }

  return {
    hotelId: hotelCheckInPolicy.hotelId ?? "",
    checkInFrom: hotelCheckInPolicy.checkInFrom ?? null,
    checkInUntil: hotelCheckInPolicy.checkInUntil ?? null,
    checkOutUntil: hotelCheckInPolicy.checkOutUntil ?? null,
    minimumAge: hotelCheckInPolicy.minimumAge ?? null,
  };
}
