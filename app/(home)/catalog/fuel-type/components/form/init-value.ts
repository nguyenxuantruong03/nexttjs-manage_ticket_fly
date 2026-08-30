import { FuelTypeFormSchema } from "./schema";
import { fuelTypeDefaultValues } from "./default-values";
import { FuelType } from "@/types/common/catalog/fuel-type";

export function initFuelTypeFormValues(
  fuelType?: FuelType,
): FuelTypeFormSchema {
  if (!fuelType) {
    return structuredClone(fuelTypeDefaultValues);
  }

  return {
    name: fuelType.name ?? "",
    icon: fuelType.icon ?? null,

    // ======================================================
    // BOOKING TYPE
    // ======================================================

    bookingTypeIds:
      fuelType.bookingTypes?.map((bookingType) => bookingType.id) ?? [],

    // ======================================================
    // STATUS
    // ======================================================

    active: fuelType.active ?? true,
    sortOrder: fuelType.sortOrder ?? 0,
  };
}
