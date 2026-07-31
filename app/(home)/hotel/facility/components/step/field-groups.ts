import { FieldPath } from "react-hook-form";

import { FacilityFormSchema } from "../form/schema";

type FacilityFieldPath = FieldPath<FacilityFormSchema>;

export const facilityFieldGroups: Record<
  string,
  readonly FacilityFieldPath[]
> = {
  // ======================================================
  // BASIC
  // ======================================================

  basic: [
    "name",
    "description",
    "icon",
    "categoryId",
  ],

  // ======================================================
  // SETTINGS
  // ======================================================

  settings: [
    "active",
    "sortOrder",
  ],
};