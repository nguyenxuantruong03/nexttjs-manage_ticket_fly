import { FieldPath } from "react-hook-form";

import { FlySeatTypeFormSchema } from "../form/schema";

type FlySeatTypeFieldPath = FieldPath<FlySeatTypeFormSchema>;

export const flySeatTypeFieldGroups: Record<
  string,
  readonly FlySeatTypeFieldPath[]
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
