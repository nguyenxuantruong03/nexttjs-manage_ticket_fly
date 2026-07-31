import { FieldPath } from "react-hook-form";
import { TimezoneFormSchema } from "../form/schema";

type TimezoneFieldPath = FieldPath<TimezoneFormSchema>;

export const timezoneFieldGroups: Record<
  string,
  readonly TimezoneFieldPath[]
> = {
  // ======================================================
  // BASIC
  // ======================================================

  basic: [
    "name",
    "displayName",
    "abbreviation",
    "utcOffset",
    "utcOffsetMinutes",
    "daylightSaving",
  ],

  // ======================================================
  // STATUS
  // ======================================================

  status: [
    "active",
  ],
};