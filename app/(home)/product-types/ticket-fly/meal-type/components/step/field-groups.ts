import { FieldPath } from "react-hook-form";

import { FlyMealTypeFormSchema } from "../form/schema";

type FlyMealTypeFieldPath = FieldPath<FlyMealTypeFormSchema>;

export const flyMealTypeFieldGroups: Record<
  string,
  readonly FlyMealTypeFieldPath[]
> = {
  // ======================================================
  // BASIC
  // ======================================================

  basic: ["name", "description", "icon"],

  // ======================================================
  // STATUS
  // ======================================================

  status: ["sortOrder", "active"],
};
