// field-groups.ts

import { FieldPath } from "react-hook-form";

import { CountryFormSchema } from "../form/schema";

type CountryFieldPath = FieldPath<CountryFormSchema>;

export const countryFieldGroups: Record<string, readonly CountryFieldPath[]> = {
  // ======================================================
  // BASIC
  // ======================================================

  basic: [
    "name",
    "officialName",
    "code",
    "iso2",
    "iso3",
    "phoneCode",
    "capital",
  ],

  // ======================================================
  // LOCATION
  // ======================================================

  location: ["continentId", "timezoneId", "languageIds", "currencyId"],

  // ======================================================
  // MEDIA
  // ======================================================

  media: [
    "flag",
    "thumbnail",
    "coverImage",
    "bannerImage",
    "video",
    "images.0",
  ],

  // ======================================================
  // SEARCH
  // ======================================================

  search: ["tagIds", "searchPriority", "featured", "searchable"],

  // ======================================================
  // STATUS
  // ======================================================

  status: ["active"],
};
