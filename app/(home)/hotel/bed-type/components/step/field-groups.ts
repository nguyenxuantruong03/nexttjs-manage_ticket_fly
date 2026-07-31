import { FieldPath } from "react-hook-form";

import { BedTypeFormSchema } from "../form/schema";

type BedTypeFieldPath = FieldPath<BedTypeFormSchema>;

export const bedTypeFieldGroups: Record<
  string,
  readonly BedTypeFieldPath[]
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