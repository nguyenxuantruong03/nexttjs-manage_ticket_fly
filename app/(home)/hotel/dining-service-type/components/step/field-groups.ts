import { FieldPath } from "react-hook-form";

import { DiningServiceTypeFormSchema } from "../form/schema";

type DiningServiceTypeFieldPath = FieldPath<DiningServiceTypeFormSchema>;

export const diningServiceTypeFieldGroups: Record<
  string,
  readonly DiningServiceTypeFieldPath[]
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
