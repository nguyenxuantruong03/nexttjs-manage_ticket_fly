import { FieldPath } from "react-hook-form";

import { TypeFormSchema } from "../form/schema";

type TypeFieldPath = FieldPath<TypeFormSchema>;

export const typeFieldGroups: Record<string, readonly TypeFieldPath[]> = {
  // ======================================================
  // BASIC
  // ======================================================

  basic: ["name", "description", "icon"],

  // ======================================================
  // SETTINGS
  // ======================================================

  settings: ["active", "sortOrder"],
};
