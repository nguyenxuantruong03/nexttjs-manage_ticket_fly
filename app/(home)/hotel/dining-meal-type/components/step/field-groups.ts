import { FieldPath } from "react-hook-form";

import { DiningMealTypeFormSchema } from "../form/schema";

type DiningMealTypeFieldPath = FieldPath<DiningMealTypeFormSchema>;

export const diningMealTypeFieldGroups: Record<
  string,
  readonly DiningMealTypeFieldPath[]
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