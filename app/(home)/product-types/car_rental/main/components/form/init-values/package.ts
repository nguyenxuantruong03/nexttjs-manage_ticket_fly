// package.ts
import { CarRental } from "@/types/product-types/car_rental/core/car-rental.types";

import { CarRentalFormSchema } from "../schema/core/car-rental.schema";

export function initCarRentalPackageValues(
  rental: CarRental,
): Pick<CarRentalFormSchema, "carRentalPackageMapper"> {
  return {
    carRentalPackageMapper:
      rental.carRentalPackageMapper?.map((pkg) => ({
        packageId: pkg.packageId ?? "",
      })) ?? [],
  };
}
