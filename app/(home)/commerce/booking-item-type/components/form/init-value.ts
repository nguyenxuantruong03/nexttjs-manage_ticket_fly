import { BookingItemTypeFormSchema } from "./schema";

import { bookingItemTypeDefaultValues } from "./default-values";

import { BookingItemType } from "@/types/common/commerce/booking-item-type.type";

export function initBookingItemTypeFormValues(
  bookingItemType?: BookingItemType,
): BookingItemTypeFormSchema {
  if (!bookingItemType) {
    return structuredClone(bookingItemTypeDefaultValues);
  }

  return {
    name: bookingItemType.name ?? "",
    description: bookingItemType.description ?? null,
    icon: bookingItemType.icon ?? null,

    // ======================================================
    // BOOKING TYPE
    // ======================================================

    bookingTypeIds:
      bookingItemType.bookingTypes?.map((bookingType) => bookingType.id) ?? [],

    // ======================================================
    // SORTING
    // ======================================================

    sortOrder: bookingItemType.sortOrder ?? 0,

    // ======================================================
    // STATUS
    // ======================================================

    active: bookingItemType.active ?? true,
  };
}
