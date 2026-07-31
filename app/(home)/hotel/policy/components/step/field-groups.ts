import { FieldPath } from "react-hook-form";

import { PolicyFormSchema } from "../form/schema";

type PolicyFieldPath = FieldPath<PolicyFormSchema>;

export const policyFieldGroups: Record<string, readonly PolicyFieldPath[]> = {
  // ======================================================
  // BASIC
  // ======================================================

  basic: ["name", "typeId", "description"],
};
