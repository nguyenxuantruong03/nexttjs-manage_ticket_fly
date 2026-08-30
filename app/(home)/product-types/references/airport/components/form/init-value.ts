import { FlyAirportFormSchema } from "../schema/schema";

import { flyAirportDefaultValues } from "./default-values";

import { FlyAirport } from "@/types/product-types/references/airport/airport.types";

export function initFlyAirportFormValues(
  flyAirport?: FlyAirport,
): FlyAirportFormSchema {
  if (!flyAirport) {
    return structuredClone(flyAirportDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    name: flyAirport.name ?? "",

    code: flyAirport.code ?? "",

    iataCode: flyAirport.iataCode ?? "",

    icaoCode: flyAirport.icaoCode ?? "",

    // ======================================================
    // CAPACITY
    // ======================================================

    terminalCount: flyAirport.terminalCount ?? undefined,

    // ======================================================
    // LOCATION
    // ======================================================

    lat: flyAirport.lat ?? undefined,

    lng: flyAirport.lng ?? undefined,

    addressId: flyAirport.addressId ?? "",

    // ======================================================
    // OPERATIONS
    // ======================================================

    diversions: flyAirport.diversions ?? [],

    // ======================================================
    // CONNECTION
    // ======================================================

    minimumConnectionTime: flyAirport.minimumConnectionTime ?? [],
  };
}
