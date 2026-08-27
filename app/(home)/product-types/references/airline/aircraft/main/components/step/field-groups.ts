// field-groups.ts

import { FieldPath } from "react-hook-form";

import { FlyAircraftFormSchema } from "../schema/aircraft.schema";

type FlyAircraftFieldPath = FieldPath<FlyAircraftFormSchema>;

export const flyAircraftFieldGroups: Record<
  string,
  readonly FlyAircraftFieldPath[]
> = {
  // ======================================================
  // BASIC
  // ======================================================

  basic: ["airlineId", "manufacturer", "model", "code", "registrationNumber"],

  // ======================================================
  // SPECIFICATION
  // ======================================================

  specification: [
    "specification.maxRangeKm",
    "specification.cruiseSpeed",
    "specification.maxPassengers",
    "specification.engineType",
    "specification.engineCount",
    "specification.wingspan",
    "specification.length",
    "specification.height",
    "specification.firstFlightYear",
  ],

  // ======================================================
  // FACILITIES
  // ======================================================

  facilities: ["facilities"],

  // ======================================================
  // CABIN / SEAT
  // ======================================================

  cabins: ["cabins"],

  // ======================================================
  // IMAGES
  // ======================================================

  images: ["images"],

  // ======================================================
  // SEAT MAP
  // ======================================================

  seatMap: ["seatMap.imageUrl", "seatMap.svgUrl", "seatMap.jsonLayout"],

  // ======================================================
  // SCHEDULE
  // ======================================================

  schedule: ["schedule"],

  // ======================================================
  // STATUS
  // ======================================================

  status: ["active"],
};