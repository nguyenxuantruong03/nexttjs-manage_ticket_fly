// extra.ts
import { CarRental } from "@/types/product-types/car_rental/core/car-rental.types";

import { CarRentalFormSchema } from "../schema/core/car-rental.schema";

export function initCarRentalExtraValues(
  rental: CarRental,
): Pick<CarRentalFormSchema, "carRentalExtraMapper"> {
  return {
    carRentalExtraMapper:
      rental.carRentalExtraMapper?.map((extra) => ({
        extraId: extra.extraId ?? "",
        active: extra.active ?? true,
        sortOrder: extra.sortOrder ?? 0,
      })) ?? [],
  };
}
