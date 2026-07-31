import { RatePlanTypeFormSchema } from "./schema";

export const ratePlanTypeDefaultValues: RatePlanTypeFormSchema = {
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
