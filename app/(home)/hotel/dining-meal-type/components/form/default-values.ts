import { DiningMealTypeFormSchema } from "./schema";

export const diningMealTypeDefaultValues: DiningMealTypeFormSchema = {
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
