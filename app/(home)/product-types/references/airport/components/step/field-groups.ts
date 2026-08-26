// field-groups.ts

import { FieldPath } from "react-hook-form";

import { FlyAirportFormSchema } from "../form/schema";

type FlyAirportFieldPath = FieldPath<FlyAirportFormSchema>;

export const flyAirportFieldGroups: Record<
  string,
  readonly FlyAirportFieldPath[]
> = {
  // ======================================================
  // BASIC
  // ======================================================

  basic: ["name", "code", "iataCode", "icaoCode"],

  // ======================================================
  // AIRPORT
  // ======================================================

  airport: ["terminalCount", "lat", "lng"],

  // ======================================================
  // RELATION
  // ======================================================

  relation: ["addressId"],
};
