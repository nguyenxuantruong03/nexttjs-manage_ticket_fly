// field-groups.ts

import { FieldPath } from "react-hook-form";
import { WardFormSchema } from "../form/schema";

type WardFieldPath = FieldPath<WardFormSchema>;

export const wardFieldGroups: Record<string, readonly WardFieldPath[]> = {
  // ======================================================
  // BASIC
  // ======================================================

  basic: ["code", "name", "nativeName"],

  // ======================================================
  // LOCATION
  // ======================================================

  location: ["latitude", "longitude", "districtId"],
};
