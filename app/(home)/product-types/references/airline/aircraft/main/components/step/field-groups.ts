// field-groups.ts

import { FieldPath } from "react-hook-form";

import { FlyAircraftFormSchema } from "../form/schema";

type FlyAircraftFieldPath = FieldPath<FlyAircraftFormSchema>;

export const flyAircraftFieldGroups: Record<
  string,
  readonly FlyAircraftFieldPath[]
> = {
  // ======================================================
  // BASIC
  // ======================================================

  basic: [
    "manufacturer",
    "model",
    "code",
    "registrationNumber",
  ],

  // ======================================================
  // STATUS
  // ======================================================

  status: ["active"],
};