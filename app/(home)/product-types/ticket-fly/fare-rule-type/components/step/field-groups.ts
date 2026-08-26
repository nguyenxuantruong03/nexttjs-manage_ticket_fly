import { FieldPath } from "react-hook-form";

import { FlyFareRuleTypeFormSchema } from "../form/schema";

type FlyFareRuleTypeFieldPath = FieldPath<FlyFareRuleTypeFormSchema>;

export const flyFareRuleTypeFieldGroups: Record<
  string,
  readonly FlyFareRuleTypeFieldPath[]
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