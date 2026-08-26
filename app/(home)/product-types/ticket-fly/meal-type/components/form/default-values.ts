import { FlyMealTypeFormSchema } from "./schema";

export const flyMealTypeDefaultValues: FlyMealTypeFormSchema = {
  // ======================================================
  // BASIC
  // ======================================================

  name: "",

  description: "",

  icon: "",

  // ======================================================
  // STATUS
  // ======================================================

  sortOrder: 0,

  active: true,
};
