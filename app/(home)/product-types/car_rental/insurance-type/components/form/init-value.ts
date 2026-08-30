import { InsuranceType } from "@/types/product-types/car_rental/insurance-type.type";

import { carRentalInsuranceTypeDefaultValues } from "./default-values";

import { CarRentalInsuranceTypeFormSchema } from "./schema";

export function initCarRentalInsuranceTypeFormValues(
  carRentalInsuranceType?: InsuranceType,
): CarRentalInsuranceTypeFormSchema {
  if (!carRentalInsuranceType) {
    return structuredClone(carRentalInsuranceTypeDefaultValues);
  }

  return {
    name: carRentalInsuranceType.name ?? "",
    description: carRentalInsuranceType.description ?? null,
    icon: carRentalInsuranceType.icon ?? null,
    sortOrder: carRentalInsuranceType.sortOrder ?? 0,
    active: carRentalInsuranceType.active ?? true,
  };
}
