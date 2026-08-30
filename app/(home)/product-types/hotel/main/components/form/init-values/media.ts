import { Hotel } from "@/types/product-types/hotel/core/hotel.types";

import { HotelSchemaForm } from "../schema/core/hotel.schema";

export function initHotelMediaValues(
  hotel: Hotel,
): Pick<HotelSchemaForm, "medias"> {
  return {
    medias:
      hotel.medias?.map((media) => ({
        mediaId: media.mediaId ?? "",

        categoryId: media.categoryId ?? "",

        isPrimary: media.isPrimary ?? false,

        sortOrder: media.sortOrder ?? 0,
      })) ?? [],
  } satisfies Pick<HotelSchemaForm, "medias">;
}
