import { Hotel } from "@/types/product-types/hotel/core/hotel.types";

import { HotelSchemaForm } from "../schema/core/hotel.schema";

export function initHotelPolicyValues(
  hotel: Hotel,
): Pick<HotelSchemaForm, "policies" | "checkinPolicy"> {
  return {
    policies:
      hotel.policies?.map((policy) => ({
        policyId: policy.policyId ?? "",

        valueBoolean: policy.valueBoolean ?? false,

        valueNumber: policy.valueNumber ?? undefined,

        valueText: policy.valueText ?? "",

        valueJson: policy.valueJson ?? undefined,

        active: policy.active ?? true,
      })) ?? [],

    checkinPolicy: hotel.checkinPolicy
      ? {
          checkInFrom: hotel.checkinPolicy.checkInFrom ?? "",

          checkInUntil: hotel.checkinPolicy.checkInUntil ?? "",

          checkOutUntil: hotel.checkinPolicy.checkOutUntil ?? "",

          minimumAge: hotel.checkinPolicy.minimumAge ?? undefined,
        }
      : null,
  } satisfies Pick<HotelSchemaForm, "policies" | "checkinPolicy">;
}
