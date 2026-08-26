// field-groups.ts

import { FieldPath } from "react-hook-form";

import { FlyAircraftTypeFormSchema } from "../form/schema";

type FlyAircraftTypeFieldPath = FieldPath<FlyAircraftTypeFormSchema>;

export const flyAircraftTypeFieldGroups: Record<
  string,
  readonly FlyAircraftTypeFieldPath[]
> = {
  // ======================================================
  // BASIC
  // ======================================================

  basic: ["name", "code", "description", "manufacturer"],

  // ======================================================
  // STATUS
  // ======================================================

  status: ["active", "sortOrder"],
};
