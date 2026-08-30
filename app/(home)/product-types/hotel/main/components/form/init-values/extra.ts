import { Hotel } from "@/types/product-types/hotel/core/hotel.types";

import { HotelSchemaForm } from "../schema/core/hotel.schema";

export function initHotelExtraValues(
  hotel: Hotel,
): Pick<HotelSchemaForm, "hotelExtraMapper"> {
  return {
    hotelExtraMapper:
      hotel.hotelExtraMapper?.map((extra) => ({
        extraId: extra.extraId ?? "",

        active: extra.active ?? true,

        sortOrder: extra.sortOrder ?? 0,
      })) ?? [],
  } satisfies Pick<HotelSchemaForm, "hotelExtraMapper">;
}
