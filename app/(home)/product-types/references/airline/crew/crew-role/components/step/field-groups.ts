// field-groups.ts

import { FieldPath } from "react-hook-form";

import { FlyCrewRoleFormSchema } from "../form/schema";

type FlyCrewRoleFieldPath = FieldPath<FlyCrewRoleFormSchema>;

export const flyCrewRoleFieldGroups: Record<
  string,
  readonly FlyCrewRoleFieldPath[]
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