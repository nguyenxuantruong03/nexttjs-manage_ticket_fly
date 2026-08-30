import { Hotel } from "@/types/product-types/hotel/core/hotel.types";

import { hotelDefaultValues } from "../default-values";

import { initHotelBasicValues } from "./basic";
import { initHotelMediaValues } from "./media";
import { initHotelInventoryValues } from "./inventory";
import { initHotelRoomValues } from "./room";
import { initHotelPackageValues } from "./package";
import { initHotelPolicyValues } from "./policy";
import { initHotelDetailValues } from "./detail";
import { initHotelExtraValues } from "./extra";
import { initHotelDiningValues } from "./dining";
import { HotelSchemaForm } from "../schema/core/hotel.schema";

export function initHotelFormValues(hotel?: Hotel): HotelSchemaForm {
  if (!hotel) {
    return structuredClone(hotelDefaultValues);
  }

  return {
    ...initHotelBasicValues(hotel),
    ...initHotelMediaValues(hotel),
    ...initHotelInventoryValues(hotel),
    ...initHotelRoomValues(hotel),
    ...initHotelPackageValues(hotel),
    ...initHotelPolicyValues(hotel),
    ...initHotelDetailValues(hotel),
    ...initHotelExtraValues(hotel),
    ...initHotelDiningValues(hotel),
  };
}
