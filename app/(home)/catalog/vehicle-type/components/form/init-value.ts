import { VehicleTypeFormSchema } from "./schema";

import { vehicleTypeDefaultValues } from "./default-values";
import { VehicleType } from "@/types/common/catalog/vehicle-type.type";

export function initVehicleTypeFormValues(
  vehicleType?: VehicleType,
): VehicleTypeFormSchema {
  if (!vehicleType) {
    return structuredClone(vehicleTypeDefaultValues);
  }

  return structuredClone(vehicleType);
}
