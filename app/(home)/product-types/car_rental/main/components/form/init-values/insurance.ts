// insurance.ts
import { CarRental } from "@/types/product-types/car_rental/core/car-rental.types";

import { CarRentalFormSchema } from "../schema/core/car-rental.schema";

export function initCarRentalInsuranceValues(
  rental: CarRental,
): Pick<CarRentalFormSchema, "insurances"> {
  return {
    insurances:
      rental.insurances?.map((insurance) => ({
        typeId: insurance.typeId ?? "",
        name: insurance.name ?? "",
        description: insurance.description ?? "",
        pricePerDay: insurance.pricePerDay ?? 0,
        fixedPrice: insurance.fixedPrice ?? 0,
        active: insurance.active ?? true,
        benefits:
          insurance.benefits?.map((benefit) => ({
            typeId: benefit.typeId ?? "",
            title: benefit.title ?? "",
            description: benefit.description ?? "",
            coverageAmount: benefit.coverageAmount ?? 0,
            excessAmount: benefit.excessAmount ?? 0,
          })) ?? [],
      })) ?? [],
  };
}
