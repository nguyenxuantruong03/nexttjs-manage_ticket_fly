// field-groups.ts

import { FieldPath } from "react-hook-form";
import { CountryFormSchema } from "../form/schema";

type CountryFieldPath = FieldPath<CountryFormSchema>;

export const countryFieldGroups: Record<string, readonly CountryFieldPath[]> = {
  basic: [
    "name",
    "officialName",
    "code",
    "iso2",
    "iso3",
    "phoneCode",
    "capital",
  ],

  location: ["continent", "timezoneId", "languageIds", "currencyId"],

  media: ["flag", "thumbnail", "coverImage"],

  search: ["tagIds", "searchPriority"],

  status: ["featured", "searchable", "active"],
};
