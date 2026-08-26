import { FieldPath } from "react-hook-form";

import { RatePlanTypeFormSchema } from "../form/schema";

type RatePlanTypeFieldPath = FieldPath<RatePlanTypeFormSchema>;

export const ratePlanTypeFieldGroups: Record<
  string,
  readonly RatePlanTypeFieldPath[]
> = {
  // ======================================================
  // BASIC
  // ======================================================

  basic: [
    "name",
    "description",
    "icon",
  ],

  // ======================================================
  // SETTINGS
  // ======================================================

  settings: [
    "active",
    "sortOrder",
  ],
};