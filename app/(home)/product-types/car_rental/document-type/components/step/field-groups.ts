import { FieldPath } from "react-hook-form";

import { CarRentalDocumentTypeFormSchema } from "../form/schema";

type CarRentalDocumentTypeFieldPath =
  FieldPath<CarRentalDocumentTypeFormSchema>;

export const carRentalDocumentTypeFieldGroups: Record<
  string,
  readonly CarRentalDocumentTypeFieldPath[]
> = {
  basic: ["name", "description", "icon"],

  status: ["sortOrder", "active"],
};