// field-groups.ts

import { FieldPath } from "react-hook-form";

import { FlyCabinClassFormSchema } from "../form/schema";

type FlyCabinClassFieldPath = FieldPath<FlyCabinClassFormSchema>;

export const flyCabinClassFieldGroups: Record<
  string,
  readonly FlyCabinClassFieldPath[]
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
