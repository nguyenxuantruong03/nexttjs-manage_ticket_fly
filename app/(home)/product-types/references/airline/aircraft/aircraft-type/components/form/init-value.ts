import { FlyAircraftTypeFormSchema } from "./schema";

import { flyAircraftTypeDefaultValues } from "./default-values";

import { FlyAircraftType } from "@/types/product-types/references/airline/aircraft/aircraft-type.type";

export function initFlyAircraftTypeFormValues(
  flyAircraftType?: FlyAircraftType,
): FlyAircraftTypeFormSchema {
  if (!flyAircraftType) {
    return structuredClone(flyAircraftTypeDefaultValues);
  }

  return {
    name: flyAircraftType.name ?? "",
    code: flyAircraftType.code ?? "",
    description: flyAircraftType.description ?? "",
    manufacturer: flyAircraftType.manufacturer ?? "",
    active: flyAircraftType.active ?? true,
    sortOrder: flyAircraftType.sortOrder ?? 0,
  };
}
