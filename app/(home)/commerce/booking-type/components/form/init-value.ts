import { BookingTypeFormSchema } from "./schema";

import { bookingTypeDefaultValues } from "./default-values";

import { BookingType } from "@/types/common/commerce/booking-type";

export function initBookingTypeFormValues(
  bookingType?: BookingType,
): BookingTypeFormSchema {
  if (!bookingType) {
    return structuredClone(bookingTypeDefaultValues);
  }

  return {
    code: bookingType.code ?? "",
    name: bookingType.name ?? "",
    description: bookingType.description ?? null,

    // ======================================================
    // STATUS
    // ======================================================

    active: bookingType.active ?? true,
    sortOrder: bookingType.sortOrder ?? 0,
  };
}
