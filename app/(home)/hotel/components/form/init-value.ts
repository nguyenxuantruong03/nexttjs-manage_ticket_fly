import { Hotel } from "@/types/bookings/hotel/core/hotel.types";
import { HotelFormSchema } from "../schema";
import { hotelDefaultValues } from "./default-values";

export function initHotelFormValues(hotel?: Hotel): HotelFormSchema {
  if (!hotel) {
    return structuredClone(hotelDefaultValues);
  }

  return structuredClone(hotel);
}
