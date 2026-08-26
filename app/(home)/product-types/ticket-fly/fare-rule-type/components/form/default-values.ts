import { FlyFareRuleTypeFormSchema } from "./schema";

export const flyFareRuleTypeDefaultValues: FlyFareRuleTypeFormSchema = {
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