import { InsuranceBenefitType } from "@/types/product-types/car_rental/insurance-type.type";
import { carRentalInsuranceBenefitTypeDefaultValues } from "./default-values";
import { CarRentalInsuranceBenefitTypeFormSchema } from "./schema";

export function initCarRentalInsuranceBenefitTypeFormValues(
  carRentalInsuranceBenefitType: InsuranceBenefitType,
): CarRentalInsuranceBenefitTypeFormSchema {
  if (!carRentalInsuranceBenefitType) {
    return structuredClone(carRentalInsuranceBenefitTypeDefaultValues);
  }

  return structuredClone(carRentalInsuranceBenefitType);
}
