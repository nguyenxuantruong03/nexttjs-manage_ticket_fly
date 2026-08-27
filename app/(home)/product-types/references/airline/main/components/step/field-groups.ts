// field-groups.ts

import { FieldPath } from "react-hook-form";
import { FlyAirlineFormSchema } from "../schema/airline.schema";

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
  // IMAGES
  // ======================================================

  images: ["images"],

  // ======================================================
  // ADDON
  // ======================================================

  addon: ["addon"],

  // ======================================================
  // INTERLINE
  // ======================================================

  interline: ["interline"],

  // ======================================================
  // CODESHARE
  // ======================================================

  operatingCodeshares: ["operatingCodeshares"],
  marketingCodeshares: ["marketingCodeshares"],

  // ======================================================
  // WIFI PACKAGE
  // ======================================================

  wifiPackage: ["wifiPackage"],

  // ======================================================
  // STATUS
  // ======================================================

  status: ["active"],
};
