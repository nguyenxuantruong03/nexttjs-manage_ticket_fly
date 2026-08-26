import { BookingItemTypeFormSchema } from "./schema";

import { bookingItemTypeDefaultValues } from "./default-values";
import { BookingItemType } from "@/types/common/commerce/booking-item-type.type";

export function initBookingItemTypeFormValues(
  bookingItemType?: BookingItemType,
): BookingItemTypeFormSchema {
  if (!bookingItemType) {
    return structuredClone(bookingItemTypeDefaultValues);
  }

  return structuredClone(bookingItemType);
}