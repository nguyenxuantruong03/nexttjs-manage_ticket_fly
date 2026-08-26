import { FieldPath } from "react-hook-form";

import { CarRentalInsuranceBenefitTypeFormSchema } from "../form/schema";

type CarRentalInsuranceBenefitTypeFieldPath =
  FieldPath<CarRentalInsuranceBenefitTypeFormSchema>;

export const carRentalInsuranceBenefitTypeFieldGroups: Record<
  string,
  readonly CarRentalInsuranceBenefitTypeFieldPath[]
> = {
  basic: ["name", "description", "icon"],
  status: ["sortOrder", "active"],
};