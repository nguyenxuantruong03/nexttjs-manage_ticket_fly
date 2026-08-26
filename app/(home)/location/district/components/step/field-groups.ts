import { FieldPath } from "react-hook-form";
import { DistrictFormSchema } from "../form/schema";

type DistrictFieldPath = FieldPath<DistrictFormSchema>;

export const districtFieldGroups: Record<string, readonly DistrictFieldPath[]> =
  {
    // ======================================================
    // BASIC
    // ======================================================

    basic: ["code", "name", "nativeName", "cityId"],
    media: ["thumbnail", "coverImage", "bannerImage", "video", "images.0"],
    // ======================================================
    // LOCATION
    // ======================================================

    location: ["latitude", "longitude"],
    search: ["searchPriority", "searchable", "tagIds"],

    status: ["verified", "active"],
  };
