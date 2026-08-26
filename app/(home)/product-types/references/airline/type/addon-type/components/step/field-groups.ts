// field-groups.ts

import { FieldPath } from "react-hook-form";

import { FlyAddonTypeFormSchema } from "../form/schema";

type FlyAddonTypeFieldPath = FieldPath<FlyAddonTypeFormSchema>;

export const flyAddonTypeFieldGroups: Record<
  string,
  readonly FlyAddonTypeFieldPath[]
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