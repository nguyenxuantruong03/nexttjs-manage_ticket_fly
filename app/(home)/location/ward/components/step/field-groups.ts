// field-groups.ts

import { FieldPath } from "react-hook-form";
import { WardFormSchema } from "../form/schema";

type WardFieldPath = FieldPath<WardFormSchema>;

export const wardFieldGroups: Record<string, readonly WardFieldPath[]> = {
  // ======================================================
  // BASIC
  // ======================================================

  basic: ["code", "name", "nativeName"],
  media: ["thumbnail", "coverImage", "bannerImage", "video", "images.0"],
  // ======================================================
  // LOCATION
  // ======================================================

  location: ["latitude", "longitude", "districtId"],
  search: ["searchPriority", "searchable", "tagIds"],
  status: ["verified", "active"],
};
