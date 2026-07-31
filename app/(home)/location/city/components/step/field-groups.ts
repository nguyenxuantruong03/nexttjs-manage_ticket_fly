// field-groups.ts

import { FieldPath } from "react-hook-form";
import { CityFormSchema } from "../form/schema";

type CityFieldPath = FieldPath<CityFormSchema>;

export const cityFieldGroups: Record<string, readonly CityFieldPath[]> = {
  basic: [
    "name",
    "nativeName",
    "code",
    "iataCode",
    "subtitle",
    "shortDescription",
    "description",
  ],

  location: [
    "countryId",
    "administrativeArea",
    "region",
    "isCapital",
    "latitude",
    "longitude",
    "elevation",
    "timezoneId",
  ],

  media: ["thumbnail", "coverImage", "bannerImage", "video", "images.0"],

  travel: ["bestMonths.0", "rainyMonths.0"],

  search: [
    "searchPriority",
    "displayOrder",
    "popularityScore",
    "featured",
    "popular",
    "searchable",
    "tagIds",
  ],

  status: ["verified", "status"],
};
