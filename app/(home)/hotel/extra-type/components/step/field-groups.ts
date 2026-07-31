import { FieldPath } from "react-hook-form";

import { ExtraTypeFormSchema } from "../form/schema";

type ExtraTypeFieldPath = FieldPath<ExtraTypeFormSchema>;

export const extraTypeFieldGroups: Record<
  string,
  readonly ExtraTypeFieldPath[]
> = {
  // ======================================================
  // BASIC
  // ======================================================

  basic: [
    "name",
    "description",
    "icon",
  ],

  // ======================================================
  // SETTINGS
  // ======================================================

  settings: [
    "active",
    "sortOrder",
  ],
};