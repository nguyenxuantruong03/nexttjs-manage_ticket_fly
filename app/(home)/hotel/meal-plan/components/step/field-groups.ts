import { FieldPath } from "react-hook-form";

import { MealPlanFormSchema } from "../form/schema";

type MealPlanFieldPath = FieldPath<MealPlanFormSchema>;

export const mealPlanFieldGroups: Record<string, readonly MealPlanFieldPath[]> =
  {
    // ======================================================
    // BASIC
    // ======================================================

    basic: ["name", "description", "icon"],

    // ======================================================
    // SETTINGS
    // ======================================================

    settings: ["active", "sortOrder"],
  };
