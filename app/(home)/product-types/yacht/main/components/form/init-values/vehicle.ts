import { Yacht } from "@/types/product-types/yacht/core/yacht.types";

import { YachtFormSchema } from "../schema/core/yacht.schema";

export function initYachtVehicleValues(
  yacht: Yacht,
): Pick<YachtFormSchema, "vehicle"> {
  return {
    vehicle: yacht.vehicle
      ? {
          name: yacht.vehicle.name ?? "",
          manufacturer: yacht.vehicle.manufacturer ?? "",
          model: yacht.vehicle.model ?? "",
          year: yacht.vehicle.year ?? null,
          registrationNumber: yacht.vehicle.registrationNumber ?? null,
          lengthMeter: yacht.vehicle.lengthMeter ?? null,
          widthMeter: yacht.vehicle.widthMeter ?? null,
          speedKnots: yacht.vehicle.speedKnots ?? null,
          fuelTypeId: yacht.vehicle.fuelTypeId ?? "",
          conditionId: yacht.vehicle.conditionId ?? "",
          condition: yacht.vehicle.condition ?? null,

          capacity: yacht.vehicle.capacity
            ? {
                vehicleId: yacht.vehicle.capacity.vehicleId ?? "",
                guestCapacity: yacht.vehicle.capacity.guestCapacity ?? 0,
                overnightCapacity:
                  yacht.vehicle.capacity.overnightCapacity ?? null,
                cabinCount: yacht.vehicle.capacity.cabinCount ?? null,
                bathroomCount: yacht.vehicle.capacity.bathroomCount ?? null,
                crewCapacity: yacht.vehicle.capacity.crewCapacity ?? null,
              }
            : null,

          facilities:
            yacht.vehicle.facilities?.map((facility) => ({
              facilityId: facility.facilityId ?? "",
              active: facility.active ?? true,
            })) ?? [],

          specification: yacht.vehicle.specification
            ? {
                vehicleId: yacht.vehicle.specification.vehicleId ?? "",
                enginePowerHp:
                  yacht.vehicle.specification.enginePowerHp ?? null,
                cruisingSpeedKnots:
                  yacht.vehicle.specification.cruisingSpeedKnots ?? null,
                maxSpeedKnots:
                  yacht.vehicle.specification.maxSpeedKnots ?? null,
                fuelCapacityLiter:
                  yacht.vehicle.specification.fuelCapacityLiter ?? null,
                rangeNm: yacht.vehicle.specification.rangeNm ?? null,
              }
            : null,

          images:
            yacht.vehicle.images?.map((image) => ({
              vehicleId: image.vehicleId ?? "",
              mediaId: image.mediaId ?? "",
              categoryId: image.categoryId ?? null,
              isPrimary: image.isPrimary ?? false,
              sortOrder: image.sortOrder ?? 0,
            })) ?? [],
        }
      : null,
  };
}
