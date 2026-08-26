// field-groups.ts

import { FieldPath } from "react-hook-form";
import { AddressFormSchema } from "../form/schema";

type AddressFieldPath = FieldPath<AddressFormSchema>;

export const addressFieldGroups: Record<string, readonly AddressFieldPath[]> = {
  // ======================================================
  // ADDRESS
  // ======================================================

  basic: ["name", "houseNumber", "street", "wardId", "districtId", "postcode"],

  // ======================================================
  // LOCATION
  // ======================================================

  location: [
    "countryId",
    "cityId",
    "latitude",
    "longitude",
    "plusCode",
    "precision",
  ],

  media: ["thumbnail", "coverImage", "bannerImage", "video", "images.0"],

  status: ["verified", "active"],
};
