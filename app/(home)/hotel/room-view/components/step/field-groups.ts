import { FieldPath } from "react-hook-form";

import { RoomViewFormSchema } from "../form/schema";

type RoomViewFieldPath = FieldPath<RoomViewFormSchema>;

export const roomViewFieldGroups: Record<
  string,
  readonly RoomViewFieldPath[]
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