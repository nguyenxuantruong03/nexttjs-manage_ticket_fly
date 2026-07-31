import { FieldPath } from "react-hook-form";

import { FacilityCategoryFormSchema } from "../form/schema";

type FacilityCategoryFieldPath = FieldPath<FacilityCategoryFormSchema>;

export const facilityCategoryFieldGroups: Record<
  string,
  readonly FacilityCategoryFieldPath[]
> = {
  // ======================================================
  // BASIC
  // ======================================================

  basic: ["name", "description", "icon"],

  // ======================================================
  // SETTINGS
  // ======================================================

  settings: ["active", "sortOrder"],
};
