// field-groups.ts

import { FieldPath } from "react-hook-form";
import { CityFormSchema } from "../form/schema";

type CityFieldPath = FieldPath<CityFormSchema>;

export const cityFieldGroups: Record<string, readonly CityFieldPath[]> = {
  basic: [
    "name",
    "nativeName",
    "slug",
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
    "timezone",
    "utcOffset",
  ],

  media: ["thumbnail", "coverImage", "bannerImage", "video", "images.0"],

  travel: ["bestMonths.0", "rainyMonths.0"],

  search: [
    "priority",
    "displayOrder",
    "popularityScore",
    "featured",
    "popular",
    "searchable",
    "aliases.0",
    "keywords.0",
    "tags.0",
  ],

  seo: ["seoTitle", "seoDescription", "seoKeywords.0"],

  status: ["verified", "status"],
};
