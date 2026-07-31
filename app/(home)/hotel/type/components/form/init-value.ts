import { HotelType } from "@/types/bookings/hotel/core/hotel-information.types";
import { typeDefaultValues } from "./default-values";
import { TypeFormSchema } from "./schema";

export function initTypeFormValues(
  hotelType: HotelType,
): TypeFormSchema {
  if (!hotelType) {
    return structuredClone(typeDefaultValues);
  }

  return structuredClone(hotelType);
}
