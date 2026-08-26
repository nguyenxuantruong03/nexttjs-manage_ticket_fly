import { FlyAircraftTypeFormSchema } from "./schema";

import { flyAircraftTypeDefaultValues } from "./default-values";
import { FlyAircraftType } from "@/types/product-types/references/airline/aircraft/aircraft-type.type";

export function initFlyAircraftTypeFormValues(
  flyAircraftType: FlyAircraftType,
): FlyAircraftTypeFormSchema {
  if (!flyAircraftType) {
    return structuredClone(flyAircraftTypeDefaultValues);
  }

  return structuredClone(flyAircraftType);
}
