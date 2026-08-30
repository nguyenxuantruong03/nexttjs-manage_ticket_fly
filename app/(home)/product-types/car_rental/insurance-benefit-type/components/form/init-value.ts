import { InsuranceBenefitType } from "@/types/product-types/car_rental/insurance-type.type";

import { carRentalInsuranceBenefitTypeDefaultValues } from "./default-values";

import { CarRentalInsuranceBenefitTypeFormSchema } from "./schema";

export function initCarRentalInsuranceBenefitTypeFormValues(
  carRentalInsuranceBenefitType?: InsuranceBenefitType,
): CarRentalInsuranceBenefitTypeFormSchema {
  if (!carRentalInsuranceBenefitType) {
    return structuredClone(carRentalInsuranceBenefitTypeDefaultValues);
  }

  return {
    name: carRentalInsuranceBenefitType.name ?? "",
    description: carRentalInsuranceBenefitType.description ?? null,
    icon: carRentalInsuranceBenefitType.icon ?? null,
    sortOrder: carRentalInsuranceBenefitType.sortOrder ?? 0,
    active: carRentalInsuranceBenefitType.active ?? true,
  };
}
