import { FieldPath } from "react-hook-form";

import { BrandFormSchema } from "../form/schema";

type BrandFieldPath = FieldPath<BrandFormSchema>;

export const brandFieldGroups: Record<
  string,
  readonly BrandFieldPath[]
> = {
  // ======================================================
  // BASIC
  // ======================================================

  basic: ["name", "description", "logo"],

  // ======================================================
  // SETTINGS
  // ======================================================

  settings: ["active"],
};
