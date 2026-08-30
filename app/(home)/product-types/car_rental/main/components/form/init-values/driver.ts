// driver.ts
import { CarRental } from "@/types/product-types/car_rental/core/car-rental.types";

import { CarRentalFormSchema } from "../schema/core/car-rental.schema";

export function initCarRentalDriverValues(
  rental: CarRental,
): Pick<CarRentalFormSchema, "drivers"> {
  return {
    drivers:
      rental.drivers?.map((driver) => ({
        name: driver.name ?? "",
        phone: driver.phone ?? "",
        languages: driver.languages ?? [],
        experienceYears: driver.experienceYears ?? 0,
        rating: driver.rating ?? 0,
        status: driver.status,
        image: driver.image ?? "",
      })) ?? [],
  };
}
