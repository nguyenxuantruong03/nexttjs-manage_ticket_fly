// field-groups.ts

import { FieldPath } from "react-hook-form";

import { ContinentFormSchema } from "../form/schema";

type ContinentFieldPath = FieldPath<ContinentFormSchema>;

export const continentFieldGroups: Record<
  string,
  readonly ContinentFieldPath[]
> = {
  basic: [
    "name",
    "nativeName",
    "code",
    "description",
  ],

  media: [
    "thumbnail",
    "coverImage",
  ],

  display: [
    "sortOrder",
  ],

  status: [
    "active",
  ],
};