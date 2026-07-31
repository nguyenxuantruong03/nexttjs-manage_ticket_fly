import { FieldPath } from "react-hook-form";
import { DistrictFormSchema } from "../form/schema";

type DistrictFieldPath = FieldPath<DistrictFormSchema>;

export const districtFieldGroups: Record<string, readonly DistrictFieldPath[]> =
  {
    // ======================================================
    // BASIC
    // ======================================================

    basic: ["code", "name", "nativeName", "cityId"],

    // ======================================================
    // LOCATION
    // ======================================================

    location: ["latitude", "longitude"],
  };
