import { FieldPath } from "react-hook-form";

import { FlyDelayReasonFormSchema } from "../form/schema";

type FlyDelayReasonFieldPath = FieldPath<FlyDelayReasonFormSchema>;

export const flyDelayReasonFieldGroups: Record<
  string,
  readonly FlyDelayReasonFieldPath[]
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
