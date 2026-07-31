import { MealPlanFormSchema } from "./schema";

export const mealPlanDefaultValues: MealPlanFormSchema = {
  // ======================================================
  // BASIC
  // ======================================================

  name: "",

  description: "",

  icon: "",

  // ======================================================
  // SETTINGS
  // ======================================================

  active: true,

  sortOrder: 0,
};
