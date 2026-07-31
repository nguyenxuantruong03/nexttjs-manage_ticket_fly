import { FieldPath } from "react-hook-form";

import { MediaCategoryFormSchema } from "../form/schema";

type MediaCategoryFieldPath = FieldPath<MediaCategoryFormSchema>;

export const mediaCategoryFieldGroups: Record<
  string,
  readonly MediaCategoryFieldPath[]
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
    "sortOrder",
    "active",
  ],
};