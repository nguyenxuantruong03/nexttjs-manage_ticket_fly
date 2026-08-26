import { InsuranceType } from "@/types/product-types/car_rental/insurance-type.type";
import { carRentalInsuranceTypeDefaultValues } from "./default-values";
import { CarRentalInsuranceTypeFormSchema } from "./schema";

export function initCarRentalInsuranceTypeFormValues(
  carRentalInsuranceType: InsuranceType,
): CarRentalInsuranceTypeFormSchema {
  if (!carRentalInsuranceType) {
    return structuredClone(carRentalInsuranceTypeDefaultValues);
  }

  return structuredClone(carRentalInsuranceType);
}
