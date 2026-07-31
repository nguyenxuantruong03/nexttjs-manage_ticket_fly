import { FieldPath } from "react-hook-form";

import { RoomCategoryFormSchema } from "../form/schema";

type RoomCategoryFieldPath = FieldPath<RoomCategoryFormSchema>;

export const roomCategoryFieldGroups: Record<
  string,
  readonly RoomCategoryFieldPath[]
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