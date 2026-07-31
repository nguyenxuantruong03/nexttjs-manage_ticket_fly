import { FieldPath } from "react-hook-form";

import { RoomMediaCategoryFormSchema } from "../form/schema";

type RoomMediaCategoryFieldPath =
  FieldPath<RoomMediaCategoryFormSchema>;

export const roomMediaCategoryFieldGroups: Record<
  string,
  readonly RoomMediaCategoryFieldPath[]
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