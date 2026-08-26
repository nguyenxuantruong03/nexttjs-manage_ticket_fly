// field-groups.ts

import { FieldPath } from "react-hook-form";

import { FlyCrewDutyFormSchema } from "../form/schema";

type FlyCrewDutyFieldPath = FieldPath<FlyCrewDutyFormSchema>;

export const flyCrewDutyFieldGroups: Record<
  string,
  readonly FlyCrewDutyFieldPath[]
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
