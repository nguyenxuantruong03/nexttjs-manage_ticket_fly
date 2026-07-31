import { FieldPath } from "react-hook-form";
import { BathroomTypeFormSchema } from "../form/schema";

type BathroomTypeFieldPath = FieldPath<BathroomTypeFormSchema>;

export const bathroomTypeFieldGroups: Record<
  string,
  readonly BathroomTypeFieldPath[]
> = {
  // ======================================================
  // BASIC
  // ======================================================

  basic: ["name", "description", "icon"],

  // ======================================================
  // SETTINGS
  // ======================================================

  settings: ["active", "sortOrder"],
};
