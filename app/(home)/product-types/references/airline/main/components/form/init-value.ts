import { FlyAirlineFormSchema } from "../schema/airline.schema";
import { flyAirlineDefaultValues } from "./default-values";

import { FlyAirline } from "@/types/product-types/references/airline/airline.types";

export function initFlyAirlineFormValues(
  flyAirline: FlyAirline,
): FlyAirlineFormSchema {
  if (!flyAirline) {
    return structuredClone(flyAirlineDefaultValues);
  }

  return structuredClone(flyAirline);
}
