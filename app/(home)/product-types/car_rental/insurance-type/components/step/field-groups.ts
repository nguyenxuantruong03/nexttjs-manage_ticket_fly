import { FieldPath } from "react-hook-form";

import { CarRentalInsuranceTypeFormSchema } from "../form/schema";

type CarRentalInsuranceTypeFieldPath =
  FieldPath<CarRentalInsuranceTypeFormSchema>;

export const carRentalInsuranceTypeFieldGroups: Record<
  string,
  readonly CarRentalInsuranceTypeFieldPath[]
> = {
  basic: ["name", "description", "icon"],
  status: ["sortOrder", "active"],
};