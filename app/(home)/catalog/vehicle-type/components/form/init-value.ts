import { VehicleTypeFormSchema } from "./schema";

import { vehicleTypeDefaultValues } from "./default-values";

import { VehicleType } from "@/types/common/catalog/vehicle-type.type";

export function initVehicleTypeFormValues(
  vehicleType?: VehicleType,
): VehicleTypeFormSchema {
  if (!vehicleType) {
    return structuredClone(vehicleTypeDefaultValues);
  }

  return {
    name: vehicleType.name ?? "",
    description: vehicleType.description ?? null,
    icon: vehicleType.icon ?? null,

    // ======================================================
    // BOOKING TYPE
    // ======================================================

    bookingTypeIds:
      vehicleType.bookingTypes?.map((bookingType) => bookingType.id) ?? [],

    // ======================================================
    // STATUS
    // ======================================================

    active: vehicleType.active ?? true,
    sortOrder: vehicleType.sortOrder ?? 0,
  };
}
