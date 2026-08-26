import { hotelDefaultValues } from "./default-values";
import { HotelSchemaForm } from "../schema/core/hotel.schema";
import { Hotel } from "@/types/product-types/hotel/core/hotel.types";

export function initHotelFormValues(hotel?: Hotel): HotelSchemaForm {
  if (!hotel) {
    return structuredClone(hotelDefaultValues);
  }

  return structuredClone(hotel);
}
