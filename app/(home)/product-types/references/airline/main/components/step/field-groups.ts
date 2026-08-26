// field-groups.ts

import { FieldPath } from "react-hook-form";

import { FlyAirlineFormSchema } from "../form/schema";

type FlyAirlineFieldPath = FieldPath<FlyAirlineFormSchema>;

export const flyAirlineFieldGroups: Record<
  string,
  readonly FlyAirlineFieldPath[]
> = {
  // ======================================================
  // BASIC
  // ======================================================

  basic: [
    "name",
    "legalName",
    "iataCode",
    "icaoCode",
    "callsign",
    "country",
    "website",
    "hotline",
    "email",
    "logo",
    "banner",
    "description",
  ],

  // ======================================================
  // STATUS
  // ======================================================

  status: ["active"],
};
