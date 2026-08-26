import { FlyAirportFormSchema } from "./schema";
import { flyAirportDefaultValues } from "./default-values";
import { FlyAirport } from "@/types/product-types/references/airport/airport.types";

export function initFlyAirportFormValues(
  flyairport: FlyAirport,
): FlyAirportFormSchema {
  if (!flyairport) {
    return structuredClone(flyAirportDefaultValues);
  }

  return structuredClone(flyairport);
}
