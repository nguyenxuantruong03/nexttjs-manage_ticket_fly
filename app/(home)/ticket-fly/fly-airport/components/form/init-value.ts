import { FlyAirport } from "@/types/bookings/ticket-fly/airport/airport.types";
import { FlyAirportFormSchema } from "./schema";
import { flyAirportDefaultValues } from "./default-values";

export function initFlyAirportFormValues(
  flyairport: FlyAirport,
): FlyAirportFormSchema {
  if (!flyairport) {
    return structuredClone(flyAirportDefaultValues);
  }

  return structuredClone(flyairport);
}
