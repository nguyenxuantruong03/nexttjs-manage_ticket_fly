// media.ts
import { CarRental } from "@/types/product-types/car_rental/core/car-rental.types";

import { CarRentalFormSchema } from "../schema/core/car-rental.schema";

export function initCarRentalMediaValues(
  rental: CarRental,
): Pick<CarRentalFormSchema, "medias"> {
  return {
    medias:
      rental.medias?.map((media) => ({
        mediaId: media.mediaId ?? "",
        categoryId: media.categoryId ?? "",
        isPrimary: media.isPrimary ?? false,
        sortOrder: media.sortOrder ?? 0,
      })) ?? [],
  };
}
