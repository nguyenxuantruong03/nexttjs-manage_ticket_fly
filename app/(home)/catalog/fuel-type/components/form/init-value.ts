import { FuelTypeFormSchema } from "./schema";

import { fuelTypeDefaultValues } from "./default-values";
import { FuelType } from "@/types/common/catalog/fuel-type";


export function initFuelTypeFormValues(
  fuelType?: FuelType,
): FuelTypeFormSchema {
  if (!fuelType) {
    return structuredClone(fuelTypeDefaultValues);
  }

  return structuredClone(fuelType);
}