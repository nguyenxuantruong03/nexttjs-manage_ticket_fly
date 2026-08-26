import { FlyAircraftFormSchema } from "./schema";

import { flyAircraftDefaultValues } from "./default-values";
import { FlyAircraft } from "@/types/product-types/references/airline/aircraft/aircraft.types";


export function initFlyAircraftFormValues(
  flyAircraft: FlyAircraft,
): FlyAircraftFormSchema {
  if (!flyAircraft) {
    return structuredClone(flyAircraftDefaultValues);
  }

  return structuredClone(flyAircraft);
}