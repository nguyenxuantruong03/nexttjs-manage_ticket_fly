import { BookingTypeFormSchema } from "./schema";
import { bookingTypeDefaultValues } from "./default-values";
import { BookingType } from "@/types/common/commerce/booking-type";

export function initBookingTypeFormValues(
  bookingType?: BookingType,
): BookingTypeFormSchema {
  if (!bookingType) {
    return structuredClone(bookingTypeDefaultValues);
  }

  return structuredClone(bookingType);
}
