import { FieldPath } from "react-hook-form";

import { PlaceTypeFormSchema } from "../form/schema";

type PlaceTypeFieldPath = FieldPath<PlaceTypeFormSchema>;

export const placeTypeFieldGroups: Record<
  string,
  readonly PlaceTypeFieldPath[]
> = {
  // ======================================================
  // BASIC
  // ======================================================

  basic: [
    "name",
    "nativeName",
    "code",
    "description",
  ],

  // ======================================================
  // MEDIA
  // ======================================================

  media: [
    "icon",
    "thumbnail",
  ],

  // ======================================================
  // DISPLAY
  // ======================================================

  display: [
    "sortOrder",
  ],

  // ======================================================
  // STATUS
  // ======================================================

  status: [
    "active",
  ],
};