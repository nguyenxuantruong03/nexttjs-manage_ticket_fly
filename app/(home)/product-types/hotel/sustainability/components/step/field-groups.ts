import { FieldPath } from "react-hook-form";

import { SustainabilityFormSchema } from "../form/schema";

type SustainabilityFieldPath = FieldPath<SustainabilityFormSchema>;

export const sustainabilityFieldGroups: Record<
  string,
  readonly SustainabilityFieldPath[]
> = {
  // ======================================================
  // BASIC
  // ======================================================

  basic: ["name", "description"],
};
