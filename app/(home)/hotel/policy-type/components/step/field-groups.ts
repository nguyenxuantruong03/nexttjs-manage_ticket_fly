import { FieldPath } from "react-hook-form";

import { PolicyTypeFormSchema } from "../form/schema";

type PolicyTypeFieldPath = FieldPath<PolicyTypeFormSchema>;

export const policyTypeFieldGroups: Record<
  string,
  readonly PolicyTypeFieldPath[]
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
