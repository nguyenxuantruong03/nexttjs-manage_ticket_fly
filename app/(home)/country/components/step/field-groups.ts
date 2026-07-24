// field-groups.ts

import { FieldPath } from "react-hook-form";
import { CountryFormSchema } from "../form/schema";

type CountryFieldPath = FieldPath<CountryFormSchema>;

export const countryFieldGroups: Record<string, readonly CountryFieldPath[]> = {
  basic: [
    "name",
    "officialName",
    "slug",
    "code",
    "iso2",
    "iso3",
    "phoneCode",
    "capital",
  ],

  location: ["continent", "timezone", "languages.0"],

  media: ["flag", "thumbnail", "coverImage"],

  search: ["aliases.0", "keywords.0", "priority"],

  status: ["featured", "searchable", "active"],
};
