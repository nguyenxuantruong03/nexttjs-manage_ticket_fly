import { FieldPath } from "react-hook-form";

import { AccessibilityFormSchema } from "../form/schema";

type AccessibilityFieldPath = FieldPath<AccessibilityFormSchema>;

export const accessibilityFieldGroups: Record<
  string,
  readonly AccessibilityFieldPath[]
> = {
  basic: ["name", "description"],
};
